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
import { RadioButton } from './Notebook/styledComps.js'

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
  width: '50%'
}));

function AddNotebook({ setNeedRender, setAddMode }) {
  //blue, red, orange, purple,green
  let colors = ['#2196f3', '#f50057', '#ff9800', '#d500f9', '#4caf50']

  const handleSubmit = (e) => {
    e.preventDefault();
    let nList = []
    let list = document.getElementsByName('colorPicker')
    for (let i = 0; i < list.length; i++) {
      nList.push(list[i].checked)
    }

    let index = nList.indexOf(true)

    let obj = {
      title: e.target[1].value,
      description: e.target[2].value,
      color: index > -1 ? colors[index] : '#2196f3',
      starred: 0
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
        <Grid style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }} item xs={10}>
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
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '70%' }}>
              {
                colors.map((color, i) => {
                  return (
                    <RadioButton name='colorPicker' color={color} defaultChecked={i === 0} />
                  )
                })
              }
            </div>
            <br />
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