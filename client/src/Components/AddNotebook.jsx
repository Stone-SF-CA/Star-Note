import React, { useState, useEffect } from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { Book } from '@material-ui/icons'
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Paper from '@mui/material/Paper';
import AddTaskIcon from '@mui/icons-material/AddTask';
import api from '../../API';

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.primary.main,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  paddingLeft: '50px',
  paddingRight: '50px',
  textAlign: 'left',
  display: 'flex',
  alignItems: 'center',
  color: '#ffff',
}));

function AddNotebook({ setNeedRender, setAddMode }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      title: e.target[1].value,
      description: e.target[2].value,
    }
    api.postNotebook(obj)
      .then(data => {
        setAddMode(false)
        setNeedRender(prev => !prev)
        console.log('success')
      })
      .catch(err => console.log(err))
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }} container spacing={2}>
        <Grid item xs={10}>
          <Item style={{ flexDirection: 'column', backgroundColor: '#ededed' }}>
            <IconButton onClick={() => setAddMode(false)} aria-label="settings">
              <HighlightOffIcon />
            </IconButton>
            <FormControl style={{ color: '#fff' }} fullWidth sx={{ m: 1 }} variant="standard">
              <TextField
                required
                helperText="Please enter a notebook name"
                id="demo-helper-text-aligned"
                label="Notebook Name"

              />
            </FormControl>
            <br />
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={3}
                variant='outlined'
              />
              <br />
            </FormControl>
            <IconButton type="submit" style={{ color: '#2e7d32' }} aria-label="settings">
              <AddTaskIcon fontSize='large' />
            </IconButton>
          </Item>
        </Grid>
      </Grid>
    </form>
  )
}

export default AddNotebook;