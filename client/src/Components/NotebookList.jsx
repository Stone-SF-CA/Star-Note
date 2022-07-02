import React, { useState, useEffect } from 'react';
import { Typography, AppBar, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { Book } from '@material-ui/icons'
import { styled } from '@mui/material/styles';
import useStyles from './Notebook/styles'
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ClassTwoToneIcon from '@mui/icons-material/ClassTwoTone';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import AddNotebook from './AddNotebook.jsx'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteNotebook from './DeleteNotebook.jsx'
import EditNotebook from './EditNotebook.jsx'

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
}));

function NotebookList({ entryCount, setNeedRender, setSelectedNB, notebookList, setMainView }) {
  const [addMode, setAddMode] = useState(false)

  return (
    <div>
      <div style={{ background: "#fafafa", position: 'fixed', zIndex: '1', width: '100%' }}>
        <br />
        <br />
        <Typography style={{ marginTop: '80px' }} variant='h2' align='center' color='textPrimary' gutterBottom>
          Your Notebooks
        </Typography>
        <Typography variant='h5' align='center' color='textSecondary' paragraph>
          Add a new notebook here
        </Typography>
        {addMode ? (
          <AddNotebook setNeedRender={setNeedRender} setAddMode={setAddMode} />
        ) : (<Grid style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }} container spacing={2}>
          <Grid style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }} item xs={10}>
            {/* <Item style={{ backgroundColor: '#fff' }}> */}
            <IconButton onClick={() => setAddMode(true)} size="large" color='primary'>
              {/* <Typography align='left' component="div">
              <Box sx={{ color: '#fff', fontWeight: 'bold', m: 1, fontSize: 20 }}>Create a new notebook</Box>
            </Typography> */}
              <AddIcon />
            </IconButton>
            {/* </Item> */}
          </Grid>
        </Grid>)
        }
      </div>
      <Container style={{ paddingTop: '350px' }} maxWidth='md'>
        <Box sx={{ flexGrow: 1 }}>

          {notebookList.map(notebook => {
            return (
              <>
                <Grid style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }} container spacing={2}>
                  <Grid item xs={10}>
                    <Item style={{ backgroundColor: '#1976d2' }}>
                      <ClassTwoToneIcon color='#fff' fontSize='large' />
                      <Button onClick={() => {
                        setSelectedNB(notebook)
                        setMainView('NotebookApp')
                      }} style={{ justifyContent: 'flex-start', width: '100%' }} color='primary'>
                        <Typography align='left' component="div">
                          <Box sx={{ color: '#fff', fontWeight: 'bold', m: 1, fontSize: 20 }}>{notebook.title}</Box>
                        </Typography>
                      </Button>
                      <EditNotebook setNeedRender={setNeedRender} entryCount={entryCount} title={notebook.title} id={notebook._id} description={notebook.description} />
                      <DeleteNotebook setNeedRender={setNeedRender} entryCount={entryCount} title={notebook.title} id={notebook._id} />
                    </Item>
                  </Grid>
                </Grid>
              </>
            )
          })}
        </Box>
      </Container >
    </div>
  )
}

export default NotebookList;