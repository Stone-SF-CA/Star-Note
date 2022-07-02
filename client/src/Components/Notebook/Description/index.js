import React, { useState, useEffect } from 'react';
import Notebook from '../Notebook.jsx';
import Button from '@mui/material/Button';
import { Typography, Container, CardMedia } from '@material-ui/core';
import useStyles from '../styles'
import { DescriptCard } from '../styledComps.js'
import Carousel from 'react-material-ui-carousel'
import Box from '@mui/material/Box';
import EditMode from './EditMode.jsx'
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

function Description({ setView, setOpen, clickedCard, renderView }) {
  const [editing, setEditing] = useState(false);
  const [editedCard, setEditedCard] = useState(clickedCard)
  const classes = useStyles();

  useEffect(() => {
  }, [editing])
  if (editing) {
    return (<EditMode setEditedCard={setEditedCard} setEditing={setEditing} setView={setView} setOpen={setOpen} clickedCard={clickedCard} />)
  }
  return (
    <div>
      <br />
      <div style={{ marginTop: '100px' }}>
        <Typography align='center' component="div" gutterBottom>
          <Box sx={{ fontWeight: 'bold', m: 1, fontSize: 25 }}>{editedCard.title}</Box>
        </Typography>
      </div>
      <Container style={{ display: 'flex', justifyContent: 'space-evenly' }} maxWidth='md'>
        <div className={classes.buttons}>
          <Button onClick={() => setView('Notebook')} variant='outlined' color='primary'>Back!</Button>
        </div>
        <DescriptCard>
          <br />
          <div style={{ flexDirection: 'row-reverse', display: 'flex' }}>
            <IconButton onClick={() => setEditing(true)} aria-label="settings">
              <EditIcon fontSize='medium' />
            </IconButton>
          </div>
          <Carousel>
            {editedCard.photos.map(t => (<CardMedia
              component="img"
              width='100%'
              image={t}
            />))}
          </Carousel>
          <br />
          <Typography align='center' component="div" gutterBottom>
            <Box sx={{ fontWeight: 'medium', m: 1, fontSize: 20 }}>{editedCard.summary}</Box>
          </Typography>
          <br />
          <Typography style={{ paddingBottom: '100px' }} align='center' component="div" gutterBottom>
            <Box sx={{ fontWeight: 'light', m: 1, fontSize: 16, whiteSpace: 'pre-wrap' }}>{editedCard.description}</Box>
          </Typography>
          <br />
        </DescriptCard>
      </Container>
    </div >
  )
}

export default Description;
