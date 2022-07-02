import React, { useState } from 'react';
import { Typography, Grid, Container } from '@material-ui/core';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { getEntries } from '../../../API'
import DoneAllIcon from '@mui/icons-material/DoneAll';

function SelectMultiple({ setSelectedList, selectAll, setSelectAll, setOpen }) {

  const handleClick = () => {
    if (selectAll) {
      setSelectedList([])
    }
    setSelectAll(prev => !prev)
  }
  return (
    <>
      <IconButton variant='outlined' onClick={handleClick} style={{ background: `${selectAll ? '#BAD6F2' : '#d3d3d3'}` }} size="large" >
        <DoneAllIcon fontSize='large' />
      </IconButton>
    </>
  );
}

export default SelectMultiple;