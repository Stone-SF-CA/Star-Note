import React, { useState, useEffect } from 'react';
import Notebook from './Notebook.jsx';
import Description from './Description';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { Book } from '@material-ui/icons'
import useStyles from './styles'
import { getEntries } from '../../../API'
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const customTheme = createTheme({
  palette: {
    primary: {
      light: '#03a9f4',
      main: '#1976d2',
      dark: '#3f51b5',
      contrastText: "#fff"
    },
    secondary: {
      light: '#ffea00',
      main: 'f50057',
      dark: '#ff1744',
      contrastText: '#11cb5f'
    }
  }
});
function NotebookApp({ setNeedRender, selectedNB, setMainView }) {
  const classes = useStyles();
  const [clickedCard, setClickedCard] = useState([])
  const [view, setView] = useState('Notebook')
  const [maxId, setMaxId] = useState(0);
  const [cardList, setCardList] = useState([]);
  const [displayCardList, setDisplayCardList] = useState(cardList);
  const [tyPage, setTyPage] = useState(false);
  const [open, setOpen] = useState(false);


  useEffect(() => {
    getEntries({ notebookId: selectedNB._id })
      .then(data => {
        setCardList(data.data)
        setDisplayCardList(data.data)
        setNeedRender(prev => !prev)
      })
      .catch(err => console.log(err))
  }, [open, tyPage, view])
  const renderView = () => {
    switch (view) {
      case "Description":
        return <Description setOpen={setOpen} setView={setView} clickedCard={clickedCard} renderView={renderView} />;
      case "Notebook":
        return (<Notebook
          selectedNB={selectedNB}
          open={open}
          setOpen={setOpen}
          tyPage={tyPage}
          setTyPage={setTyPage}
          cardList={cardList}
          displayCardList={displayCardList}
          setDisplayCardList={setDisplayCardList}
          setCardList={setCardList}
          maxId={maxId}
          setMaxId={setMaxId}
          setView={setView}
          setClickedCard={setClickedCard} />
        )
    }
  }
  return (
    <div >
      <ThemeProvider theme={customTheme}>
        {renderView(view)}
      </ThemeProvider>
    </div>
  )
}

export default NotebookApp;