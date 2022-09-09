import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Divider,
  IconButton,
  useMediaQuery,
  Typography, Grid
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'

import download from '../../assets/img/status-config.png';
import SmallLoading from "../SmallLoading";

export default function PreviewModal({setOpen, open, data, loading}) {
  const fullScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
  console.log(data);
  console.log(loading);

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="responsive-dialog-title"
    >
      <Box display='flex' justifyContent='flex-end' p={2}>
        <IconButton>
          <CloseIcon onClick={() => setOpen(false)}/>
        </IconButton>
      </Box>
      {
        loading &&
        <SmallLoading/>
      }
      {!loading && data &&
        <>
          <DialogContent sx={{padding: '1rem 3rem'}}>
            <Typography variant='h1'
                        color='primary'>{data.property.propertyType} {data.property.operationType}</Typography>
            <Box my={4} display='flex' flexWrap='wrap' justifyContent='center'>
              {
                data.images.length < 1 &&
                <Typography>No hay imagenes disponibles...</Typography>
              }
              {
                data.images.length > 0 && data.images.map(image => (
                  <Box m={2} width={200} height={200} border='1px solid lightgray'/>
                ))
              }
            </Box>
            <Divider sx={{my: 2, borderWidth: '2px'}}/>
            <Box display='flex' justifyContent='space-between' flexWrap='wrap'>
              <Box>
                <Typography variant='h5' color='secondary'>Descripcion</Typography>
                <Typography>{data.property.description}</Typography>
              </Box>
              <Box>
                <Typography variant='h5' color='secondary'>Precio</Typography>
                <Typography>$ {data.property.price}</Typography>
              </Box>
            </Box>
            <Box my={2}>
              <Typography variant='caption'>El precio de este inmueble y sus modificaciones son establecidas por su
                propietario.</Typography>
            </Box>
            <Divider sx={{my: 2, borderWidth: '2px'}}/>
            <Box>
              <Typography sx={{mb: 3}} variant='h5' color='secondary'>Datos generales</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                  <Typography fontWeight='bold'>Tipo de mercado</Typography>
                  <Typography>{data.property.propertyCondition}</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Typography fontWeight='bold'>m² de terreno</Typography>
                  <Typography>{data.property.footageGround}</Typography>
                </Grid>
                {
                  data.property.footageBuilding &&
                  <Grid item xs={12} sm={6} md={3}>
                    <Typography fontWeight='bold'>m² de construccion</Typography>
                    <Typography>{data.property.footageBuilding}</Typography>
                  </Grid>
                }
                <Grid item xs={12} sm={6} md={3}>
                  <Typography fontWeight='bold'>Estacionamientos</Typography>
                  <Typography>{data.location.parkingNumber}</Typography>
                </Grid>
              </Grid>
            </Box>
            <Divider sx={{my: 2, borderWidth: '2px'}}/>
            <Box>
              <Typography sx={{mb: 3}} variant='h5' color='secondary'>Ubicacion</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                  <Typography fontWeight='bold'>Pais</Typography>
                  <Typography>{data.location.country}</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Typography fontWeight='bold'>Estado</Typography>
                  <Typography>{data.location.state}</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Typography fontWeight='bold'>Municipio</Typography>
                  <Typography>{data.location.city}</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Typography fontWeight='bold'>Urbanizacion</Typography>
                  <Typography>{data.location.municipality}</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Typography fontWeight='bold'>Punto de referencia</Typography>
                  <Typography>{data.location.referencePoint}</Typography>
                </Grid>
              </Grid>
            </Box>
            <Divider sx={{my: 2, borderWidth: '2px'}}/>
            <Box>
              <Typography sx={{mb: 3}} variant='h5' color='secondary'>Caracteristicas generales</Typography>
              <Grid container spacing={2}>
                {
                  data.attributes.filter(x => x.category === 'General').length > 0 && data.attributes.filter(x => x.category === 'General').map(item => (
                    <Grid item xs={12} sm={6} md={3}>
                      <Typography fontWeight='bold'>{item.label}</Typography>
                      <Typography>{item.value}</Typography>
                    </Grid>
                  ))
                }
              </Grid>
              <Divider sx={{ my: 2, borderWidth: '2px' }} />
              <Typography sx={{mb: 3}} variant='h5' color='secondary'>Caracteristicas  de la residencia</Typography>
              <Grid container spacing={2}>
                {
                  data.attributes.filter(x => x.category === 'Property').length > 0 && data.attributes.filter(x => x.category === 'Property').map(item => (
                    <Grid item xs={12} sm={6} md={3}>
                      <Typography fontWeight='bold'>{item.label}</Typography>
                      <Typography>{item.value}</Typography>
                    </Grid>
                  ))
                }
              </Grid>
              <Divider sx={{ my: 2, borderWidth: '2px' }} />
              <Typography sx={{mb: 3}} variant='h5' color='secondary'>Lo que incluye la negociación del inmueble</Typography>
              <Grid container spacing={2}>
                {
                  data.attributes.filter(x => x.category === 'Furniture').length > 0 && data.attributes.filter(x => x.category === 'Furniture').map(item => (
                    <Grid item xs={12} sm={6} md={3}>
                      <Typography fontWeight='bold'>{item.label}</Typography>
                      <Typography>{item.value}</Typography>
                    </Grid>
                  ))
                }
              </Grid>
              <Divider sx={{ my: 2, borderWidth: '2px' }} />
              <Typography sx={{mb: 3}} variant='h5' color='secondary'>Otras caracteristicas</Typography>
              <Grid container spacing={2}>
                {
                  data.attributes.filter(x => x.category === 'Custom').length > 0 && data.attributes.filter(x => x.category === 'Custom').map(item => (
                    <Grid item xs={12} sm={6} md={3}>
                      <Typography fontWeight='bold'>{item.label}</Typography>
                      <Typography>{item.value}</Typography>
                    </Grid>
                  ))
                }
              </Grid>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button variant='contained' fullWidth onClick={() => setOpen(false)}>
              Cerrar
            </Button>
          </DialogActions>
        </>
      }
    </Dialog>
  )
}
