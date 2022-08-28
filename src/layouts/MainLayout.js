import {useState, useEffect} from 'react';
import {alpha, styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {Outlet} from 'react-router-dom';
import MenuItems from "./MenuItems";
import {useLocation} from 'react-router-dom';

const drawerWidth = 350;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  // necessary for content to be below app bar
  // ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


export default function Sidebar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [breadcrumb, setBreadcrumb] = useState('');

  const handleDrawerChange = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setBreadcrumb(location.pathname.replace('/', ''));
  }, [location])

  return (
    <Box sx={{display: 'flex'}}>
      <AppBar position="fixed" open={open} sx={{
        backgroundColor: '#fff',
      }}>
        <Toolbar>
          <IconButton
            onClick={handleDrawerChange}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{mr: 2}}
          >
            <MenuIcon color='secondary'/>
          </IconButton>
          <Typography variant='h5'>
            {breadcrumb ? breadcrumb.charAt(0).toUpperCase() + breadcrumb.slice(1).split('/')[0] : 'Bienvenido!'}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        ModalProps={{keepMounted: true}}
        onClose={handleDrawerChange}
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}>
        <DrawerHeader sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between',   padding: '1.5rem 2rem'}}>
          <Box>
            <Typography variant='h5'>Cliente de prueba</Typography>
            <Typography >Felipe store</Typography>
          </Box>
          <IconButton onClick={handleDrawerChange}>
            <CloseIcon/>
          </IconButton>
        </DrawerHeader>
        <Divider/>
        <MenuItems fn={() => setOpen(false)}/>
      </Drawer>
      <Box component="main"
           sx={{p: 3, width: '100%', height: '100%', minHeight: '100vh', flexGrow: 1, backgroundColor: '#f7f7f8'}}>
        <DrawerHeader/>
        <Outlet/>
      </Box>
    </Box>
  );
}
