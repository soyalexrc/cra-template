import {Box, TextField, Typography, InputAdornment, IconButton, Button, useMediaQuery} from "@mui/material";
import {styled} from "@mui/material/styles";
import Page from "../../components/Page";
import Logo from '../../assets/vision-icon.png';
import {useState} from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';

const RootStyle = styled(Page)(({theme}) => ({
  minHeight: "100%",
  overflowX: 'hidden',
  width: "100%",
  display: 'flex',
  position: 'relative',
}));

const IconSide = styled(Box)(({theme}) => ({
  flex: 0.2,
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.up('md')]: {
    flex: 0.4
  }
}));

export default function ResetPassword() {
  const navigate = useNavigate();
  const largeScreen = useMediaQuery(theme => theme.breakpoints.up('md'))
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    password2: '',
    password: ''
  })

  function changeUserData(type, value) {
    setUserData(prevState => ({
      ...prevState,
      [type]: value
    }))
  }

  return (
    <RootStyle title='Reestablecer contraseña | Vision Inmobiliaria' sx={{ flexDirection: largeScreen ? 'row' : 'column' }}>
      <IconSide>
        <Box component='img' src={Logo} width={largeScreen ? 150 : 75}/>
      </IconSide>
      <Box sx={{flex: largeScreen ? 0.6 : 0.8, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Box width={largeScreen ? 450 : '100%'} p={2}>
          <Typography align='center' variant='h6'>Reestablecer contraseña </Typography>
          <Box mt={5}>
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
            <TextField
              color='secondary'
              fullWidth
              type={showPassword ? 'text' : 'password'}
              sx={{mt: 2}}
              id="user-name-textfield"
              placeholder='Repetir contraseña'
              value={userData.password2}
              onChange={(e) => changeUserData('password2', e.target.value)}
              label='Repetir contraseña'
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
          <Box mt={5} display='flex' justifyContent='center' onClick={() => navigate('/')}>
            <Button variant='contained'>Guardar cambios</Button>
          </Box>
        </Box>
      </Box>
    </RootStyle>
  )
}
