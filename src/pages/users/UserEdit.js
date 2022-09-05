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
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Page from "../../components/Page";
import backImg from '../../assets/img/card-back-1.png';
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import noImage from '../../assets/img/no-image.jpg'
import SmallLoading from "../../components/SmallLoading";
import useUpdateUser from "../../hooks/api/users/useUpdateUser";
import useGetUsers from "../../hooks/api/users/useGetUsers";

export default function UserEdit() {
  const {id} = useParams();
  const largeScreen = useMediaQuery(theme => theme.breakpoints.up('md'));
  const [showPassword, setShowPassword] = useState(false);
  const {loading, editUser} = useUpdateUser();
  const {currentUser, getUserById, loading: getLoading} = useGetUsers();
  const [userData, setUserData] = useState(currentUser)

  useEffect(() => {
    getUserById(id)
  }, [])

  useEffect(() => {
    setUserData(currentUser)
  }, [currentUser])

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
    <Page title='Edicion de usuario | Vision Inmobiliaria'>
      {getLoading && <SmallLoading/>}
      {
        !getLoading && userData &&
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
                    value={userData.first_name}
                    onChange={(e) => changeUserData('first_name', e.target.value)}
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
                    value={userData.last_name}
                    onChange={(e) => changeUserData('last_name', e.target.value)}
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
                      value={userData.phone_number1}
                      preferredCountries={['us', 've']}
                      onChange={(phone) => changeUserData('phone_number1', phone)}
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
                      value={userData.phone_number2}
                      preferredCountries={['us', 've']}
                      onChange={(phone) => changeUserData('phone_number2', phone)}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth sx={{my: 2}}>
                    <InputLabel id="demo-simple-select-label">Tipo de usuario</InputLabel>

                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={userData.user_type}
                      label="Tipo de usuario"
                      onChange={(e) => changeUserData('user_type', e.target.value)}
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
                    value={userData.fiscal_address}
                    onChange={(e) => changeUserData('fiscal_address', e.target.value)}
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
                    value={userData.social_facebook}
                    onChange={(e) => changeUserData('social_facebook', e.target.value)}
                    label='Facebook'
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    sx={{mt: 2}}
                    id="user-name-textfield"
                    placeholder='Instagram'
                    value={userData.social_instagram}
                    onChange={(e) => changeUserData('social_instagram', e.target.value)}
                    label='Instagram'
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    sx={{mt: 2}}
                    id="user-name-textfield"
                    placeholder='Twitter'
                    value={userData.social_twitter}
                    onChange={(e) => changeUserData('social_twitter', e.target.value)}
                    label='Twitter'
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    sx={{mt: 2}}
                    id="user-name-textfield"
                    placeholder='Youtube'
                    value={userData.social_youtube}
                    onChange={(e) => changeUserData('social_youtube', e.target.value)}
                    label='Youtube'
                    variant="outlined"
                  />
                </Grid>
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
                  <Typography variant='h4'>{userData.first_name} {userData.last_name}</Typography>
                  <Typography variant='caption'>{userData.user_type}</Typography>
                </Box>
                <Typography variant='h6'>{userData.username}</Typography>
                <Typography>{userData.phone_number1}</Typography>
                <Typography>{userData.email}</Typography>
                <Typography sx={{mt: 2}} color='primary' fontWeight='bold' letterSpacing={1}
                            align='center'>{userData.company ? userData.company : 'Vision Inmobiliaria'}</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
            <Button disabled={loading} fullWidth={!largeScreen} sx={{ m: 5 }} onClick={() => editUser(userData)} variant='contained'>Editar usuario</Button>
          </Grid>
        </Grid>
      }
    </Page>

  )
}




