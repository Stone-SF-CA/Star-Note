import React, { useState } from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import useStyles from './styles'
import CardList from './CardList.jsx'
import CreateEntry from './CreateEntry/CreateEntry.jsx'

function Notebook({ selectedNB, open, setOpen, tyPage, setTyPage, displayCardList, setDisplayCardList, cardList, setCardList, maxId, setMaxId, setView, setClickedCard }) {
  const classes = useStyles();

  return (
    <>
      <main>
        <div className={classes.container} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: '90%', marginTop: '50px', paddingTop: '80px', paddingLeft: '10%', paddingRight: '10%', background: '#fafafa', position: 'fixed', zIndex: '1' }}>
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
              {selectedNB.title}
            </Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              {selectedNB.description}
            </Typography>
            <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
              <CreateEntry selectedNB={selectedNB} open={open} setOpen={setOpen} tyPage={tyPage} setTyPage={setTyPage} />
            </div>
          </div>
          <Container style={{ marginTop: '20%' }} maxWidth='lg'>
            <CardList open={open} setOpen={setOpen} setClickedCard={setClickedCard} setView={setView} displayCardList={displayCardList} />
          </Container>
        </div>
      </main>
    </>
  );
}

export default Notebook;