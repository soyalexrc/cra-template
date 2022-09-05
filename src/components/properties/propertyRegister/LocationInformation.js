import {FormControl, Grid, MenuItem, Select, TextField, Typography, Autocomplete, Box} from "@mui/material";

export default function LocationInformation({data, handleChange, users}) {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1 }}>Pais</Typography>

        <FormControl fullWidth >

          <Select
            value='Venezuela'
            onChange={(e) => handleChange('country', e.target.value)}
          >
            <MenuItem value='Venezuela'>Venezuela</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1 }}>Estado</Typography>

        <FormControl fullWidth >

          <Select
            value='Carabobo'
            onChange={(e) => handleChange('state', e.target.value)}
          >
            <MenuItem value='Carabobo'>Carabobo</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1 }}>Municipio</Typography>

        <FormControl fullWidth >

          <Select
            value='Naguanagua'
            onChange={(e) => handleChange('municipality', e.target.value)}
          >
            <MenuItem value='Naguanagua'>Naguanagua</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1 }}>Urbanizacion / Sector</Typography>

        <FormControl fullWidth >

          <Select
            value='La campina'
            onChange={(e) => handleChange('urbanization', e.target.value)}
          >
            <MenuItem value='La campina'>La campina</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {/*  */}
      <Grid item xs={12} md={6}>
        <Typography fontWeight='bold' sx={{mb: 1 }}>Avenida</Typography>

        <TextField
          color='secondary'
          fullWidth
          placeholder='Avenida'
          value={''}
          onChange={(e) => handleChange('footageGround', e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography fontWeight='bold' sx={{mb: 1 }}>Calle</Typography>

        <TextField
          color='secondary'
          fullWidth
          placeholder='Calle'
          value={''}
          onChange={(e) => handleChange('footageGround', e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <Typography fontWeight='bold' sx={{mb: 1 }}>Es calle cerrada ?</Typography>

        <FormControl fullWidth >

          <Select
            value='Si'
            onChange={(e) => handleChange('closedStreet', e.target.value)}
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
            value='A pie de calle'
            onChange={(e) => handleChange('closedStreet', e.target.value)}
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
          value={''}
          onChange={(e) => handleChange('footageGround', e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <Typography fontWeight='bold' sx={{mb: 1 }}>Piso</Typography>

        <TextField
          color='secondary'
          fullWidth
          placeholder='Piso'
          value={''}
          onChange={(e) => handleChange('footageGround', e.target.value)}
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
          value={''}
          onChange={(e) => handleChange('description', e.target.value)}
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
          value={''}
          onChange={(e) => handleChange('footageGround', e.target.value)}
          variant="outlined"
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1 }}>Numero de estacionamiento</Typography>
        <TextField
          color='secondary'
          fullWidth
          placeholder='Numero de estacionamiento'
          value={'15.000.000'}
          onChange={(e) => handleChange('propertyTitle', e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={3}>

        <Typography fontWeight='bold' sx={{mb: 1 }}>Numero de maletero</Typography>
        <TextField
          color='secondary'
          fullWidth
          placeholder='Numero de maletero'
          value={'15.000.000'}
          onChange={(e) => handleChange('propertyTitle', e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1 }}>Nivel de estacionamiento</Typography>
        <TextField
          color='secondary'
          fullWidth
          placeholder='Nivel de estacionamiento'
          value={'15.000.000'}
          onChange={(e) => handleChange('propertyTitle', e.target.value)}
          variant="outlined"
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <Typography fontWeight='bold' sx={{mb: 1 }}>Nivel de maletero</Typography>
        <TextField
          color='secondary'
          fullWidth
          placeholder='Nivel de maletero'
          value={'15.000.000'}
          onChange={(e) => handleChange('propertyTitle', e.target.value)}
          variant="outlined"
        />
      </Grid>

    </Grid>
  )
}
