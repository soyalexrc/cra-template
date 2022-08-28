import {Box, Container, Grid, Typography, useMediaQuery} from "@mui/material";
import deleteImg from "../../assets/img/delete-img.svg";

export default function DeleteMessage({msg}) {
  const largeScreen = useMediaQuery(theme => theme.breakpoints.up('md'));
  return (
    <Container
      sx={{
        height: '80vh',
        display: 'grid',
        placeItems: 'center'
      }}
      maxWidth='sm'
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} order={{xs: 2, sm: 1}}>
          <Box component='img' width={300} height={360} src={deleteImg}/>
        </Grid>
        <Grid item xs={12} sm={6} order={{xs: 1, sm: 2}} sx={{display: 'flex', alignItems: 'center'}}>
          <Typography align={!largeScreen ? 'center' : 'left'} variant='h4'>{msg}</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
