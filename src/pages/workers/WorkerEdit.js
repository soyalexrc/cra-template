import {styled} from "@mui/material/styles";
import {Box, Button, Divider, Typography, Container, Grid, TextField} from "@mui/material";
import Page from "../../components/Page";
import {useNavigate} from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PhoneInput from 'react-phone-input-2'
import {useState} from 'react';
import BottomMenu from "../../components/shared/BottomMenu";
import ActionBar from "../../components/shared/ActionBar";

const APP_BAR_MOBILE = 32;
const APP_BAR_DESKTOP = 44;


const RootStyle = styled(Page)(({theme}) => ({
  minHeight: "100%",
  overflowX: 'hidden',
  width: "100%",
  position: 'relative',
  paddingBottom: '7rem',
  paddingTop: APP_BAR_MOBILE * 2,
  [theme.breakpoints.up("md")]: {
    paddingTop: APP_BAR_DESKTOP * 2,
  },
}));

export default function WorkerRegister() {
  const navigate = useNavigate();
  const [providerData, setProviderData] = useState({
    name: 'trabajador sample',
    rut: '22222',
    address: 'some address',
    city: 'santiago',
    phone: '56882882882',
    email: 'email@email.com',
    profile: 'Bodeguero'
  })

  function changeUserData(type, value) {
    setProviderData(prevState => ({
      ...prevState,
      [type]: value
    }))
  }

  return (
    <>
      <ActionBar navigate={navigate} label='Editar Trabajador'edit action={() => navigate('/trabajadores/eliminar/sample')} />
      <RootStyle title='Editar Trabajador | Alishop'>
        <Box display='flex' justifyContent='center'>
          <Box display='flex' flexDirection='column' alignItems='center'>
            <Box display='flex' alignItems='center' justifyContent='center' width={100} height={100}
                 sx={{backgroundColor: '#F5F5F5', borderRadius: 100}}>
              <PersonIcon sx={{fontSize: 62, color: '#434F5F33'}}/>
            </Box>
            <Button component="label" sx={{mt: 2}}>
              Subir Fotografia
              <input hidden accept="image/*" multiple type="file"/>
            </Button>
          </Box>
        </Box>
        <Divider sx={{borderWidth: '2px', my: 3}}/>
        <Container maxWidth='md'  sx={{ py: 5 }}>
          <Box display='flex' justifyContent='space-between' alignItems='center'>
            <Typography variant='h5' color='secondary.light'>Datos de contacto</Typography>
            <KeyboardArrowUpIcon/>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                color='secondary'
                fullWidth
                sx={{mt: 2}}
                id="user-name-textfield"
                placeholder='Nombre'
                value={providerData.name}
                onChange={(e) => changeUserData('name', e.target.value)}
                label='Nombre'
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                color='secondary'
                fullWidth
                sx={{mt: 2}}
                id="user-name-textfield"
                placeholder='Rut'
                value={providerData.rut}
                onChange={(e) => changeUserData('rut', e.target.value)}
                label='Rut'
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                color='secondary'
                fullWidth
                sx={{mt: 2}}
                id="user-name-textfield"
                placeholder='Direccion'
                value={providerData.address}
                onChange={(e) => changeUserData('address', e.target.value)}
                label='Direccion'
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                color='secondary'
                fullWidth
                sx={{mt: 2}}
                id="user-name-textfield"
                placeholder='Ciudad'
                value={providerData.city}
                onChange={(e) => changeUserData('city', e.target.value)}
                label='Ciudad'
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box mt={2}>
                <PhoneInput
                  inputStyle={{
                    width: '100%',
                  }}
                  specialLabel='Movil/Whatsapp'
                  country='cl'
                  preferredCountries={['us', 've', 'pe']}
                  onChange={(phone) => changeUserData('phone', phone)}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                color='secondary'
                fullWidth
                sx={{mt: 2}}
                id="user-name-textfield"
                placeholder='Email'
                value={providerData.email}
                onChange={(e) => changeUserData('email', e.target.value)}
                label='Email'
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                color='secondary'
                fullWidth
                sx={{mt: 2}}
                id="user-name-textfield"
                placeholder='Tipo de perfil'
                value={providerData.profile}
                onChange={(e) => changeUserData('profile', e.target.value)}
                label='Tipo de perfil'
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Container>
        <Divider sx={{borderWidth: '2px', my: 3}}/>
        <Container maxWidth='md'  sx={{ py: 5 }}>
          <Box display='flex' justifyContent='space-between' alignItems='center'>
            <Typography variant='h5' color='secondary.light'>No obligatorios</Typography>
            <KeyboardArrowUpIcon/>
          </Box>
          <TextField
            color='secondary'
            fullWidth
            multiline
            rows={3}
            sx={{mt: 2}}
            id="user-name-textfield"
            placeholder='Observacion'
            value={providerData.observation}
            onChange={(e) => changeUserData('observation', e.target.value)}
            label='Observacion'
            variant="outlined"
          />
        </Container>
        <BottomMenu actions={[{label: 'Editar', fn: () => navigate(-1), main: true, disabled: false}]}/>
      </RootStyle>
    </>

  )
}




