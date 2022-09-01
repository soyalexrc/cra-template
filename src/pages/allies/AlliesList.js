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
  Pagination, TextField, InputAdornment, IconButton, Paper, useMediaQuery
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import {mockUserTable} from '../../utils/mockData';
import {useState} from "react";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from 'react-router-dom'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {formatPrice} from "../../utils/format";
import { openWhatsApp } from '../../utils/helpers';
import DeleteButton from "../../components/shared/DeleteButton";
import Page from "../../components/Page";

export default function AlliesList() {
  const largeScreen = useMediaQuery((theme) => theme.breakpoints.up('md'))
  const navigate = useNavigate();
  const [data, setData] = useState(mockUserTable.data);
  const [length, setLength] = useState(mockUserTable.length);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('')

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Page title='Aliados | Vision Inmobiliaria'>
      <Paper elevation={4} sx={{width: '100%', p: 2}}>
        <Box p={2}>
          <Box display='flex' alignItems='center' mb={2}>
            <Typography variant='h2'>Aliados</Typography>
            <Typography sx={{mx: 2}} color='gray'>2 aliados registrados</Typography>
          </Box>
          <Grid container>
            <Grid item xs={12} md={6}>
              <TextField
                value={searchTerm}
                onChange={(e) => setSearchTerm( e.target.value)
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
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button fullWidth={!largeScreen} variant='contained' color='primary' sx={{display: 'flex', mt: !largeScreen && 2}} onClick={() => navigate('crear')}>
                <AddIcon/>
                Aliado
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{width: '100%'}}>
          {loading && <LinearProgress/>}
        </Box>
        <TableContainer>
          <Table>
            <TableHead sx={{ backgroundColor: theme => theme.palette.primary.main}}>
              <TableRow>
                <TableCell sx={{color: '#fff', fontWeight: 'bold'}}>Usuario</TableCell>
                <TableCell sx={{color: '#fff', fontWeight: 'bold'}}>Nombre</TableCell>
                <TableCell sx={{color: '#fff', fontWeight: 'bold'}}>Celular / WhatsApp</TableCell>
                <TableCell sx={{color: '#fff', fontWeight: 'bold'}}>Email</TableCell>
                <TableCell align='center' sx={{color: '#fff', fontWeight: 'bold'}}>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!loading && data && data.length > 0 && data.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{
                    '&:last-child td, &:last-child th': {border: 0},
                    transition: "background .2s",
                    '&:hover': {
                      backgroundColor: 'rgba(0,0,0, 0.05)'
                    }
                  }}
                >
                  <TableCell>User123</TableCell>
                  <TableCell sx={{ cursor: 'pointer'}}>{row.name}</TableCell>
                  <TableCell>
                    <Box display='flex' alignItems='center' onClick={() => openWhatsApp(row.phone)} sx={{ cursor: 'pointer' }}>
                      <Box display='flex' alignItems='center' onClick={() => openWhatsApp(row.phone)} sx={{ cursor: 'pointer' }}>
                        <WhatsAppIcon sx={{ mx: 1 }} fontSize='small' color='secondary'/>
                        <Typography color='secondary' sx={{ '&:hover': { textDecoration: 'underline' } }}>
                          {row.phone}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell align='center'>
                    <IconButton onClick={() => navigate('editar/user123')}>
                      <EditIcon />
                    </IconButton>
                    <DeleteButton item='Usuario: User123' onClick={() => alert('deleted')} />
                  </TableCell>
                </TableRow>
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
    </Page>
  )
}
