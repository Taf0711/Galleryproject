import React from "react";
import './App.css';
import Gallery from './components/Gallery';
import {Container, CssBaseline, ThemeProvider } from '@mui/material';
import theme from './MaterialUITheme';


function App() {

  const images = [
    'IMG_2564.jpg',
    'IMG_2572.jpg',
    '61F3FCC7-1064-4DB5-A85B-11B8E39CE161.jpg',
    'IMG_1002.jpg',
    'IMG_1699.jpg',
    'IMG_2023.jpg',
    'IMG_2327.jpg',
  ];
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <div className="App">
          <h1>My Gallery</h1>
          <Gallery images={images} />
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;

