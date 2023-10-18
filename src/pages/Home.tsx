import React from 'react';
import { Container, Typography } from '@mui/material';
import Gallery from '../components/Gallery';


function Home() {
    const images = [
        ""
    ];

    return (
        <Container>
          <Typography variant="h4" gutterBottom>
            Home
          </Typography>
          <Gallery images={images} />
        </Container>
      );
    }

export default Home;

