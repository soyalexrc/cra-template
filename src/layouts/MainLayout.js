import {useState} from 'react';
import {alpha, styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputBase from "@mui/material/InputBase";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {Outlet} from 'react-router-dom';
import MenuItems from "./MenuItems";
import useAuth from "../hooks/api/auth/useAuth";
import {MHidden} from "../components/@material-extend";
import CloseIcon from '@mui/icons-material/Close'
import sampleUser from '../assets/img/no-image.jpg'
import bg from '../assets/img/sidebar-5.jpg';
import {useMediaQuery} from "@mui/material";


const drawerWidth = 300;

const Search = styled('div')(({theme}) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
  color: '#fff',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
  backgroundColor: theme.palette.primary.main,
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
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


export default function Sidebar() {
  const {logout, currentUser} = useAuth()
  const largeScreen = useMediaQuery((theme) => theme.breakpoints.up('md'))
  const [anchorEl, setAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const [open, setOpen] = useState(true);

  const handleDrawerChange = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    logout();
  }

  console.log(currentUser);


  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Mi cuenta</MenuItem>
      <MenuItem onClick={handleLogout}>Cerrar sesion</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{display: 'flex'}}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            onClick={handleDrawerChange}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{mr: 2}}
          >
            <MenuIcon sx={{ color: '#fff' }} />
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: '#fff' }}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{'aria-label': 'search'}}
            />
          </Search>
          <Box sx={{flexGrow: 1}}/>
          <Box sx={{display: 'flex'}}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon sx={{ color: '#fff' }}/>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon sx={{ color: '#fff' }}/>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle sx={{ color: '#fff' }}/>
            </IconButton>
          </Box>
          {renderMenu}
        </Toolbar>
      </AppBar>
      <MHidden width='mdDown'>
        <Drawer
          variant="persistent"
          open={open}
          sx={{
            width: open ? drawerWidth : 0,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              // backgroundColor: theme => theme.palette.primary.main,
              backgroundImage: `url(${bg})`,
              backgroundRepeat: 'no-repeat',
              height: '100%',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              '& ::after': {
                content: '""',
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundColor: theme => theme.palette.primary.main,
                // backgroundColor: 'black',
                opacity: 0.05,
                zIndex: -11
              },
              width: drawerWidth + 1,
              boxSizing: 'border-box',
            },
          }}>
          <DrawerHeader sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start',  padding: '1.5rem 2rem'}}>
            <Box
              mr={2}
              component='img'
              onError={({ currentTarget }) => { currentTarget.onerror = null; currentTarget.src= sampleUser }}
              src={currentUser.image ? currentUser.image : sampleUser}
              width={40}
              height={40}
              sx={{ borderRadius: 100 }}
            />
            <Box>
              <Typography variant='h5' color='#fff'>{currentUser?.first_name} </Typography>
              <Typography color='#fff'>{currentUser?.user_type}</Typography>
            </Box>
          </DrawerHeader>
          <MenuItems open={open} fn={() => {}}/>
        </Drawer>
      </MHidden>
      <MHidden width='mdUp'>
        <Drawer
          variant="temporary"
          ModalProps={{keepMounted: true}}
          onClose={handleDrawerChange}
          open={open}
          sx={{
            width: 350,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              // backgroundColor: theme => theme.palette.primary.main,
              backgroundImage: `url(${bg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              height: '100%',
              backgroundPosition: 'center center',
              '& ::after': {
                content: '""',
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundColor: theme => theme.palette.primary.main,
                opacity: 0.05,
                zIndex: -11
              },
              width: 350,
              boxSizing: 'border-box',
            },
          }}>
          <DrawerHeader sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between',   padding: '1.5rem 2rem'}}>
            <Box>
              <Typography variant='h5' color='#fff'>RenzitosAdmin</Typography>
              <Typography color='#fff'>Admin</Typography>
            </Box>
            <IconButton onClick={handleDrawerChange}>
              <CloseIcon/>
            </IconButton>
          </DrawerHeader>
          <MenuItems open={open} fn={handleDrawerChange}/>
        </Drawer>
      </MHidden>
      <Box component="main" sx={{p: largeScreen ? 2 : 0, width: '100%', height: '100%', minHeight: '100vh', flexGrow: 1, backgroundColor: '#fff'}}>
        <DrawerHeader/>
        <Outlet/>
      </Box>
    </Box>
  );
}
