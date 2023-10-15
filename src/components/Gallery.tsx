import React from "react";
import {Card, CardContent, Typography, Grid} from '@mui/material';


interface GalleryProps {
    images: string[];
}


function Gallery({ images }: GalleryProps) {
    return (
        <Grid container spacing={2}>
      {images.map((image, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card>
            <img src={image} alt={`Image ${index}`} style={{ maxWidth: '100%' }} />
            <CardContent>
              <Typography variant="body2" color="textSecondary">
                Description for Image {index + 1}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    );
}

export default Gallery;

