import {Box, TextField, Typography, Button, useMediaQuery} from "@mui/material";
import {styled} from "@mui/material/styles";
import Page from "../../components/Page";
import Logo from '../../assets/vision-icon.png';
import {useState} from 'react';
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

export default function ForgotPassword() {
  const navigate = useNavigate();
  const largeScreen = useMediaQuery(theme => theme.breakpoints.up('md'))
  const [userData, setUserData] = useState({
    email: '',
  })

  function changeUserData(type, value) {
    setUserData(prevState => ({
      ...prevState,
      [type]: value
    }))
  }

  return (
    <RootStyle title='Recuperar contraseña | Vision Inmobiliaria' sx={{ flexDirection: largeScreen ? 'row' : 'column' }}>
      <IconSide>
        <Box component='img' src={Logo} width={largeScreen ? 150 : 75}/>
      </IconSide>
      <Box sx={{flex: largeScreen ? 0.6 : 0.8, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Box width={largeScreen ? 450 : '100%'} p={2}>
          <Typography align='center' variant='h6'>Recuperar contraseña</Typography>
          <Box mt={5}>
            <Typography>Por favor ingresa tu email y te enviaremos un correo de restablecimiento de contraseña</Typography>
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
          </Box>
          <Box mt={5} display='flex' justifyContent='center' onClick={() => navigate('/reestablecer-clave')}>
            <Button variant='contained'>Enviar</Button>
          </Box>
        </Box>
      </Box>
    </RootStyle>
  )
}
