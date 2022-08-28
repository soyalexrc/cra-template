import {styled} from "@mui/material/styles";
import {
  Grid,
  Box,
  Typography,
  Container,
  useMediaQuery,
  Paper,
  TextField,
  InputAdornment,
  IconButton,
  ListItemButton,
  ListItemText
} from '@mui/material';
import Page from '../../components/Page'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SearchIcon from '@mui/icons-material/Search';
import empty from '../../assets/img/providers-empty.svg'
import {useNavigate} from 'react-router-dom';
import BottomMenu from "../../components/shared/BottomMenu";
import {useState} from 'react';
import client from '../../assets/icons/clients.svg';

const sampleData = [
  {id: 1, title: 'Proveedor BLA Cortinas'},
  {id: 2, title: 'Proveedor BLA Cortinas'},
  {id: 3, title: 'Proveedor BLA Cortinas'},
  {id: 4, title: 'Proveedor BLA Cortinas'},
  {id: 5, title: 'Proveedor BLA Cortinas'},
  {id: 6, title: 'Proveedor BLA Cortinas'},
  {id: 7, title: 'Proveedor BLA Cortinas'},
  {id: 8, title: 'Proveedor BLA Cortinas'},
  {id: 9, title: 'Proveedor BLA Cortinas'},
  {id: 10, title: 'Proveedor BLA Cortinas'},
  {id: 3, title: 'Proveedor BLA Cortinas'},
  {id: 4, title: 'Proveedor BLA Cortinas'},
  {id: 5, title: 'Proveedor BLA Cortinas'},
  {id: 6, title: 'Proveedor BLA Cortinas'},
  {id: 7, title: 'Proveedor BLA Cortinas'},
  {id: 8, title: 'Proveedor BLA Cortinas'},
  {id: 9, title: 'Proveedor BLA Cortinas'},
  {id: 10, title: 'Proveedor BLA Cortinas'},
]

const APP_BAR_MOBILE = 32;
const APP_BAR_DESKTOP = 44;

const RootStyle = styled(Page)(({theme}) => ({
  minHeight: "100%",
  overflowX: 'hidden',
  width: "100%",
  position: 'relative',
  paddingBottom: '7rem',
  paddingTop: APP_BAR_MOBILE,
  [theme.breakpoints.up("md")]: {
    paddingTop: APP_BAR_DESKTOP,
  },
}));

export default function ProvidersList() {
  const navigate = useNavigate();
  const largeScreen = useMediaQuery(theme => theme.breakpoints.up('md'));
  const [providers, setProviders] = useState(sampleData)

  return (
    <RootStyle title='Proveedores | Alishop'>
      {providers.length < 1 && <EmptyProviders largeScreen={largeScreen}/>}
      {
        providers && providers.length > 1 &&
        <Box display='flex' justifyContent='flex-end' my={2} width='100%'>
          <Paper sx={{ width: !largeScreen ? '100%' : 'auto' }}>
            <TextField
              fullWidth={!largeScreen}
              InputProps={{
                endAdornment:
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => {
                      }}
                      edge="end"
                    >
                      <SearchIcon/>
                    </IconButton>
                  </InputAdornment>,
              }}
              label="Buscar"
            />
          </Paper>
        </Box>
      }
      {
        providers && providers.length > 0 &&
        <Paper elevation={3}>
          <Grid container sx={{my: 1}}>
            {
              providers.map(provider => (
                <Grid key={provider.id} item xs={12} md={6} sx={{border: '1px solid #F0F0F0'}}>
                  <ListItemButton onClick={() => navigate('editar/sample')} sx={{p: 2}}>
                    <Box
                      width={40}
                      height={40}
                      sx={{
                        borderRadius: 100,
                        display: 'flex',
                        border: '1px solid #434F5F',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2
                      }}
                    >
                      <Box component='img' width='70%' height='70%' src={client}/>
                    </Box>
                    <ListItemText primary={provider.title}/>
                    <KeyboardArrowRightIcon/>
                  </ListItemButton>
                </Grid>
              ))
            }
          </Grid>
        </Paper>
      }
      <BottomMenu actions={[{label: 'Nuevo proveedor', fn: () => navigate('registrar'), main: true, disabled: false}]}/>
    </RootStyle>
  )
}

function EmptyProviders({largeScreen}) {
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
          <Box component='img' width={300} height={360} src={empty}/>
        </Grid>
        <Grid item xs={12} sm={6} order={{xs: 1, sm: 2}} sx={{display: 'flex', alignItems: 'center'}}>
          <Typography align={!largeScreen ? 'center' : 'left'} variant='h4'>Usted aún no registra
            proveedores</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}


