import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from '@mui/material/Button';
import { EntForm } from '../styledComps.js';
import { Typography, Container } from '@material-ui/core';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import api from '../../../../API';
import axios from 'axios'

export default function EditMode({ setEditedCard, setEditing, setView, setOpen, clickedCard }) {
  const [formValues, setFormValues] = useState(clickedCard)
  const [cloud, setCloud] = useState(clickedCard.photos)

  const handleImgChange = (e) => {
    const formData = new FormData()
    formData.append("file", e.target.files[0])
    formData.append("upload_preset", 'ynislmn9')

    axios.post("https://api.cloudinary.com/v1_1/djtk4ap6i/image/upload", formData)
      .then((data) => {
        setCloud((prev) => [...prev, data.data.secure_url])
      })
      .catch(err => console.log(err))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      _id: clickedCard._id,
      title: e.target[0].value,
      summary: e.target[1].value,
      description: e.target[3].value,
      photos: cloud,
    }

    api.editEntry(obj)
      .then(data => {
        setOpen((prev) => !prev)
        setView('Description')
        setEditing(false)
        setEditedCard(obj)
        console.log('success')
      })
      .catch(err => console.log(err))
  };

  return (
    <Container maxWidth='sm'>
      <form onSubmit={handleSubmit}>
        <Grid container alignItems="center" justify="center" direction="column">
          <br />
          <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
            Editing Entry
          </Typography>
          <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">Title</InputLabel>
            <Input
              id="title"
              defaultValue={clickedCard.title}
            />
          </FormControl>
          <br />
          <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <TextField
              id="outlined-multiline-static"
              label="Summary"
              multiline
              rows={2}
              defaultValue={clickedCard.description}
              variant='outlined'
            />
          </FormControl>
          <br />
          <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={6}
              defaultValue={clickedCard.description}
              variant='outlined'
            />
          </FormControl>
          <br />
          <Button variant='outlined' color='primary' component="label">
            <input type="file" onChange={handleImgChange} hidden /> Add photo
          </Button>
          <br />
          <div>
            {cloud.map(url => {
              return (
                <span>
                  <img src={url} width='100' alt='img' />
                </span>
              )
            })}
          </div>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Grid>
      </form >
    </Container>
  )

}