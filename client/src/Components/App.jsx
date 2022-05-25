import React, { useState } from 'react';
import HomePage from './HomePage.jsx';
import Description from './Description.jsx';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons'
import useStyles from './styles'

function App() {
  const classes = useStyles();
  const [clickedCard, setClickedCard] = useState([])

  const renderView = (view) => {
    switch (view) {
      case "Description":
        return <Description clickedCard={clickedCard} renderView={renderView} />
      case "HomePage":
        return <HomePage />
      default:
        return <HomePage />
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
      {/* {renderView()} */}
      <Description clickedCard={clickedCard} renderView={renderView} />
    </div>
  )
}

export default App;