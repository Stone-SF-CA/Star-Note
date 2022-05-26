import React, { useState, useEffect } from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { Book } from '@material-ui/icons'
import { styled } from '@mui/material/styles';
import useStyles from './Notebook/styles'
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  paddingLeft: '50px',
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));
function NotebookList({ setSelectedNB, notebookList, setMainView }) {

  return (
    <Container maxWidth='lg'>
      <br />
      <br />
      <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
        Your Notebooks
      </Typography>
      <Typography variant='h5' align='center' color='textSecondary' paragraph>
        This is a list of notebooks
      </Typography>
      <br />
      {/* <div style={{ display: 'flex' }}> */}
      <Box sx={{ flexGrow: 1 }}>
        {notebookList.map(notebook => {
          console.log('notebook: ', notebook._id)
          return (
            <>
              <Grid style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }} container spacing={2}>
                <Grid item xs={10}>
                  <Item>
                    <Button onClick={() => {
                      console.log('notebook id onclick: ', notebook._id)
                      setSelectedNB(notebook._id)
                      setMainView('NotebookApp')
                    }} style={{ justifyContent: 'flex-start', width: '100%' }} color='primary'>
                      <Typography align='left' component="div">
                        <Box sx={{ fontWeight: 'bold', m: 1, fontSize: 20 }}>{notebook.title}</Box>
                      </Typography>
                    </Button>
                  </Item>
                </Grid>
              </Grid>
            </>
          )
        })}
      </Box>
      {/* </div> */}
    </Container>
  )
}

export default NotebookList;