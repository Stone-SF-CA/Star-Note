import React, { useState } from 'react';
import HomePage from './HomePage.jsx';
import Description from './Description.jsx';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons'
import useStyles from './styles'

function App() {
  const classes = useStyles();
  const [clickedCard, setClickedCard] = useState([])
  const [view, setView] = useState('HomePage')
  const [maxId, setMaxId] = useState(0);
  const [photoList, setPhotoList] = useState({});

  const renderView = () => {
    console.log('HIT RENDERVIEW')
    switch (view) {
      case "Description":
        return <Description setView={setView} clickedCard={clickedCard} renderView={renderView} />;
      case "HomePage":
        return (<HomePage
          photoList={photoList}
          setPhotoList={setPhotoList}
          maxId={maxId}
          setMaxId={setMaxId}
          setView={setView}
          setClickedCard={setClickedCard} />
        )
    }
  }
  return (
    <div>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant='h6'>
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      {renderView(view)}
    </div>
  )
}

export default App;