import * as React from 'react';
import { useState, useContext } from 'react'
import { UserContext } from '../Homepage.jsx';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import useStyles from './styles';
import api from '../../../API';

export default function ChangeNotebook({ selectedList, currNb }) {
  const classes = useStyles()

  const data = useContext(UserContext)
  const [nb, setNb] = React.useState('');
  const [openC, setOpenC] = useState(false);
  const handleChange = (event, t) => {
    setNb(t);
    setOpenC(true);
  };

  const handleClose = () => {
    setOpenC(false)
  }

  const handleClick = () => {
    let obj = {
      entryIds: selectedList,
      notebookId: nb._id
    }
    console.log(obj)
    api.moveSelectedEntries(obj)
      .then(() => {
        console.log('success')
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <div style={{ width: '33%', display: 'flex', flexDirection: 'row-reverse' }}>
      <Modal
        open={openC}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.deleteNotebookBox}>
          <Typography align='center' variant="h6" component="div">
            Are you sure you want to move <b>{selectedList.length}</b> entries to <b>{nb.title}</b>
          </Typography>
          <br />
          <ButtonGroup align='center' variant="contained" aria-label="outlined primary button group">
            <Button onClick={handleClose} variant='outlined'>No</Button>
            <Button onClick={handleClick}>Yes</Button>
          </ButtonGroup>
        </Box>
      </Modal>
      <Box sx={{ width: '70%' }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Reassign to...</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={nb}
            label="Reassign to..."
          // onClick={handleChange}
          >
            {data.notebookList.map(t => {
              console.log(t)
              if (t.id === currNb) {
                return
              } else {
                return <MenuItem onClick={(e) => handleChange(e, t)} value={t.title}>{t.title}</MenuItem>
              }
            })}
          </Select>
        </FormControl>
      </Box >
    </div>
  );
}