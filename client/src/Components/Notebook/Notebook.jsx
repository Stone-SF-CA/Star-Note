import React, { useState, useContext } from 'react';
import { UserContext } from '../Homepage.jsx';
import { Typography, AppBar, Card, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import useStyles from './styles'
import CardList from './CardList.jsx'
import ChangeNotebook from './ChangeNotebook.jsx'
import CreateEntry from './CreateEntry/CreateEntry.jsx'
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { getEntries } from '../../../API'
import SelectMultiple from './SelectMultiple.jsx'
import DelSelect from './TwoStepDelete/DelSelect.jsx'

function Notebook({ handleSearch, open, setOpen, tyPage, setTyPage, displayCardList, setDisplayCardList, setView, setClickedCard }) {
  const data = useContext(UserContext)
  const { selectedNB } = data

  const classes = useStyles();
  const [selectAll, setSelectAll] = useState(false)
  const [selectedList, setSelectedList] = useState([])


  return (
    <>
      <div className={classes.nbContainer}>
        <div className={classes.nbFixedHeader}>
          <div className={classes.flexRight} style={{ alignItems: 'center' }}>
            <SelectMultiple setSelectedList={setSelectedList} selectAll={selectAll} setSelectAll={setSelectAll} setOpen={setOpen} />
            {selectAll ? <DelSelect setSelectAll={setSelectAll} setOpen={setOpen} selectedList={selectedList} setSelectedList={setSelectedList} /> : null}
          </div>
          <Typography variant='h4' align='center' color='textPrimary' gutterBottom>
            {selectedNB.title}
          </Typography>
          <Typography variant='h6' align='center' color='textSecondary' paragraph>
            {selectedNB.description}
          </Typography>
          <div className={classes.createEntryButton}>
            {!selectAll ? <CreateEntry selectedNB={selectedNB} open={open} setOpen={setOpen} tyPage={tyPage} setTyPage={setTyPage} /> : <ChangeNotebook selectedList={selectedList} currNb={displayCardList[0].notebookId} />}
            <form style={{ width: '33%', display: 'flex', flexDirection: 'center', justifyContent: 'space-around' }}>
              <TextField
                id="outlined-multiline-static"
                width='100%'
                label="Search"
                variant='outlined'
                onChange={(e) => handleSearch(e)}
              />
            </form>
            <div style={{ width: '33%' }}></div>
          </div>
        </div>
        <Container style={{ marginTop: '300px' }} maxWidth='lg'>
          <CardList selectedList={selectedList} setSelectedList={setSelectedList} selectAll={selectAll} open={open} setOpen={setOpen} setClickedCard={setClickedCard} setView={setView} displayCardList={displayCardList} />
        </Container>
      </div>
    </>
  );
}

export default Notebook;