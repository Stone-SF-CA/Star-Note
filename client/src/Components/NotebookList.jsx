import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from './Homepage.jsx';
import { Typography, Grid, Container } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import AddNotebook from './AddNotebook.jsx'
import GradeIcon from '@mui/icons-material/Grade';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteNotebook from './DeleteNotebook.jsx'
import EditNotebook from './EditNotebook.jsx'
import api from '../../API'
import useStyles from './Notebook/styles'

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

function NotebookList({ setNeedRender, setSelectedNB, setMainView }) {
  const classes = useStyles();
  const data = useContext(UserContext)
  const { entryCount, notebookList } = data
  const [addMode, setAddMode] = useState(false)

  const toggleStarred = async (notebook) => {
    let editedObj = {
      _id: notebook._id,
      title: notebook.title,
      description: notebook.description,
      color: notebook.color,
      starred: !notebook.starred
    }
    await api.editNotebook(editedObj)
    setNeedRender(prev => !prev)
  }
  return (
    <div>
      <div className={classes.notebookListFixedHeader}>
        <br />
        <br />
        <Typography style={{ marginTop: '80px' }} variant='h2' align='center' color='textPrimary' gutterBottom>
          Your Notebooks
        </Typography>
        <Typography variant='h5' align='center' color='textSecondary' paragraph>
          Add a new notebook here
        </Typography>
        {addMode ? (
          <div><AddNotebook setNeedRender={setNeedRender} setAddMode={setAddMode} /></div>
        ) : (<Grid className={classes.outerGrid} container spacing={2}>
          <Grid style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }} item xs={10}>
            <IconButton onClick={() => setAddMode(true)} size="large" color='primary'>
              <AddIcon />
            </IconButton>
          </Grid>
        </Grid>)
        }
      </div>
      <Container style={{ paddingTop: '350px' }} maxWidth='md'>
        <Box sx={{ flexGrow: 1 }}>

          {notebookList.map(notebook => {
            return (
              <>
                <Grid className={classes.outerGrid} container spacing={2}>
                  <Grid item xs={10}>
                    <Item style={{ backgroundColor: notebook.color }}>
                      <IconButton onClick={() => toggleStarred(notebook)} size="large" style={{ color: `${notebook.starred ? '#ffe234' : '#fff'}` }}>
                        <GradeIcon fontSize='large' />
                      </IconButton>
                      <Button onClick={() => {
                        setSelectedNB(notebook)
                        setMainView('NotebookApp')
                      }} style={{ justifyContent: 'flex-start', width: '100%' }} color='primary'>
                        <Typography align='left' component="div">
                          <Box sx={{ color: '#fff', fontWeight: 'bold', m: 1, fontSize: 20 }}>{notebook.title}</Box>
                        </Typography>
                      </Button>
                      <EditNotebook
                        notebook={{ ...notebook }}
                        key={notebook._id}
                        setNeedRender={setNeedRender}
                        entryCount={entryCount}
                      />
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