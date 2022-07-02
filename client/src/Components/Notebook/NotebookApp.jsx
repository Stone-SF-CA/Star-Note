import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../Homepage.jsx';
import Notebook from './Notebook.jsx';
import Description from './Description';
import useStyles from './styles'
import { getEntries } from '../../../API'
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
function NotebookApp({ reff, setMainView }) {
  const data = useContext(UserContext)
  const { selectedNB } = data

  const [clickedCard, setClickedCard] = useState([])
  const [view, setView] = useState('Notebook')
  const [displayCardList, setDisplayCardList] = useState([]);
  const [tyPage, setTyPage] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log('rerender notebook')
    getEntries({ notebookId: selectedNB._id })
      .then(data => {
        setDisplayCardList(data.data)
      })
      .catch(err => console.log(err))
  }, [open, tyPage])

  const handleSearch = async (e) => {
    e.preventDefault()
    let term = e.target.value
    let searched = await getEntries({ notebookId: selectedNB._id, term: term })
    setDisplayCardList(searched.data)
  }

  const renderView = () => {
    switch (view) {
      case "Description":
        return <Description setOpen={setOpen} setView={setView} clickedCard={clickedCard} renderView={renderView} />;
      case "Notebook":
        return (<Notebook
          handleSearch={handleSearch}
          open={open}
          setOpen={setOpen}
          tyPage={tyPage}
          setTyPage={setTyPage}
          displayCardList={displayCardList}
          setDisplayCardList={setDisplayCardList}
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