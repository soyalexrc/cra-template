import {
  Box,
  Button,
  Divider,
  Typography,
  Container,
  Grid,
  TextField,
  useMediaQuery
} from "@mui/material";
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import PhoneInput from 'react-phone-input-2'
import {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import Page from "../../components/Page";
import SmallLoading from "../../components/SmallLoading";
import useUpdateAdviser from "../../hooks/api/externalAdvisers/useUpdateAdviser";
import useGetAdvisers from "../../hooks/api/externalAdvisers/useGetAdvisers";
import useUpdateAlly from "../../hooks/api/allies/useUpdateAlly";
import useGetAllies from "../../hooks/api/allies/useGetAllies";

export default function OwnerEdit() {
  const navigate = useNavigate();
  const {id} = useParams();
  const largeScreen = useMediaQuery(theme => theme.breakpoints.up('md'));
  const {currentAlly, getAllyById, loading: getLoading} = useGetAllies()
  const { loading, editAlly} = useUpdateAlly()
  const [adviserData, setAdviserData] = useState(currentAlly)

  useEffect(() => {
    getAllyById(id)
  }, [])

  useEffect(() => {
    setAdviserData(currentAlly)
  }, [currentAlly])

  function changeOwnerData(type, value) {
    console.log(value);
    setAdviserData(prevState => ({
      ...prevState,
      [type]: value
    }))
  }

  return (
    <Page title='Edicion de aliado | Vision Inmobiliaria'>
      {getLoading && <SmallLoading/>}
      {
        !getLoading && adviserData &&
        <Grid container spacing={2}>
          <Grid item xs={12} md={2}></Grid>
          <Grid item xs={12} md={8}>
            <Container maxWidth='md' sx={{py: 5}}>
              <Typography variant='h5' align='center' color='secondary.light'>Datos de aliado</Typography>
              <Grid container spacing={2} sx={{ mt: 3 }}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    sx={{mt: 2}}
                    id="user-name-textfield"
                    placeholder='Email'
                    value={adviserData.email}
                    onChange={(e) => changeOwnerData('email', e.target.value)}
                    label='Email'
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    sx={{mt: 2}}
                    id="user-name-textfield"
                    placeholder='Nombres'
                    value={adviserData.first_name}
                    onChange={(e) => changeOwnerData('first_name', e.target.value)}
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
                    value={adviserData.last_name}
                    onChange={(e) => changeOwnerData('last_name', e.target.value)}
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
                      specialLabel='Telefono'
                      country='ve'
                      value={adviserData.phone}
                      preferredCountries={['us', 've']}
                      onChange={(phone) => changeOwnerData('phone', phone)}
                    />
                  </Box>
                </Grid>

              </Grid>
            </Container>
            <Divider sx={{borderWidth: '2px', my: 3}}/>
            <Container maxWidth='md' sx={{py: 5}}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      value={adviserData.birthday}
                      onChange={e => changeOwnerData('birthday', e)}
                      renderInput={(params) => <TextField fullWidth  {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>
                {/*<Grid item xs={12} md={6}>*/}
                {/*  <FormControl fullWidth >*/}
                {/*    <InputLabel id="demo-simple-select-label">Es inversor?</InputLabel>*/}
                {/*    <Select*/}
                {/*      labelId="demo-simple-select-label"*/}
                {/*      id="demo-simple-select"*/}
                {/*      value={adviserData.isInvestor}*/}
                {/*      label="Es inversor?"*/}
                {/*      onChange={(e) => changeOwnerData('isInvestor', e.target.value)}*/}
                {/*    >*/}
                {/*      <MenuItem value='Si'>Si</MenuItem>*/}
                {/*      <MenuItem value='No'>No</MenuItem>*/}
                {/*    </Select>*/}
                {/*  </FormControl>*/}
                {/*</Grid>*/}

              </Grid>
              <Grid item xs={12} sx={{display: 'flex', justifyContent: 'space-between', mt: 5, flexWrap: 'wrap', flexDirection: largeScreen ? 'row' : 'column-reverse'}}>
                <Button sx={{ mt: !largeScreen ? 3 : 0 }} fullWidth={!largeScreen} onClick={() => navigate(-1)} variant='outlined'>Cancelar</Button>
                <Button fullWidth={!largeScreen} disabled={loading} onClick={() => editAlly(adviserData)} variant='contained'>Editar propietario</Button>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      }

    </Page>

  )
}




