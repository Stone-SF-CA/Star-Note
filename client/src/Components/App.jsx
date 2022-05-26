import React, { useState, useEffect } from 'react';
import NotebookApp from './Notebook/NotebookApp.jsx';
import NotebookList from './NotebookList.jsx';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { Book } from '@material-ui/icons'
import { getNotebooks } from '../../API';


function App() {
  const [notebookList, setnotebookList] = useState([])
  const [mainView, setMainView] = useState('Notebooks')
  const [selectedNB, setSelectedNB] = useState('')
  useEffect(() => {
    getNotebooks()
      .then(data => {
        setnotebookList(data.data)
      })
      .catch(err => console.log(err))
  }, [])

  const renderView = () => {
    console.log('SELECTED ID:', selectedNB)
    switch (mainView) {
      case "Notebooks":
        return <NotebookList setSelectedNB={setSelectedNB} notebookList={notebookList} setMainView={setMainView} />;
      case "NotebookApp":
        return (<NotebookApp selectedNB={selectedNB} setMainView={setMainView} />)
    }
  }
  return (
    <div>
      <CssBaseline />
      <AppBar color="primary" position='relative'>
        <Toolbar>
          <Book />
          <Typography variant='h6'>
            STAR Note
          </Typography>
        </Toolbar>
      </AppBar>
      {renderView()}
    </div>
  )
}

export default App;