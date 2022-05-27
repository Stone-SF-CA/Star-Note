import * as React from 'react';
import { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import api from '../../API'
import EditIcon from '@mui/icons-material/Edit';
import AddTaskIcon from '@mui/icons-material/AddTask';
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

const style = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function EditNotebook({ setNeedRender, entryCount, title, id, description }) {
  const [openT, setOpenT] = useState(false)
  const handleOpen = () => {
    setOpenT(true)
  };
  const handleClose = () => {
    setOpenT(false)
  };
  const handleClick = async () => {
    console.log(id, title)
    // await api.delAllEntries({ notebookId: id })
    // console.log('hi?')
    // api.delNotebook({ _id: id })
    // setOpenT(false)
    // setNeedRender(prev => !prev)
  }

  return (
    <div>
      <IconButton onClick={handleOpen} style={{ color: '#fff' }} aria-label="settings">
        <EditIcon fontSize='medium' />
      </IconButton>
      <Modal
        open={openT}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormControl style={{ color: '#fff' }} fullWidth sx={{ m: 1 }} variant="standard">
            <TextField
              required
              helperText="Please enter a notebook name"
              id="demo-helper-text-aligned"
              label="Notebook Name"
              defaultValue={title}
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
              defaultValue={description}
            />
            <br />
          </FormControl>
          <IconButton type="submit" style={{ color: '#2e7d32' }} aria-label="settings">
            <AddTaskIcon fontSize='large' />
          </IconButton>
        </Box>
      </Modal>
    </div >
  );
}