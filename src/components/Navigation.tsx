import React from 'react';
import {Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';


function Navigation() {
    return (
        <AppBar position="static">
      <Toolbar>
        <Button component={RouterLink} to="/" color="inherit">
          <Typography variant="h6">Home</Typography>
        </Button>
        <Button component={RouterLink} to="/landscape" color="inherit">
          <Typography variant="h6">Landscape</Typography>
        </Button>
        {/* Add more buttons for additional pages */}
      </Toolbar>
    </AppBar>
    );
}

export default Navigation;