import {
  Box,
  Button,
  Divider,
  Typography,
  Container,
  Grid,
  TextField,
  Paper,
  InputAdornment,
  IconButton,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
  useMediaQuery
} from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import PhoneInput from 'react-phone-input-2'
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Page from "../../components/Page";
import backImg from '../../assets/img/card-back-1.png';
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

export default function OwnerEdit() {
  const navigate = useNavigate();
  const largeScreen = useMediaQuery(theme => theme.breakpoints.up('md'));
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    lastName: '',
    company: 'Vision Inmobiliaria',
    password: '',
    username: '',
    phone1: '',
    phone2: '',
    address: '',
    phone: '',
    email: '',
    state: '',
    birthdate: '',
    userType: '',
    profession: '',
    municipality: '',
    image: '',
    facebook: '',
    twitter: '',
    instagram: '',
    tiktok: '',

  })

  function changeUserData(type, value) {
    console.log(value);
    setUserData(prevState => ({
      ...prevState,
      [type]: value
    }))
  }

  return (
    <Page title='Edicion de propietario | Vision Inmobiliaria'>
      {/*<Box display='flex' justifyContent='center'>*/}
      {/*  <Box display='flex' flexDirection='column' alignItems='center'>*/}
      {/*    <Box display='flex' alignItems='center' justifyContent='center' width={100} height={100}*/}
      {/*         sx={{backgroundColor: '#F5F5F5', borderRadius: 100}}>*/}
      {/*      <PersonIcon sx={{fontSize: 62, color: '#434F5F33'}}/>*/}
      {/*    </Box>*/}
      {/*    <Button component="label" sx={{mt: 2}}>*/}
      {/*      Subir Fotografia*/}
      {/*      <input hidden accept="image/*" multiple type="file"/>*/}
      {/*    </Button>*/}
      {/*  </Box>*/}
      {/*</Box>*/}
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Container maxWidth='md' sx={{py: 5}}>
            <Typography variant='h5' color='secondary.light'>Datos de propietario</Typography>
            <Box display='flex' flexDirection='column' alignItems='center'>
              <Box display='flex' alignItems='center' justifyContent='center' width={100} height={100}
                   sx={{backgroundColor: '#F5F5F5', borderRadius: 100}}>
                <CameraAltIcon sx={{fontSize: 32, color: '#434F5F33'}}/>
              </Box>
              <Button component="label" sx={{mt: 2}}>
                Subir Fotografia
                <input hidden accept="image/*" multiple type="file"/>
              </Button>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  sx={{mt: 2}}
                  id="user-name-textfield"
                  placeholder='Empresa'
                  disabled
                  value={userData.company}
                  onChange={(e) => changeUserData('company', e.target.value)}
                  label='Empresa'
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  sx={{mt: 2}}
                  id="user-name-textfield"
                  placeholder='Email'
                  value={userData.email}
                  onChange={(e) => changeUserData('email', e.target.value)}
                  label='Email'
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  sx={{mt: 2}}
                  id="user-name-textfield"
                  placeholder='Nombre de usuario'
                  value={userData.username}
                  onChange={(e) => changeUserData('username', e.target.value)}
                  label='Nombre de usuario'
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  type={showPassword ? 'text' : 'password'}
                  sx={{mt: 2}}
                  id="user-name-textfield"
                  placeholder='Clave'
                  value={userData.password}
                  onChange={(e) => changeUserData('password', e.target.value)}
                  label='Clave'
                  variant="outlined"
                  InputProps={{
                    endAdornment:
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? (<VisibilityOffIcon/>) : (<VisibilityIcon/>)}
                        </IconButton>
                      </InputAdornment>,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  sx={{mt: 2}}
                  id="user-name-textfield"
                  placeholder='Nombres'
                  value={userData.name}
                  onChange={(e) => changeUserData('name', e.target.value)}
                  label='Nombres'
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  sx={{mt: 2}}
                  id="user-name-textfield"
                  placeholder='Apellidos'
                  value={userData.lastName}
                  onChange={(e) => changeUserData('lastName', e.target.value)}
                  label='Apellidos'
                  variant="outlined"
                />
              </Grid>


              <Grid item xs={12} md={6}>
                <Box mt={2}>
                  <PhoneInput
                    inputStyle={{
                      width: '100%',
                    }}
                    specialLabel='Telefono / Whatsapp (principal)'
                    country='ve'
                    preferredCountries={['us', 've']}
                    onChange={(phone) => changeUserData('phone1', phone)}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box mt={2}>
                  <PhoneInput
                    inputStyle={{
                      width: '100%',
                    }}
                    specialLabel='Telefono / Whatsapp'
                    country='ve'
                    preferredCountries={['us', 've']}
                    onChange={(phone) => changeUserData('phone2', phone)}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth sx={{my: 2}}>
                  <InputLabel id="demo-simple-select-label">Tipo de usuario</InputLabel>

                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={userData.userType}
                    label="Sexo"
                    onChange={(e) => changeUserData('userType', e.target.value)}
                  >
                    <MenuItem value='Administrador'>Administrador</MenuItem>
                    <MenuItem value='Coordinador de servicios'>Coordinador de servicios</MenuItem>
                    <MenuItem value='Asesor inmobiliario Vision'>Asesor inmobiliario Vision</MenuItem>
                    <MenuItem value='Asesor inmobiliario externo'>Asesor inmobiliario externo</MenuItem>
                  </Select>
                </FormControl>
              </Grid>


            </Grid>
          </Container>
          <Divider sx={{borderWidth: '2px', my: 3}}/>
          <Container maxWidth='md' sx={{py: 5}}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  rows={3}
                  sx={{mt: 2}}
                  id="user-name-textfield"
                  placeholder='Municipio'
                  value={userData.municipality}
                  onChange={(e) => changeUserData('municipality', e.target.value)}
                  label='Municipio'
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  rows={3}
                  sx={{mt: 2}}
                  id="user-name-textfield"
                  placeholder='Estado'
                  value={userData.state}
                  onChange={(e) => changeUserData('state', e.target.value)}
                  label='Estado'
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={userData.birthdate}
                    onChange={e => changeUserData('birthdate', e)}
                    renderInput={(params) => <TextField fullWidth  {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  rows={3}
                  multiline
                  id="user-name-textfield"
                  placeholder='Profesion'
                  value={userData.profession}
                  onChange={(e) => changeUserData('profession', e.target.value)}
                  label='Profesion'
                  variant="outlined"
                />
              </Grid>

            </Grid>
          </Container>
          <Divider sx={{borderWidth: '2px', my: 3}}/>
          <Container maxWidth='md' sx={{py: 5}}>
            <Typography variant='h5' color='secondary.light'>Social</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <TextField
                  sx={{mt: 2}}
                  id="user-name-textfield"
                  placeholder='Nro ID'
                  value={userData.document}
                  onChange={(e) => changeUserData('document', e.target.value)}
                  label='Nro ID'
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  sx={{mt: 2}}
                  id="user-name-textfield"
                  placeholder='Nro ID'
                  value={userData.document}
                  onChange={(e) => changeUserData('document', e.target.value)}
                  label='Nro ID'
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  sx={{mt: 2}}
                  id="user-name-textfield"
                  placeholder='Nro ID'
                  value={userData.document}
                  onChange={(e) => changeUserData('document', e.target.value)}
                  label='Nro ID'
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  sx={{mt: 2}}
                  id="user-name-textfield"
                  placeholder='Nro ID'
                  value={userData.document}
                  onChange={(e) => changeUserData('document', e.target.value)}
                  label='Nro ID'
                  variant="outlined"
                />
              </Grid>
            </Grid>


          </Container>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{mt: 5, position: largeScreen ? 'fixed': 'auto'}}>
            <Box component='img' src={backImg} width='100%' height='100%'/>
            <Box display='flex' justifyContent='center'>
              <Box display='flex' alignItems='center' justifyContent='center' width={100} height={100}
                   sx={{backgroundColor: '#F5F5F5', borderRadius: 100,  marginTop: -7, border: `3px solid #610321`}}>
                <CameraAltIcon sx={{fontSize: 32, color: '#434F5F33'}}/>
              </Box>
            </Box>
            <Box p={2}>
              <Box mb={2}>
                <Typography variant='h4'>{userData.name} {userData.lastName}</Typography>
                <Typography variant='caption'>{userData.userType}</Typography>
              </Box>
              <Typography variant='h6'>{userData.username}</Typography>
              <Typography>{userData.phone1}</Typography>
              <Typography>{userData.email}</Typography>
              <Typography sx={{mt: 2}} color='primary' fontWeight='bold' letterSpacing={1} align='center'>{userData.company}</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
          <Button  variant='contained'>Editar propietario</Button>
        </Grid>
      </Grid>

    </Page>

  )
}




