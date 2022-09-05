import {FormControl, Grid, MenuItem, Select, TextField, Typography, Divider, Box} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import PhoneInput from "react-phone-input-2";
import AddIcon from "@mui/icons-material/Add";

export default function LegalDocumentsInformation({data, handleChange}) {
  return (
    <Grid container spacing={4}>
      {/*<Grid item xs={12} md={3}>*/}
      {/*  <Typography fontWeight='bold' sx={{mb: 1}}>Origen de la propiedad</Typography>*/}
      {/*  <FormControl fullWidth>*/}
      {/*    <Select*/}
      {/*      value='Venta Simple'*/}
      {/*      onChange={(e) => handleChange('operationType', e.target.value)}*/}
      {/*    >*/}
      {/*      <MenuItem value='Venta Simple'>Venta Simple</MenuItem>*/}
      {/*      <MenuItem value='Sucesion'>Sucesion</MenuItem>*/}
      {/*      <MenuItem value='Reparacion de Bienes'>Reparacion de Bienes</MenuItem>*/}
      {/*      <MenuItem value='Registro de Comercio'>Registro de Comercio</MenuItem>*/}
      {/*      <MenuItem value='Autorizacion INTI'>Autorizacion INTI</MenuItem>*/}
      {/*      <MenuItem value='Autorizacion Alcaldia'>Autorizacion Alcaldia</MenuItem>*/}
      {/*      <MenuItem value='Cesion de Derechos'>Cesion de Derechos</MenuItem>*/}
      {/*      <MenuItem value='Titulo Supletorio'>Titulo Supletorio</MenuItem>*/}
      {/*    </Select>*/}
      {/*  </FormControl>*/}
      {/*</Grid>*/}
      {/*<Grid item xs={12} md={3}>*/}
      {/*  <Typography fontWeight='bold' sx={{mb: 1}}>Condicion de documento</Typography>*/}

      {/*  <FormControl fullWidth>*/}

      {/*    <Select*/}
      {/*      value='Registrado'*/}
      {/*      onChange={(e) => handleChange('user', e.target.value)}*/}
      {/*    >*/}
      {/*      <MenuItem value='Registrado'>Registrado</MenuItem>*/}
      {/*      <MenuItem value='Notariado'>Notariado</MenuItem>*/}
      {/*      <MenuItem value='Por Tribunales'>Por Tribunales</MenuItem>*/}
      {/*      <MenuItem value='Autorizacion'>Autorizacion</MenuItem>*/}
      {/*      <MenuItem value='Autorizacion INTI'>Autorizacion INTI</MenuItem>*/}
      {/*      <MenuItem value='Otros'>Otros</MenuItem>*/}
      {/*    </Select>*/}
      {/*  </FormControl>*/}
      {/*</Grid>*/}
      {/*<Grid item xs={12} md={3}>*/}
      {/*  <Typography fontWeight='bold' sx={{mb: 1}}>Ficha catastral</Typography>*/}

      {/*  <FormControl fullWidth>*/}

      {/*    <Select*/}
      {/*      value='Actualizada'*/}
      {/*      onChange={(e) => handleChange('operationType', e.target.value)}*/}
      {/*    >*/}
      {/*      <MenuItem value='Actualizada'>Actualizada</MenuItem>*/}
      {/*      <MenuItem value='Por Actualizar'>Por Actualizar</MenuItem>*/}
      {/*      <MenuItem value='Por Solicitar'>Por Solicitar</MenuItem>*/}
      {/*    </Select>*/}
      {/*  </FormControl>*/}
      {/*</Grid>*/}
      {/*<Grid item xs={12} md={3}>*/}
      {/*  <Typography fontWeight='bold' sx={{mb: 1}}>Vivienda principal</Typography>*/}

      {/*  <FormControl fullWidth>*/}

      {/*    <Select*/}
      {/*      value='Si'*/}
      {/*      onChange={(e) => handleChange('operationType', e.target.value)}*/}
      {/*    >*/}
      {/*      <MenuItem value='Si'>Si</MenuItem>*/}
      {/*      <MenuItem value='No'>No</MenuItem>*/}
      {/*    </Select>*/}
      {/*  </FormControl>*/}
      {/*</Grid>*/}
      {/*<Grid item xs={12} md={3}>*/}
      {/*  <Typography fontWeight='bold' sx={{mb: 1}}>Poder</Typography>*/}
      {/*  <FormControl fullWidth>*/}
      {/*    <Select*/}
      {/*      value='Si'*/}
      {/*      onChange={(e) => handleChange('operationType', e.target.value)}*/}
      {/*    >*/}
      {/*      <MenuItem value='Si'>Si</MenuItem>*/}
      {/*      <MenuItem value='No'>No</MenuItem>*/}
      {/*    </Select>*/}
      {/*  </FormControl>*/}
      {/*</Grid>*/}
      {/*<Grid item xs={12} md={3}>*/}
      {/*  <Typography fontWeight='bold' sx={{mb: 1}}>Condicion de poder</Typography>*/}

      {/*  <FormControl fullWidth>*/}

      {/*    <Select*/}
      {/*      value='Registrado'*/}
      {/*      onChange={(e) => handleChange('user', e.target.value)}*/}
      {/*    >*/}
      {/*      <MenuItem value='Registrado'>Registrado</MenuItem>*/}
      {/*      <MenuItem value='Notariado'>Notariado</MenuItem>*/}
      {/*      <MenuItem value='Apostillado'>Apostillado</MenuItem>*/}
      {/*    </Select>*/}
      {/*  </FormControl>*/}
      {/*</Grid>*/}
      {/*<Grid item xs={12} md={3}>*/}
      {/*  <Typography fontWeight='bold' sx={{mb: 1}}>Hipoteca</Typography>*/}

      {/*  <FormControl fullWidth>*/}

      {/*    <Select*/}
      {/*      value='Cancelada'*/}
      {/*      onChange={(e) => handleChange('operationType', e.target.value)}*/}
      {/*    >*/}
      {/*      <MenuItem value='Cancelada'>Cancelada</MenuItem>*/}
      {/*      <MenuItem value='Borrador'>Borrador</MenuItem>*/}
      {/*      <MenuItem value='Por Vob Banavih'>Por Vob Banavih</MenuItem>*/}
      {/*      <MenuItem value='Por Gestionar'>Por Gestionar</MenuItem>*/}
      {/*    </Select>*/}
      {/*  </FormControl>*/}
      {/*</Grid>*/}
      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1}}>Recibe como medio de pago</Typography>

        <FormControl fullWidth>

          <Select
            value='Vehiculo'
            onChange={(e) => handleChange('operationType', e.target.value)}
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
          disabled
          value={''}
          onChange={(e) => handleChange('company', e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1}}>Negociacion minima</Typography>
        <TextField
          color='secondary'
          fullWidth
          placeholder='Negociacion minima'
          disabled
          value={''}
          onChange={(e) => handleChange('company', e.target.value)}
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
          disabled
          value={''}
          onChange={(e) => handleChange('company', e.target.value)}
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
          disabled
          value={''}
          onChange={(e) => handleChange('company', e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1}}>Apellidos</Typography>
        <TextField
          color='secondary'
          fullWidth
          placeholder='Apellidos'
          disabled
          value={''}
          onChange={(e) => handleChange('company', e.target.value)}
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
            country='ve'
            preferredCountries={['us', 've']}
            onChange={(phone) => handleChange('phone', phone)}
          />
        </Box>

      </Grid>
      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1}}>Email</Typography>
        <TextField
          color='secondary'
          fullWidth
          placeholder='Email'
          disabled
          value={''}
          onChange={(e) => handleChange('company', e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1}}>Fecha de cumpleanos</Typography>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            value={''}
            onChange={e => handleChange('birthdate', e)}
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
          disabled
          value={''}
          onChange={(e) => handleChange('company', e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1}}>Apellidos</Typography>
        <TextField
          color='secondary'
          fullWidth
          placeholder='Apellidos'
          disabled
          value={''}
          onChange={(e) => handleChange('company', e.target.value)}
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
            country='ve'
            preferredCountries={['us', 've']}
            onChange={(phone) => handleChange('phone', phone)}
          />
        </Box>

      </Grid>
      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1}}>Email</Typography>
        <TextField
          color='secondary'
          fullWidth
          placeholder='Email'
          disabled
          value={''}
          onChange={(e) => handleChange('company', e.target.value)}
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
          disabled
          value={''}
          onChange={(e) => handleChange('company', e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1}}>Apellidos</Typography>
        <TextField
          color='secondary'
          fullWidth
          placeholder='Apellidos'
          disabled
          value={''}
          onChange={(e) => handleChange('company', e.target.value)}
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
            country='ve'
            preferredCountries={['us', 've']}
            onChange={(phone) => handleChange('phone', phone)}
          />
        </Box>

      </Grid>
      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1}}>Email</Typography>
        <TextField
          color='secondary'
          fullWidth
          placeholder='Email'
          disabled
          value={''}
          onChange={(e) => handleChange('company', e.target.value)}
          variant="outlined"
        />
      </Grid>

      {/*  datos de archivos */}
      <Grid item xs={12}>
        <Divider sx={{my: 3}}/>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h5'>Documentacion</Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography fontWeight='bold' sx={{ mb: 1 }} color='primary'>Convenio Compra - Venta - Alquiler</Typography>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          height={200}
          border='1px solid lightgray'
          sx={{cursor: 'pointer'}}
        >
          <AddIcon sx={{fontSize: '50px'}}/>
        </Box>
      </Grid>


      <Grid item xs={12} md={4}>
        <Typography fontWeight='bold' sx={{ mb: 1 }} color='primary'>Titulo de propiedad</Typography>

        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          height={200}
          border='1px solid lightgray'
          sx={{cursor: 'pointer'}}
        >
          <AddIcon sx={{fontSize: '50px'}}/>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography fontWeight='bold' sx={{ mb: 1 }} color='primary'>Cedula catastral</Typography>

        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          height={200}
          border='1px solid lightgray'
          sx={{cursor: 'pointer'}}
        >
          <AddIcon sx={{fontSize: '50px'}}/>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography fontWeight='bold' sx={{ mb: 1 }} color='primary'>Cedula de propietario</Typography>

        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          height={200}
          border='1px solid lightgray'
          sx={{cursor: 'pointer'}}
        >
          <AddIcon sx={{fontSize: '50px'}}/>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h6'>Otros</Typography>
      </Grid>

      <Grid item xs={12} md={2}>

        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          height={200}
          border='1px solid lightgray'
          sx={{cursor: 'pointer'}}
        >
          <AddIcon sx={{fontSize: '50px'}}/>
        </Box>
      </Grid>
    </Grid>
  )
}
