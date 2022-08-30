import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Outlet }  from 'react-router-dom';

export default function LogoOnlyLayout() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{   backgroundColor: '#222e3c'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Vapestop
          </Typography>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
}
