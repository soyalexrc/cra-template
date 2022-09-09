import {FormControl, Grid, MenuItem, Select, TextField, Typography, InputAdornment, IconButton} from "@mui/material";
import useRegisterProperty from "../../../hooks/api/properties/useRegisterProperty";
import {useState, useEffect} from 'react';

export default function GeneralInformation({event}) {
  const {
    handlePropertyData,
    data,
    getAttributesByPropertyType,
    isNotPropertyApartment,
    isPropertyApartment
  } = useRegisterProperty();
  const [property, setProperty] = useState({...data.property})

  console.log('data', data);

  const handleChange = async (index, value) => {
    setProperty(prevState => ({
      ...prevState,
      [index]: value
    }))
    if (index === 'propertyType') {
      await getAttributesByPropertyType(value);
    }

    if (index === 'propertyType' && value === 'Apartamento') {
      isPropertyApartment()
    } else {
      isNotPropertyApartment()
    }
  }

  useEffect(() => {
    handlePropertyData(property)
  }, [event])

  console.log(property);
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Typography fontWeight='bold' sx={{mb: 1}}>Compania</Typography>
        <TextField
          color='secondary'
          fullWidth
          placeholder='Compania'
          disabled
          value={property.company}
          onChange={(e) => handleChange('company', e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1}}>Codigo</Typography>
        <TextField
          color='secondary'
          fullWidth
          placeholder='Codigo'
          value={property.code}
          onChange={(e) => handleChange('code', e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1}}>Tipo de operacion</Typography>

        <FormControl fullWidth>

          <Select
            value={property.operationType}
            onChange={(e) => handleChange('operationType', e.target.value)}
          >
            <MenuItem value='Venta'>Venta</MenuItem>
            <MenuItem value='Alquiler'>Alquiler</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {/*  */}
      <Grid item xs={12} md={4}>
        <Typography fontWeight='bold' sx={{mb: 1}}>Tipo de inmueble</Typography>

        <FormControl fullWidth>

          <Select
            value={property.propertyType}
            onChange={(e) => handleChange('propertyType', e.target.value)}
          >
            <MenuItem value='Apartamento'>Apartamento</MenuItem>
            <MenuItem value='Locales Comerciales'>Locales Comerciales</MenuItem>
            <MenuItem value='Galpones'>Galpones</MenuItem>
            <MenuItem value='Terrenos'>Terrenos</MenuItem>
            <MenuItem value='Oficinas'>Oficinas</MenuItem>
            <MenuItem value='Casa / Townhouse'>Casa / Townhouse</MenuItem>
            <MenuItem value='Fondos de Comercio'>Fondos de Comercio</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography fontWeight='bold' sx={{mb: 1}}>Tipo de mercado</Typography>

        <FormControl fullWidth>

          <Select
            value={property.propertyCondition}
            onChange={(e) => handleChange('propertyCondition', e.target.value)}
          >
            <MenuItem value='Mercado Primario'>Mercado Primario</MenuItem>
            <MenuItem value='Mercado Secundario'>Mercado Secundario</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={2}>
        <Typography fontWeight='bold' sx={{mb: 1}}>Metraje (Terreno)</Typography>
        <TextField
          color='secondary'
          fullWidth
          placeholder='Terreno'
          value={property.footageGround}
          InputProps={{
            endAdornment:
              <InputAdornment position="end">Mt2</InputAdornment>
          }}
          onChange={(e) => handleChange('footageGround', e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={2}>
        {
          property.propertyType !== 'Apartamento' &&
          <>
            <Typography fontWeight='bold' sx={{mb: 1}}>Metraje (Construc...)</Typography>
            <TextField
              color='secondary'
              fullWidth
              placeholder='Contstruccion'
              InputProps={{
                endAdornment:
                  <InputAdornment position="end">Mt2</InputAdornment>
              }}
              value={property.footageBuilding}
              onChange={(e) => handleChange('footageBuilding', e.target.value)}
              variant="outlined"
            />
          </>
        }
      </Grid>
      {/*  */}
      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1}}>Titulo de inmueble</Typography>
        <TextField
          color='secondary'
          disabled
          fullWidth
          placeholder='Tipo de inmueble + Operacion'
          value={property.propertyType + ' ' + property.operationType}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1}}>Precio de inmueble</Typography>
        <TextField
          color='secondary'
          fullWidth
          placeholder='Precio'
          value={property.price}
          onChange={(e) => handleChange('price', e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <Typography fontWeight='bold' sx={{mb: 1}}>Descripcion de inmueble</Typography>
        <TextField
          color='secondary'
          fullWidth
          multiline
          rows={5}
          placeholder='Descripcion de inmueble'
          value={property.description}
          onChange={(e) => handleChange('description', e.target.value)}
          variant="outlined"
        />
      </Grid>

    </Grid>
  )
}
