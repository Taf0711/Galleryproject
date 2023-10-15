import React from "react";
import './App.css';
import { ThemeProvider } from "@mui/material/styles";
import theme from './MaterialUITheme';
import Gallery from './components/Gallery';





function App() {

  const images = [
    '6B9B0072-E0CA-445D-8E2A-690BAD7DC6D8.jpg',
    '61F3FCC7-1064-4DB5-A85B-11B8E39CE161.jpg',
    'IMG_1002.jpg',
    'IMG_1699.jpg',
    'IMG_2023.jpg',
    'IMG_2327.jpg',
  ];
    return (
      <ThemeProvider theme={theme}>
      <div className="App">
        <h1>My Gallery</h1>
        <Gallery images={images} />
      </div>
    </ThemeProvider>
  );
}

export default App;

