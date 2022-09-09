import {FormControl, Grid, MenuItem, Select, TextField, Typography, Autocomplete, Box} from "@mui/material";
import useRegisterProperty from "../../../hooks/api/properties/useRegisterProperty";
import states from "../../../utils/states";
import {useEffect, useState} from "react";

export default function LocationInformation({event}) {
  const {handleLocationData, data} = useRegisterProperty();
  const [location, setLocation] = useState({...data.location})
  console.log(data);

  const handleChange = (index, value) => {
    setLocation(prevState => ({
      ...prevState,
      [index]: value
    }))
  }


  useEffect(() => {
    handleLocationData(location)
  }, [event])

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1 }}>Pais</Typography>

        <FormControl fullWidth >

          <Select
            value={location.country}
            onChange={(e) => handleChange('country', e.target.value)}
          >
            <MenuItem value='Venezuela'>Venezuela</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1 }}>Estado</Typography>

        <Autocomplete
          sx={{ mt: 1}}
          fullWidth
s          disablePortal
          id="combo-box-demo"
          options={states}
          onChange={(e, newValue) => handleChange('state', newValue)}
          renderInput={(params) =>
            <TextField
              {...params}
              label=""
            />
          }
        />
        {/*<Typography fontWeight='bold' sx={{mb: 1 }}>Estado</Typography>*/}

        {/*<FormControl fullWidth >*/}

        {/*  <Select*/}
        {/*    value={location.state}*/}
        {/*    onChange={(e) => handleChange('state', e.target.value)}*/}
        {/*  >*/}
        {/*    <MenuItem value='Carabobo'>Carabobo</MenuItem>*/}
        {/*  </Select>*/}
        {/*</FormControl>*/}
      </Grid>
      <Grid item xs={12} md={3}>

        <Typography fontWeight='bold' sx={{mb: 1 }}>Municipio</Typography>
        <TextField
          color='secondary'
          fullWidth
          placeholder='Municipio'
          value={location.city}
          onChange={(e) => handleChange('city', e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1 }}>Urbanizacion / Sector</Typography>

        <TextField
          color='secondary'
          fullWidth
          placeholder='Urbanizacion / Sector'
          value={location.municipality}
          onChange={(e) => handleChange('municipality', e.target.value)}
          variant="outlined"
        />

      </Grid>
      {/*  */}
      <Grid item xs={12} md={6}>
        <Typography fontWeight='bold' sx={{mb: 1 }}>Avenida</Typography>

        <TextField
          color='secondary'
          fullWidth
          placeholder='Avenida'
          value={location.avenue}
          onChange={(e) => handleChange('avenue', e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography fontWeight='bold' sx={{mb: 1 }}>Calle</Typography>

        <TextField
          color='secondary'
          fullWidth
          placeholder='Calle'
          value={location.street}
          onChange={(e) => handleChange('street', e.target.value)}
          variant="outlined"
        />
      </Grid>

      {
        data.property.propertyType === 'Apartamento' &&
        <Grid item xs={12} md={4}>
          <Typography fontWeight='bold' sx={{mb: 1 }}>Edificio</Typography>

          <TextField
            color='secondary'
            fullWidth
            placeholder='Edificio'
            value={location.buildingShoppingcenter}
            onChange={(e) => handleChange('buildingShoppingcenter', e.target.value)}
            variant="outlined"
          />
        </Grid>
      }
      {
        (data.property.propertyType === 'Locales Comerciales' || data.property.propertyType === 'Oficinas') &&
        <Grid item xs={12} md={4}>
          <Typography fontWeight='bold' sx={{mb: 1 }}>Centro comercial</Typography>

          <TextField
            color='secondary'
            fullWidth
            placeholder='Centro comercial'
            value={location.buildingShoppingcenter}
            onChange={(e) => handleChange('buildingShoppingcenter', e.target.value)}
            variant="outlined"
          />
        </Grid>
      }
      <Grid item xs={12} md={2}>
        <Typography fontWeight='bold' sx={{mb: 1 }}>Es calle cerrada ?</Typography>

        <FormControl fullWidth >

          <Select
            value={location.isClosedStreet}
            onChange={(e) => handleChange('isClosedStreet', e.target.value)}
          >
            <MenuItem value='Si'>Si</MenuItem>
            <MenuItem value='No'>No</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={2}>
        <Typography fontWeight='bold' sx={{mb: 1 }}>Ubicacion</Typography>

        <FormControl fullWidth >

          <Select
            value={location.location}
            onChange={(e) => handleChange('location', e.target.value)}
          >
            <MenuItem value='A pie de calle'>A pie de calle</MenuItem>
            <MenuItem value='Centro comercial'>Centro comercial</MenuItem>
            <MenuItem value='Conjunto residencial'>Conjunto residencial</MenuItem>
            <MenuItem value='Torre de oficinas'>Torre de oficinas</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={2}>
        <Typography fontWeight='bold' sx={{mb: 1 }}>Numero</Typography>

        <TextField
          color='secondary'
          fullWidth
          placeholder='Numero'
          value={location.buildingNumber}
          onChange={(e) => handleChange('buildingNumber', e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <Typography fontWeight='bold' sx={{mb: 1 }}>Piso</Typography>

        <TextField
          color='secondary'
          fullWidth
          placeholder='Piso'
          value={location.floor}
          onChange={(e) => handleChange('floor', e.target.value)}
          variant="outlined"
        />
      </Grid>
      {/*  */}
      <Grid item xs={12} md={6}>
        <Typography fontWeight='bold' sx={{mb: 1 }}>Punto de referencia</Typography>
        <TextField
          color='secondary'
          fullWidth
          multiline
          rows={5}
          placeholder='Punto de referencia'
          value={location.referencePoint}
          onChange={(e) => handleChange('referencePoint', e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography fontWeight='bold' sx={{mb: 1 }}>Como Llegar?</Typography>

        <TextField
          color='secondary'
          fullWidth
          multiline
          rows={5}
          placeholder='Como Llegar?'
          value={location.howToGet}
          onChange={(e) => handleChange('howToGet', e.target.value)}
          variant="outlined"
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1 }}>Numero de estacionamiento</Typography>
        <TextField
          color='secondary'
          fullWidth
          placeholder='Numero de estacionamiento'
          value={location.parkingNumber}
          onChange={(e) => handleChange('parkingNumber', e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={3}>

        <Typography fontWeight='bold' sx={{mb: 1 }}>Numero de maletero</Typography>
        <TextField
          color='secondary'
          fullWidth
          placeholder='Numero de maletero'
          value={location.trunkNumber}
          onChange={(e) => handleChange('trunkNumber', e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1 }}>Nivel de estacionamiento</Typography>
        <TextField
          color='secondary'
          fullWidth
          placeholder='Nivel de estacionamiento'
          value={location.parkingLevel}
          onChange={(e) => handleChange('parkingLevel', e.target.value)}
          variant="outlined"
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1 }}>Nivel de maletero</Typography>
        <TextField
          color='secondary'
          fullWidth
          placeholder='Nivel de maletero'
          value={location.trunkLevel}
          onChange={(e) => handleChange('trunkLevel', e.target.value)}
          variant="outlined"
        />
      </Grid>

    </Grid>
  )
}
