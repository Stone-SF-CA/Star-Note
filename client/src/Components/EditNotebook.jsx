import * as React from 'react';
import { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import api from '../../API'
import EditIcon from '@mui/icons-material/Edit';
import AddTaskIcon from '@mui/icons-material/AddTask';
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import { RadioButton } from './Notebook/styledComps.js'
import useStyles from './Notebook/styles'

export default function EditNotebook({ notebook, setNeedRender, entryCount }) {
  let classes = useStyles()
  let { title, description, color, starred } = notebook
  let id = notebook._id
  //blue, red, orange, purple,green
  let colors = ['#2196f3', '#f50057', '#ff9800', '#d500f9', '#4caf50']

  const [openT, setOpenT] = useState(false)
  const handleOpen = () => {
    setOpenT(true)
  };
  const handleClose = () => {
    setOpenT(false)
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    let nList = []
    let list = document.getElementsByName('colorPicker')
    for (let i = 0; i < list.length; i++) {
      nList.push(list[i].checked)
    }

    let index = nList.indexOf(true)

    let editedObj = {
      _id: id,
      title: e.target[0].value,
      description: e.target[1].value,
      color: index > -1 ? colors[index] : '#2196f3',
      starred: starred
    }
    await api.editNotebook(editedObj)
    setOpenT(false)
    setNeedRender(prev => !prev)
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
        <form onSubmit={(e) => handleSubmit(e)}>
          <Box className={classes.editNotebookBox}>
            <Typography variant='h5' align='center'>Edit Notebook</Typography>
            <br />
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
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '70%' }}>
              {
                colors.map(colort => {
                  return (
                    <RadioButton name='colorPicker' color={colort} defaultChecked={colort === color} />
                  )
                })
              }
            </div>
            <br />
            <br />
            <IconButton type="submit" style={{ color: '#2e7d32' }} aria-label="settings">
              <AddTaskIcon fontSize='large' />
            </IconButton>
          </Box>
        </form>
      </Modal>
    </div >
  );
}