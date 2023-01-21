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
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import PhoneInput from 'react-phone-input-2'
import {useState} from 'react';
import Page from "../../components/Page";
import backImg from '../../assets/img/card-back-1.png';
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import noImage from '../../assets/img/no-image.jpg'
import useCreateUser from "../../hooks/api/users/useCreateUser";
import {useNavigate} from "react-router-dom";

export default function UserEdit() {
  const navigate = useNavigate();
  const largeScreen = useMediaQuery(theme => theme.breakpoints.up('md'));
  const [showPassword, setShowPassword] = useState(false);
  const {createUser, loading} = useCreateUser();
  const [userData, setUserData] = useState({
    birthday: '',
    username: '',
    city: '',
    email: '',
    id: '',
    state: '',
    userType: '',
    password: '',
    profession: '',
    socialFacebook: '',
    socialInstagram: '',
    socialTwitter: '',
    socialYoutube: '',
    phonNumber1: '',
    phonNumber2: '',
    imageData: '',
    imageType: '',
    lastName: '',
    firstName: '',
    fiscalAddress: ''
    }
  )


  function changeUserData(type, value) {
    console.log(value);
    setUserData(prevState => ({
      ...prevState,
      [type]: value
    }))
  }

  function handleImageUpload(e) {
    const {files} = e.target;
    console.log(files[0])
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      setUserData(prevState => ({
        ...prevState,
        image: reader.result,
        imageType: files[0].type,
      }))
    }
  }

  return (
    <Page title='Registro de usuario | Vision Inmobiliaria'>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Container maxWidth='md' sx={{py: 5}}>
              <Typography variant='h5' color='secondary.light'>Datos de usuario</Typography>
              <Box display='flex' flexDirection='column' alignItems='center'>
                <Box
                  component='img'
                  width={100}
                  height={100}
                  borderRadius={100}
                  src={userData.image ? userData.image : noImage}
                  onError={({currentTarget}) => {
                    currentTarget.onerror = null;
                    currentTarget.src = noImage
                  }}
                />
                <Button component="label" sx={{mt: 2}}>
                  Subir Fotografia
                  <input hidden accept="image/*" type="file" onChange={handleImageUpload}/>
                </Button>
              </Box>
              <Divider sx={{borderWidth: '2px', my: 3}}/>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    sx={{mt: 2}}
                    id="user-name-textfield"
                    placeholder='Empresa'
                    defaultValue='Vision Inmobiliaria'
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
                    value={userData.firstName}
                    onChange={(e) => changeUserData('firstName', e.target.value)}
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
                      value={userData.phonNumber1}
                      preferredCountries={['us', 've']}
                      onChange={(phone) => changeUserData('phonNumber1', phone)}
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
                      value={userData.phonNumber2}
                      preferredCountries={['us', 've']}
                      onChange={(phone) => changeUserData('phonNumber2', phone)}
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
                      label="Tipo de usuario"
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
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      value={userData.birthday}
                      onChange={e => changeUserData('birthday', e)}
                      renderInput={(params) => <TextField fullWidth  {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    id="user-name-textfield"
                    placeholder='Profesion'
                    value={userData.profession}
                    onChange={(e) => changeUserData('profession', e.target.value)}
                    label='Profesion'
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    rows={3}
                    sx={{mt: 2}}
                    id="user-name-textfield"
                    placeholder='Municipio'
                    value={userData.city}
                    onChange={(e) => changeUserData('city', e.target.value)}
                    label='Municipio'
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    sx={{mt: 2}}
                    id="user-name-textfield"
                    placeholder='Estado'
                    value={userData.state}
                    onChange={(e) => changeUserData('state', e.target.value)}
                    label='Estado'
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    fullWidth
                    rows={4}
                    sx={{mt: 2}}
                    multiline
                    id="user-name-textfield"
                    placeholder='Direccion fiscal'
                    value={userData.fiscalAddress}
                    onChange={(e) => changeUserData('fiscalAddress', e.target.value)}
                    label='Direccion fiscal'
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
                    placeholder='Facebook'
                    value={userData.socialFacebook}
                    onChange={(e) => changeUserData('socialFacebook', e.target.value)}
                    label='Facebook'
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    sx={{mt: 2}}
                    id="user-name-textfield"
                    placeholder='Instagram'
                    value={userData.socialInstagram}
                    onChange={(e) => changeUserData('socialInstagram', e.target.value)}
                    label='Instagram'
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    sx={{mt: 2}}
                    id="user-name-textfield"
                    placeholder='Twitter'
                    value={userData.socailTwitter}
                    onChange={(e) => changeUserData('socailTwitter', e.target.value)}
                    label='Twitter'
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    sx={{mt: 2}}
                    id="user-name-textfield"
                    placeholder='Youtube'
                    value={userData.socialYoutube}
                    onChange={(e) => changeUserData('socialYoutube', e.target.value)}
                    label='Youtube'
                    variant="outlined"
                  />
                </Grid>
              </Grid>

              <Grid item xs={12} sx={{display: 'flex', justifyContent: 'space-between', mt: 5, flexWrap: 'wrap', flexDirection: largeScreen ? 'row' : 'column-reverse'}}>
                <Button sx={{ mt: !largeScreen ? 3 : 0 }} fullWidth={!largeScreen} onClick={() => navigate(-1)} variant='outlined'>Cancelar</Button>
                <Button disabled={loading} fullWidth={!largeScreen}  onClick={() => createUser(userData)}
                        variant='contained'>Registrar usuario</Button>
              </Grid>
            </Container>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{mt: 5, position: largeScreen ? 'fixed' : 'auto'}}>
              <Box component='img' src={backImg} width='100%' height='100%'/>
              <Box display='flex' justifyContent='center'>
                <Box
                  component='img'
                  width={100}
                  height={100}
                  sx={{marginTop: -7}}
                  borderRadius={100}
                  src={userData.image ? userData.image : noImage}
                  onError={({currentTarget}) => {
                    currentTarget.onerror = null;
                    currentTarget.src = noImage
                  }}
                />
              </Box>
              <Box p={2}>
                <Box mb={2}>
                  <Typography variant='h4'>{userData.firstName} {userData.lastName}</Typography>
                  <Typography variant='caption'>{userData.userType}</Typography>
                </Box>
                <Typography variant='h6'>{userData.username}</Typography>
                <Typography>{userData.phonNumber1}</Typography>
                <Typography>{userData.email}</Typography>
                <Typography sx={{mt: 2}} color='primary' fontWeight='bold' letterSpacing={1}
                            align='center'>{userData.company ? userData.company : 'Vision Inmobiliaria'}</Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
    </Page>

  )
}




