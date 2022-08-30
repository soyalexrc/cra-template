import {
  Box,
  LinearProgress,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  Button,
  TableHead,
  TableBody,
  Grid,
  Pagination, TextField, InputAdornment, IconButton, Paper, useMediaQuery, Collapse
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import {mockProperties} from '../../utils/mockData';
import {useState} from "react";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import {useNavigate} from 'react-router-dom'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {formatPrice} from "../../utils/format";
import {openWhatsApp} from '../../utils/helpers';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import DeleteButton from "../../components/shared/DeleteButton";
import noImage from '../../assets/img/no-image.jpg';

export default function PropertyList() {
  const largeScreen = useMediaQuery((theme) => theme.breakpoints.up('md'))
  const [data, setData] = useState(mockProperties.data);
  const [length, setLength] = useState(mockProperties.length);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Paper elevation={4} sx={{width: '100%', p: 2}}>
      <Box p={2}>
        <Box display='flex' alignItems='center' mb={2}>
          <Typography variant='h2'>Propiedades</Typography>
          <Typography sx={{mx: 2}} color='gray'>2 propiedades registradas</Typography>
        </Box>
        <Grid container>
          <Grid item xs={12} md={6}>
            <TextField
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)
              }
              sx={{width: '100%'}}
              id="search-textfield"
              placeholder="Buscar por nombre o email"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <SearchIcon/>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{display: 'flex', justifyContent: 'flex-end'}}>
            <Button fullWidth={!largeScreen} variant='contained' color='primary'
                    sx={{display: 'flex', mt: !largeScreen && 2}} onClick={() => navigate('crear')}>
              <AddIcon/>
              propiedad
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{width: '100%'}}>
        {loading && <LinearProgress/>}
      </Box>
      <TableContainer>
        <Table>
          <TableHead sx={{backgroundColor: theme => theme.palette.primary.main}}>
            <TableRow>
              <TableCell/>
              <TableCell sx={{color: '#fff', fontWeight: 'bold', width: '10%'}}>Imagen</TableCell>
              <TableCell sx={{color: '#fff', fontWeight: 'bold', width: '20%'}}>Inmueble</TableCell>
              <TableCell sx={{color: '#fff', fontWeight: 'bold', width: '20%'}}>Ubicacion</TableCell>
              <TableCell sx={{color: '#fff', fontWeight: 'bold', width: '10%'}}>Operacion</TableCell>
              <TableCell sx={{color: '#fff', fontWeight: 'bold', width: '10%'}}>Estatus <br/> Documentos</TableCell>
              <TableCell sx={{color: '#fff', fontWeight: 'bold', width: '10%'}}>Aliado</TableCell>
              <TableCell align='center' sx={{color: '#fff', fontWeight: 'bold', width: '20%'}}>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!loading && data && data.length > 0 && data.map((row) => (
              <Row key={row.id} row={row}/>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/*{loading && <Box sx={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center' }}><LoadingScreen /></Box>}*/}
      {
        (!data || data.length) < 1 &&
        <Box sx={{height: '50vh', display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center'}}>
          <Typography>No hay clientes pendientes...</Typography>
        </Box>
      }
      <Box sx={{display: 'flex', justifyContent: 'end', pt: 5}}>
        <Pagination
          boundaryCount={1}
          count={Math.round(length / 25)}
          defaultPage={1}
          onChange={handleChangePage}
          page={page}
          showFirstButton
          showLastButton
        />
      </Box>
    </Paper>
  )
}

function Row({row}) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <TableRow
        key={row.id}
        sx={{
          '&:last-child td, &:last-child th': {border: 0},
          transition: "background .2s",
          backgroundColor: open && 'rgba(0,0,0, 0.05)',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0, 0.05)'
          }
        }}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
          </IconButton>
        </TableCell>
        <TableCell>
          <Box component='img' src={row.image ? row.image : noImage} width={50} height={50} sx={{ borderRadius: 100 }} />
        </TableCell>
        <TableCell>
          <Typography >
            {row.inmueble}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography>
            {row.location}
          </Typography>
        </TableCell>
        <TableCell>
        <Typography>
            {row.operation}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography>
            {row.documentationStatus}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography>
            {row.ally}
          </Typography>
        </TableCell>
        <TableCell align='center'>
          <IconButton onClick={() => navigate('editar/user123')}>
            <EditIcon/>
          </IconButton>
          <IconButton onClick={() => alert('cambiar status')}>
            <AutorenewIcon />
          </IconButton>
          <DeleteButton item='Usuario: User123' onClick={() => alert('deleted')}/>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box m={1} display='flex' flexWrap='wrap' alignItems='center' justifyContent='space-evenly' width='100%'>
              <Box>
                <Typography fontWeight='bold'>Punta Asesor</Typography>
                <Typography>{row.asesor}</Typography>
              </Box>
              <Box>
                <Typography fontWeight='bold'>Capacitacion Externo</Typography>
                <Typography>{row.externalCapacitor}</Typography>
              </Box>
              <Box>
                <Typography fontWeight='bold'>Codigo de promocion</Typography>
                <Typography>{row.promotionStatus}</Typography>
              </Box>
              <Box>
                <Typography fontWeight='bold'>Codigo</Typography>
                <Typography>{row.code}</Typography>
              </Box>
              <Box>
                <Typography fontWeight='bold'>Estatus</Typography>
                <Typography>{row.status}</Typography>
              </Box>
              <Box>
                <Typography fontWeight='bold'>Precio</Typography>
                <Typography>{formatPrice(row.price)}</Typography>
              </Box>
              {/*<Grid container spacing={2}>*/}
                {/*<Grid item xs={12} sm={6} md={2}>*/}
                {/*  <Typography fontWeight='bold'>Punta Asesor</Typography>*/}
                {/*  <Typography>{row.asesor}</Typography>*/}
                {/*</Grid>*/}
                {/*<Grid item xs={12} sm={6} md={3}>*/}
                {/*  <Typography fontWeight='bold'>Capacitacion Externo</Typography>*/}
                {/*  <Typography>{row.externalCapacitor}</Typography>*/}
                {/*</Grid>*/}
                {/*<Grid item xs={12} sm={6} md={3}>*/}
                {/*  <Typography fontWeight='bold'>Codigo de promocion</Typography>*/}
                {/*  <Typography>{row.promotionStatus}</Typography>*/}
                {/*</Grid>*/}
                {/*<Grid item xs={12} sm={6} md={2}>*/}
                {/*  <Typography fontWeight='bold'>Codigo</Typography>*/}
                {/*  <Typography>{row.code}</Typography>*/}
                {/*/!*</Grid>*!/*/}
                {/*<Grid item xs={12} sm={6} md={3}>*/}
                {/*  <Typography fontWeight='bold'>Estatus</Typography>*/}
                {/*  <Typography>{row.status}</Typography>*/}
                {/*</Grid>*/}
              {/*  <Grid item xs={12} sm={6} md={2}>*/}
              {/*    <Typography fontWeight='bold'>Precio</Typography>*/}
              {/*    <Typography>{formatPrice(row.price)}</Typography>*/}
              {/*  </Grid>*/}
              {/*</Grid>*/}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}
