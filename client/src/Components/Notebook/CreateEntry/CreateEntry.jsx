import * as React from 'react';
import { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EntryForm from './EntryForm.jsx';
import { EntForm } from '../styledComps.js';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CreateEntry({ selectedNB, tyPage, setTyPage }) {
  const [openE, setOpenE] = useState(false)
  const handleOpen = () => setOpenE(true);
  const handleClose = () => {
    setTyPage(false)
    setOpenE(false)
  };

  return (
    <div>
      <Button onClick={handleOpen} variant='outlined'>Add Post</Button>
      <Modal
        open={openE}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {tyPage ?
            <EntForm ><Typography variant='h1' align='center' color='textPrimary'>Entry Submitted!</Typography> </EntForm >
            : <EntryForm selectedNB={selectedNB} setTyPage={setTyPage} />}
        </Box>
      </Modal>
    </div>
  );
}