import React, { useState, useEffect } from 'react';
import NotebookApp from './Notebook/NotebookApp.jsx';
import NotebookList from './NotebookList.jsx';
import { Typography, AppBar, CssBaseline, Toolbar, Container } from '@material-ui/core';
import { Book } from '@material-ui/icons'
import { getNotebooks, getEntries } from '../../API';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';

function App() {
  const [notebookList, setnotebookList] = useState([])
  const [mainView, setMainView] = useState('Notebooks')
  const [selectedNB, setSelectedNB] = useState({})
  const [needRender, setNeedRender] = useState(false)
  const [entryCount, setEntryCount] = useState({})

  useEffect(() => {
    async function fetchData() {
      let obj = {}
      const data = await getNotebooks()
      for (let i = 0; i < data.data.length; i++) {
        const entries = await getEntries({ notebookId: data.data[i]._id })
        console.log('Entries: ', entries)
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
        return <NotebookList entryCount={entryCount} setNeedRender={setNeedRender} setSelectedNB={setSelectedNB} notebookList={notebookList} setMainView={setMainView} />;
      case "NotebookApp":
        return (<NotebookApp selectedNB={selectedNB} setMainView={setMainView} />)
    }
  }
  return (
    <div>
      <div style={{ position: 'fixed', zIndex: '2', width: '100%' }}>
        <CssBaseline />
        <AppBar style={{ backgroundColor: '#1976d2' }} position='relative'>
          <Toolbar>
            <Book />
            <Typography variant='h6'>
              STAR Note
            </Typography>
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
    </div>
  )
}

export default App;