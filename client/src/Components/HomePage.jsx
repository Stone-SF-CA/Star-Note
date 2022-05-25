import React, { useState } from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons'
import Button from '@mui/material/Button';
import useStyles from './styles'
import ImageList from './ImageList.jsx'

function HomePage() {
  const [photoList, setPhotoList] = useState([]);
  const [displayPhotoList, setDisplayPhotoList] = useState([]);
  const classes = useStyles();

  const handleSubmit = (e) => {
    const newPhotoURL = URL.createObjectURL(e.target.files[0]);
    setPhotoList((prev) => ([...prev, newPhotoURL]));
    setDisplayPhotoList((prev) => ([...prev, newPhotoURL]));
  };

  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant='h6'>
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth='lg'>
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
              Photo Album
            </Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              Hello everyone, this is a photo album!!!
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justify='center'>
                <Grid item>
                  {
                    (displayPhotoList.length === 0) ?
                      <Button variant='contained' color='primary' onClick={() => setDisplayPhotoList(photoList)}>
                        See my photos
                      </Button> :
                      <Button variant='contained' color='primary' onClick={() => setDisplayPhotoList([])}>
                        Hide my photos
                      </Button>
                  }
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary' component="label">
                    <input type="file" onChange={handleSubmit} hidden /> Add photo
                  </Button>
                </Grid>
                <ImageList displayPhotoList={displayPhotoList} />
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid>

          </Grid>
        </Container>
      </main>
    </>
  );
}

export default HomePage;