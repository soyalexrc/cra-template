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
import {useState, useEffect} from "react";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import {useNavigate} from 'react-router-dom'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {formatPrice} from "../../utils/format";
import {formatNumber, openWhatsApp} from '../../utils/helpers';
import DeleteButton from "../../components/shared/DeleteButton";
import Page from "../../components/Page";
import useGetUsers from "../../hooks/api/users/useGetUsers";
import useDeleteUser from "../../hooks/api/users/useDeleteUser";

export default function UserList() {
  const largeScreen = useMediaQuery((theme) => theme.breakpoints.up('md'))
  const navigate = useNavigate();
  const {users, loading, getUsers} = useGetUsers();
  const { loading: deleteLoading, deleteUser} = useDeleteUser();
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('')

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <Page title='Usuarios | Vision Inmobiliaria'>
      <Paper elevation={4} sx={{width: '100%', p: 2}}>
        <Box p={2}>
          <Box display='flex' alignItems='center' mb={2}>
            <Typography variant='h2'>Usuarios</Typography>
            <Typography sx={{mx: 2}} color='gray'>{users.length} usuarios registrados</Typography>
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
                Usuario
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{width: '100%'}}>
          {loading && <LinearProgress/>}
        </Box>
        <TableContainer>
          <Table>
            <TableHead sx={{backgroundColor: '#eaeaea'}}>
              <TableRow>
                <TableCell sx={{color: theme => theme.palette.common.black, fontWeight: 'bold'}}>Usuario</TableCell>
                <TableCell sx={{color: theme => theme.palette.common.black, fontWeight: 'bold'}}>Nombre</TableCell>
                <TableCell sx={{color: theme => theme.palette.common.black, fontWeight: 'bold'}}>Celular</TableCell>
                <TableCell sx={{color: theme => theme.palette.common.black, fontWeight: 'bold'}}>Email</TableCell>
                <TableCell align='center'
                           sx={{color: theme => theme.palette.common.black, fontWeight: 'bold'}}>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!loading && users && users.length > 0 && users.slice(page * 10, page * 10 + 10).map((row) => (
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
                  <TableCell>{row.username}</TableCell>
                  <TableCell>{row.first_name} {row.last_name}</TableCell>
                  <TableCell>
                    <Box>
                      <Box display='flex' alignItems='center' mb={row.phone_number2 && 2}>
                        <Box display='flex' alignItems='center' onClick={() => openWhatsApp(row.phone_number1)}
                             sx={{cursor: 'pointer'}}>
                          <WhatsAppIcon sx={{mx: 1}} fontSize='small' color='secondary'/>
                          <Typography color='secondary' sx={{'&:hover': {textDecoration: 'underline'}}}>
                            {row.phone_number1}
                          </Typography>
                        </Box>
                      </Box>
                      {
                        row.phone_number2 &&
                        <Box display='flex' alignItems='center'>
                          <Box display='flex' alignItems='center' onClick={() => openWhatsApp(row.phone_number1)}
                               sx={{cursor: 'pointer'}}>
                            <WhatsAppIcon sx={{mx: 1}} fontSize='small' color='secondary'/>
                            <Typography color='secondary' sx={{'&:hover': {textDecoration: 'underline'}}}>
                              {row.phone_number2}
                            </Typography>
                          </Box>
                        </Box>
                      }
                    </Box>

                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell align='center'>
                    <Box display='flex'>
                      <IconButton onClick={() => navigate(`editar/${row.id}`)}>
                        <EditIcon/>
                      </IconButton>
                      <DeleteButton item={`Usuario: ${row.username}`} onClick={() => deleteUser(row.id, () => getUsers())}/>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/*{loading && <Box sx={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center' }}><LoadingScreen /></Box>}*/}
        {
          (!users || users.length) < 1 &&
          <Box sx={{height: '50vh', display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center'}}>
            <Typography>No se encontraron usuarios...</Typography>
          </Box>
        }
        <Box sx={{display: 'flex', justifyContent: 'end', pt: 5}}>
          <Pagination
            boundaryCount={1}
            count={Math.round(users.length / 10)}
            rowsPerPage={10}
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
