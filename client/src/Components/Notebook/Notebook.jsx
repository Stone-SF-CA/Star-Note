import React, { useState } from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import useStyles from './styles'
import CardList from './CardList.jsx'
import CreateEntry from './CreateEntry/CreateEntry.jsx'

function Notebook({ open, setOpen, tyPage, setTyPage, displayCardList, setDisplayCardList, cardList, setCardList, maxId, setMaxId, setView, setClickedCard }) {
  const classes = useStyles();

  return (
    <>
      <main>
        <div className={classes.container}>
          <Container maxWidth='lg'>
            <CreateEntry open={open} setOpen={setOpen} tyPage={tyPage} setTyPage={setTyPage} />
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
              Notebook
            </Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              Hello everyone, this is a notebook!!!
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justify='center'>
                {/* <Grid item>
                  {
                    (displayCardList.length === 0) ?
                      <Button variant='contained' color='primary' onClick={() => setDisplayCardList(cardList)}>
                        See my photos
                      </Button> :
                      <Button variant='contained' color='primary' onClick={() => setDisplayCardList([])}>
                        Hide my photos
                      </Button>
                  }
                </Grid> */}
                <CardList open={open} setOpen={setOpen} setClickedCard={setClickedCard} setView={setView} displayCardList={displayCardList} />
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid>

          </Grid>
        </Container>
      </main>
    </>
  );
}

export default Notebook;