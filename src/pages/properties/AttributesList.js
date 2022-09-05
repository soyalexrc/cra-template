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
import DeleteButton from "../../components/shared/DeleteButton";
import AttributesCreadeUpdateDrawer from "../../components/properties/AttributesCreadeUpdateDrawer";
import useAttributes from "../../hooks/api/attributes/useAttributes";
import useDebounce from "../../hooks/useDebounce";

export default function AttributesList() {
  const largeScreen = useMediaQuery((theme) => theme.breakpoints.up('md'))
  const navigate = useNavigate();
  const { getAttributes, attributes, loading, deleteAttribute } = useAttributes();
  const [filteredData, setFilteredData] = useState(attributes);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [openDrawer, setOpenDrawer] = useState(false)
  const [operationType, setOperationType] = useState('create')
  const [initialData, setInitialData ] = useState({
    category: 'Custom',
    form_type: '',
    label: '',
    placeholder: '',
    property_type: '',
    property_values: ''
  })

  useEffect(() => {
    getAttributes();
  }, [])


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  function fnAction() {
    setOpenDrawer(false);
    getAttributes()
  }

  function handleCreateAttribute() {
    setOperationType('create');
    setInitialData({
      category: 'Custom',
      form_type: '',
      label: '',
      placeholder: '',
      property_type: '',
      property_values: ''
    });
    setOpenDrawer(true);
  }

  function handleUpdateAttribute(attr) {
    setInitialData(attr);
    setOperationType('update');
    setOpenDrawer(true);
  }

  const handleAttrChanges = (index, value) => {
    setInitialData(prevState => ({
      ...prevState,
      [index]: value,
    }))
  }
  // useEffect(() => {
  //   if (debouncedSearchTerm) {
  //     console.log(searchTerm);
  //     console.log(attributes.filter(x => x.label.replace(':', '').toLowerCase().includes(searchTerm.toLowerCase())))
  //     setFilteredData(attributes.filter(x => x.label.replace(':', '').toLowerCase().includes(searchTerm.toLowerCase())))
  //   }
  // }, [debouncedSearchTerm])

  return (
    <Paper elevation={4} sx={{width: '100%', p: 2}}>
      <Box p={2}>
        <Box display='flex' alignItems='center' mb={2} flexWrap='wrap'>
          <Typography variant='h2'>Atributos</Typography>
          <Typography sx={{mx: largeScreen && 2}} color='gray'>{attributes.length} atributos registrados</Typography>
        </Box>
        <Grid container>
          <Grid item xs={12} md={6}>
            <TextField
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)
              }
              sx={{width: '100%'}}
              id="search-textfield"
              placeholder="Buscar por nombre"
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
                    sx={{display: 'flex', mt: !largeScreen && 2}} onClick={handleCreateAttribute}>
              <AddIcon/>
              Atributo
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
              <TableCell sx={{color: theme => theme.palette.common.black, fontWeight: 'bold',}}>Categoria</TableCell>
              <TableCell sx={{color: theme => theme.palette.common.black, fontWeight: 'bold',}}>Tipo de formulario</TableCell>
              <TableCell sx={{color: theme => theme.palette.common.black, fontWeight: 'bold',}}>Atributo</TableCell>
              <TableCell align='center' sx={{color: theme => theme.palette.common.black, fontWeight: 'bold',}}>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!loading && attributes && attributes.length > 0 && attributes.slice(page * 10, page * 10 + 10).map((row) => (
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
                <TableCell>
                  <Typography>
                    {row.property_type}
                  </Typography>
                </TableCell>
                <TableCell>
                 <Typography>
                   {row.form_type}
                 </Typography>
                </TableCell>
                <TableCell>
                  <Typography>
                    {row.label.replace(':', '')}
                  </Typography>
                </TableCell>
                <TableCell align='center'>
                  <Box display='flex'>
                    <IconButton onClick={() => handleUpdateAttribute(row)}>
                      <EditIcon/>
                    </IconButton>
                    <DeleteButton item={`Atributo: ${row.label}`} onClick={() => deleteAttribute(row.id, () => getAttributes())}/>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/*{loading && <Box sx={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center' }}><LoadingScreen /></Box>}*/}
      {
        (!attributes || attributes.length) < 1 &&
        <Box sx={{height: '50vh', display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center'}}>
          <Typography>No se encontraron atributos...</Typography>
        </Box>
      }
      <Box sx={{display: 'flex', justifyContent: 'end', pt: 5}}>
        <Pagination
          boundaryCount={1}
          count={Math.round(attributes.length / 10)}
          defaultPage={1}
          onChange={handleChangePage}
          page={page}
          showFirstButton
          showLastButton
        />
      </Box>
      <AttributesCreadeUpdateDrawer
        closeAction={() => setOpenDrawer(false)}
        open={openDrawer}
        handleChange={handleAttrChanges}
        largeScreen={largeScreen}
        initialData={initialData}
        fnAction={() => fnAction()}
        type={operationType}
      />
    </Paper>
  )
}
