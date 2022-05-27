import * as React from 'react';
import { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { EntForm } from '../styledComps.js';
import IconButton from '@mui/material/IconButton';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import api from '../../../../API'

const style = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TwoStepDelete({ setOpen, id }) {
  const [openT, setOpenT] = useState(false)
  const handleOpen = () => {
    setOpenT(true)
  };
  const handleClose = () => {
    setOpenT(false)
  };
  const handleClick = () => {
    api.delEntry({ _id: id })
      .then((data) => {
        console.log('Success!')
        setOpenT(false)
        setOpen((prev) => !prev)
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <IconButton onClick={handleOpen} aria-label="settings">
        <HighlightOffIcon />
      </IconButton>
      <Modal
        open={openT}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography align='center' variant="h6" component="div">Are you sure you want to delete this card?</Typography>
          <br />
          <ButtonGroup align='center' variant="contained" aria-label="outlined primary button group">
            <Button onClick={handleClose} variant='outlined'>No</Button>
            <Button onClick={handleClick}>Yes</Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </div >
  );
}