import {FormControl, Grid, MenuItem, Select, TextField, Typography, Divider, Box, InputAdornment} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import PhoneInput from "react-phone-input-2";
import {useEffect, useState} from 'react';
import useRegisterProperty from "../../../hooks/api/properties/useRegisterProperty";

export default function NegotiationInformation({event}) {
  const {handleClientData, data} = useRegisterProperty();
  const [clientData, setClientData] = useState({...data.clientData})

  const handleChange = (index, value) => {
    setClientData(prevState => ({
      ...prevState,
      [index]: value
    }))
  }

  useEffect(() => {
    handleClientData(clientData);
  }, [event])

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1}}>Precio</Typography>
        <TextField
          color='secondary'
          fullWidth
          placeholder='Precio'
          value={clientData.price}
          onChange={(e) => handleChange('price', e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1}}>Recibe como medio de pago</Typography>

        <FormControl fullWidth>

          <Select
            value={clientData.partOfPayment}
            onChange={(e) => handleChange('partOfPayment', e.target.value)}
          >
            <MenuItem value='Vehiculo'>Vehiculo</MenuItem>
            <MenuItem value='Inmueble Valor Menor'>Inmueble Valor Menor</MenuItem>
            <MenuItem value='Ambos'>Ambos</MenuItem>
            <MenuItem value='Solo Dinero'>Solo Dinero</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1}}>Porcentaje de comision</Typography>
        <TextField
          color='secondary'
          fullWidth
          placeholder='Porcentaje de comision'
          value={clientData.comission}
          InputProps={{
            endAdornment:
              <InputAdornment position="end">%</InputAdornment>
          }}
          onChange={(e) => handleChange('comission', e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1}}>Negociacion minima</Typography>
        <TextField
          color='secondary'
          fullWidth
          placeholder='Negociacion minima'
          value={clientData.minimunNegotiation}
          onChange={(e) => handleChange('minimunNegotiation', e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <Typography fontWeight='bold' sx={{mb: 1}}>Motivo de venta / alquiler</Typography>
        <TextField
          color='secondary'
          fullWidth
          multiline
          rows={5}
          placeholder='Motivo de venta / alquiler'
          value={clientData.observations}
          onChange={(e) => handleChange('observations', e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <Divider sx={{my: 3}}/>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h5'>Datos de cliente</Typography>
      </Grid>
      {/*  datos de cliente */}

      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1}}>Nombres</Typography>
        <TextField
          color='secondary'
          fullWidth
          placeholder='Nombres'
          value={clientData.firstName}
          onChange={(e) => handleChange('firstName', e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1}}>Apellidos</Typography>
        <TextField
          color='secondary'
          fullWidth
          placeholder='Apellidos'
          value={clientData.lastName}
          onChange={(e) => handleChange('lastName', e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        {/*phjone*/}
        <Typography fontWeight='bold' sx={{mb: 1}}>Telefono</Typography>

        <Box>
          <PhoneInput
            inputStyle={{
              width: '100%',
            }}
            value={clientData.cellPhone}
            specialLabel=''
            country='ve'
            preferredCountries={['us', 've']}
            onChange={(phone) => handleChange('cellPhone', phone)}
          />
        </Box>

      </Grid>
      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1}}>Email</Typography>
        <TextField
          color='secondary'
          fullWidth
          placeholder='Email'
          value={clientData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1}}>Fecha de cumpleanos</Typography>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            value={clientData.birthday}
            onChange={e => handleChange('birthday', e)}
            renderInput={(params) => <TextField fullWidth  {...params} />}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12}>
        <Divider sx={{my: 3}}/>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h5'>Persona de contacto</Typography>
      </Grid>
      {/*  datos de persona de contacto */}

      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1}}>Nombres</Typography>
        <TextField
          color='secondary'
          fullWidth
          placeholder='Nombres'
          value={clientData.contactFirstName}
          onChange={(e) => handleChange('contactFirstName', e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1}}>Apellidos</Typography>
        <TextField
          color='secondary'
          fullWidth
          placeholder='Apellidos'
          value={clientData.contactLastName}
          onChange={(e) => handleChange('contactLastName', e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        {/*phjone*/}
        <Typography fontWeight='bold' sx={{mb: 1}}>Telefono</Typography>

        <Box>
          <PhoneInput
            inputStyle={{
              width: '100%',
            }}
            specialLabel=''
            value={clientData.contactCellPhone}
            country='ve'
            preferredCountries={['us', 've']}
            onChange={(phone) => handleChange('contactCellPhone', phone)}
          />
        </Box>

      </Grid>
      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1}}>Email</Typography>
        <TextField
          color='secondary'
          fullWidth
          placeholder='Email'
          value={clientData.contactEmail}
          onChange={(e) => handleChange('contactEmail', e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <Divider sx={{my: 3}}/>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h5'>Apoderado</Typography>
      </Grid>
      {/*  datos de apoderado */}

      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1}}>Nombres</Typography>
        <TextField
          color='secondary'
          fullWidth
          placeholder='Nombres'
          value={clientData.attorneyFirstName}
          onChange={(e) => handleChange('attorneyFirstName', e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1}}>Apellidos</Typography>
        <TextField
          color='secondary'
          fullWidth
          placeholder='Apellidos'
          value={clientData.attorneyLastName}
          onChange={(e) => handleChange('attorneyLastName', e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        {/*phjone*/}
        <Typography fontWeight='bold' sx={{mb: 1}}>Telefono</Typography>

        <Box>
          <PhoneInput
            inputStyle={{
              width: '100%',
            }}
            value={clientData.attorneyCellPhone}
            specialLabel=''
            country='ve'
            preferredCountries={['us', 've']}
            onChange={(phone) => handleChange('attorneyCellPhone', phone)}
          />
        </Box>

      </Grid>
      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1}}>Email</Typography>
        <TextField
          color='secondary'
          fullWidth
          placeholder='Email'
          value={clientData.attorneyEmail}
          onChange={(e) => handleChange('attorneyEmail', e.target.value)}
          variant="outlined"
        />
      </Grid>

    </Grid>
  )
}
