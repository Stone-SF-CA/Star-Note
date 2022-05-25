import React, { useState } from 'react';
import HomePage from './HomePage.jsx';
import Button from '@mui/material/Button';
import { Typography, Container, CardMedia } from '@material-ui/core';
import useStyles from './styles'

function Description({ setView, clickedCard, renderView }) {
  console.log('Clicked Card: ', clickedCard)
  const classes = useStyles();
  return (
    <Container maxWidth='md'>
      <div className={classes.buttons}>
        <Button onClick={() => setView('HomePage')} variant='outlined' color='primary'>Back!</Button>
      </div>
      <br />
      <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
        Photo Detail
      </Typography>
      <CardMedia
        component="img"
        height="300"
        image={clickedCard.src}
      />
      <Typography variant='h6' align='center' color='textPrimary' gutterBottom>
        {clickedCard.text}
      </Typography>
    </Container>
  )
}

export default Description;

//
// each photo = {
//   0: {
//     src: ------,
//   text: ------,
//     description: ---,
//   }
// }