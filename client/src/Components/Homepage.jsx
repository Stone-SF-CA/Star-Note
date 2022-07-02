import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NotebookApp from './Notebook/NotebookApp.jsx';
import NotebookList from './NotebookList.jsx';
import { Typography, AppBar, CssBaseline, Toolbar, Container } from '@material-ui/core';
import { Book } from '@material-ui/icons'
import { getNotebooks, getEntries } from '../../API';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebase.js';

export const UserContext = createContext();

function App({ isAuth, setIsAuth }) {
  const [notebookList, setnotebookList] = useState([])
  const [mainView, setMainView] = useState('Notebooks')
  const [selectedNB, setSelectedNB] = useState({})
  const [needRender, setNeedRender] = useState(false)
  const [entryCount, setEntryCount] = useState({})
  let navigate = useNavigate();

  const signUserOut = () => {
    console.log('hit')
    signOut(auth)
      .then(() => {
        console.log('hit inside .then')
        window.localStorage.clear();
        setIsAuth(false);
        navigate('/login');
      })
  }
  useEffect(() => {
    async function fetchData() {
      let obj = {}
      const data = await getNotebooks()
      for (let i = 0; i < data.data.length; i++) {
        const entries = await getEntries({ notebookId: data.data[i]._id })
        obj[data.data[i]._id] = entries.data.length
      }
      setEntryCount(obj)
      setnotebookList(data.data)
    }
    fetchData();
  }, [needRender])

  const renderView = () => {
    switch (mainView) {
      case "Notebooks":
        return <NotebookList setNeedRender={setNeedRender} setSelectedNB={setSelectedNB} setMainView={setMainView} />;
      case "NotebookApp":
        return (<NotebookApp setMainView={setMainView} />)
    }
  }
  return (
    <UserContext.Provider value={{ notebookList: notebookList, selectedNB: selectedNB, entryCount: entryCount }}>
      <div style={{ position: 'fixed', zIndex: '2', width: '100%' }}>
        <CssBaseline />
        <AppBar style={{ backgroundColor: '#1976d2' }} position='relative'>
          <Toolbar style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <span style={{ display: 'flex' }}>
              <Book />
              <Typography variant='h6'>
                STAR Note
              </Typography>
            </span>
            <div style={{ display: 'flex' }}>
              <Typography variant='h6'>
                <Link to='/'>Home</Link>
              </Typography>
              <Typography variant='h6'>
                {!isAuth ? <Link to='/login'>Login</Link> : <Button style={{ color: 'white' }} variant="outlined" onClick={signUserOut}>Logout</Button>}
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
        <IconButton style={{ color: '#1976d2' }} onClick={() => {
          setNeedRender(prev => !prev)
          setMainView('Notebooks')
        }} aria-label="settings">
          <HomeIcon fontSize='large' />
        </IconButton>
      </div>
      <div>
        {renderView()}
      </div>
      {/* <div style={{ marginTop: '100px', padding: '10px', display: 'flex', color: '#fff', background: '#000000' }}>
        <Book />
        <Typography color='#fff' variant='h6'>
          STAR Note
        </Typography>
      </div> */}
    </UserContext.Provider >
  )
}

export default App;