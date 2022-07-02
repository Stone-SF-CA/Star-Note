import * as React from 'react';
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import api from '../../../../API'
import DeleteIcon from '@mui/icons-material/Delete';
import useStyles from '../styles'

export default function DelSelect({ setSelectAll, setOpen, selectedList, setSelectedList }) {
  console.log('selectedList', selectedList)

  const classes = useStyles()
  const [openT, setOpenT] = useState(false)
  const handleOpen = () => {
    setOpenT(true)
  };
  const handleClose = () => {
    setOpenT(false)
  };
  const handleClick = async () => {
    await api.delSelectedEntries({ ids: selectedList })
    console.log('selectedList', selectedList)
    setOpenT(false)
    setOpen(prev => !prev)
    setSelectAll(false)
    setSelectedList([])
  }
  useEffect(() => {
    console.log('hi')
  }, selectedList)

  return (
    <div>
      {console.log('hit delete')}
      <IconButton onClick={handleOpen} style={{ color: 'red' }} aria-label="settings">
        <DeleteIcon fontSize='medium' />
      </IconButton>
      <Modal
        open={openT}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.deleteNotebookBox}>
          <Typography align='center' variant="h6" component="div">Are you sure you want to delete <b>{selectedList.length}</b> entries?</Typography>
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