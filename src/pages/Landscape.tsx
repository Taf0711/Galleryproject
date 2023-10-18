import React from 'react';
import { Container, Typography } from '@mui/material';
import Gallery from '../components/Gallery';

function Landscape() {
    const images = [
        ""
    ]
    return (
        <Container>
          <Typography variant="h4" gutterBottom>
            Landscape
          </Typography>
          <Gallery images={images} />
        </Container>
      );
    }

    export default Landscape;

    

