import React from "react";
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';


interface GalleryProps {
    images: string[];
}

function Gallery({ images }: GalleryProps) {
  return (
    <Grid container spacing={3}>
      {images.map((image, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={`Image ${index}`}
                height="140"
                image={image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Image {index + 1}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Description for Image {index + 1}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Gallery;

