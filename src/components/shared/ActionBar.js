import {Toolbar, Box, IconButton, Typography} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DeleteIcon from '@mui/icons-material/Delete';
import {styled} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";

const AppBar = styled(MuiAppBar)(({theme}) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

export default function ActionBar({navigate, edit, action, label}) {
  return (
    <AppBar position="fixed" sx={{
      backgroundColor: '#fff',
    }}>
      <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box display='flex' alignItems='center'>
          <IconButton
            onClick={() => navigate(-1)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{mr: 2}}
          >
            <ArrowBackIosIcon color='secondary' fontSize='small'/>
          </IconButton>
          <Typography variant='h5'>
            {label}
          </Typography>
        </Box>
        {
          edit &&
          <IconButton onClick={action}>
            <DeleteIcon/>
          </IconButton>
        }
      </Toolbar>
    </AppBar>
  )
}
