import * as React from 'react';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { signInWithPopup } from 'firebase/auth'
const theme = createTheme();

export default function Login({ setIsAuth }) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        window.localStorage.setItem('isAuth', true);
        setIsAuth(true)
        navigate('/')
      })
  }
  return (
    <ThemeProvider theme={theme}>
      <Container style={{ padding: '50px auto', background: 'white' }} component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Log in with Google
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={signInWithGoogle}
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In With Google
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}