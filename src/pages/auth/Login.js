import {Box, TextField, Typography, InputAdornment, IconButton, Button, useMediaQuery} from "@mui/material";
import {styled} from "@mui/material/styles";
import Page from "../../components/Page";
import Logo from '../../assets/vision-icon.png';
import sidebar from '../../assets/img/sidebar-5.jpg';
import {useState} from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import useAuth from "../../hooks/api/auth/useAuth";

const RootStyle = styled(Page)(({theme}) => ({
  minHeight: "100%",
  overflowX: 'hidden',
  width: "100%",
  display: 'flex',
  position: 'relative',
}));

const IconSide = styled(Box)(({theme}) => ({
  flex: 0.4,
  backgroundColor: theme.palette.primary.main,
  position: 'relative',
  backgroundImage:`url(${sidebar})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  // display: 'flex',
  // alignItems: 'center',
  // justifyContent: 'center',
  // [theme.breakpoints.up('md')]: {
  //   flex: 0.4
  // }
}));

export default function Login() {
  const { login, loading } = useAuth();
  const largeScreen = useMediaQuery(theme => theme.breakpoints.up('md'))
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  function changeUserData(type, value) {
    setUserData(prevState => ({
      ...prevState,
      [type]: value
    }))
  }

  return (
    <RootStyle title='Inicio de sesión | Vision Inmobiliaria' sx={{ flexDirection: largeScreen ? 'row' : 'column' }}>
      <IconSide>
        {/*<Box component='img' src={Logo} width={largeScreen ? 150 : 75}/>*/}
      </IconSide>
      <Box sx={{flex: 0.6, display: 'flex', alignItems: largeScreen ? 'center' : 'flex-start', mt: largeScreen ? 0 : 5, justifyContent: 'center'}}>
        <Box width={largeScreen ? 450 : '100%'} p={2}>
          <Typography align='center' variant='h6'>Inicio de sesión</Typography>
          <Box mt={5}>
            <TextField
              color='secondary'
              fullWidth
              sx={{mt: 2}}
              id="user-name-textfield"
              placeholder='Email'
              value={userData.email}
              onChange={(e) => changeUserData('email', e.target.value)}
              label='Email'
              variant="outlined"
            />
            <TextField
              color='secondary'
              fullWidth
              type={showPassword ? 'text' : 'password'}
              sx={{mt: 2}}
              id="user-name-textfield"
              placeholder='Contraseña'
              value={userData.password}
              onChange={(e) => changeUserData('password', e.target.value)}
              label='Contraseña'
              variant="outlined"
              InputProps={{
                endAdornment:
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? (<VisibilityOffIcon />) : (<VisibilityIcon />)}
                    </IconButton>
                  </InputAdornment>,
              }}
            />
          </Box>
          <Box display='flex' justifyContent='center' mt={5}>
            <Link to='/recuperar-clave'>
              Olvide mi contraseña
            </Link>
          </Box>
          <Box  mt={5} display='flex' justifyContent='center' onClick={() => login(userData)}>
            <Button disabled={loading} variant='contained'>{loading ? 'Iniciando sesión...' : 'Iniciar sesión'}</Button>
          </Box>
        </Box>
      </Box>
    </RootStyle>
  )
}
