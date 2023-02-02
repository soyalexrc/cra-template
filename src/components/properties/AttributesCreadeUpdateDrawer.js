import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  IconButton,
  TextField
} from "@mui/material";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import useAttributes from "../../hooks/api/attributes/useAttributes";
import DeleteButton from "../shared/DeleteButton";
import {useState, useEffect} from 'react';

export default function ({open, closeAction, largeScreen, type, initialData, handleChange, fnAction}) {
  const {editAttribute, createAttribute, loading} = useAttributes();
  const [options, setOptions] = useState(null)

  useEffect(() => {
    if (initialData.propertyValues && initialData.property_values?.length > 0) {
      setOptions(initialData.property_values?.split('#'))
    } else {
      setOptions(['Opcion 1'])
  }
  }, [initialData])

  const pushOption = () => {
    setOptions(prevState => ([
      ...prevState,
      `Opcion ${options.length + 1}`,
    ]))
  }

  const handleChangeOptions = (index, value) => {
    const copyOptions = [...options];
    copyOptions[index] = value;
    setOptions(copyOptions);
  }

  const removeOption = (option) => {
    const copyOptions = [...options];
    const index = copyOptions.findIndex(x => x === option);
    copyOptions.splice(index, 1);
    setOptions(copyOptions);
  }

  return (
    <Drawer
      anchor='right'
      open={open}
      onClose={closeAction}
    >
      <Box sx={{width: largeScreen ? 600 : 365, height: '100%'}}>
        <Box p={2}>
          <Box display='flex' alignItems='center' justifyContent='space-between'>
            <Typography variant='h5' color='primary'>
              {type === 'create' ? 'Crear atributo' : 'Editar atributo'}
            </Typography>
            <IconButton onClick={closeAction}>
              <CloseIcon/>
            </IconButton>
          </Box>
          <Divider sx={{my: 2}}/>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4} sx={{display: 'flex', alignItems: 'flex-end'}}>
                <FormControl fullWidth>
                  <InputLabel>Tipo de inmueble</InputLabel>
                  <Select
                    color='secondary'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={initialData.property_type}
                    label="Tipo de inmueble"
                    onChange={(e => handleChange('property_type', e.target.value))}
                  >
                    <MenuItem value='Casa / Townhouse'>Casa / Townhouse</MenuItem>
                    <MenuItem value='Apartamento'>Apartamento</MenuItem>
                    <MenuItem value='Locales Comerciales'>Locales Comerciales</MenuItem>
                    <MenuItem value='Oficinas'>Oficinas</MenuItem>
                    <MenuItem value='Galpones'>Galpones</MenuItem>
                    <MenuItem value='Terrenos'>Terrenos</MenuItem>
                    <MenuItem value='Fondo de Comercio'>Fondo de Comercio</MenuItem>
                    <MenuItem value='VIP'>VIP</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4} sx={{display: 'flex', alignItems: 'flex-end'}}>
                <FormControl fullWidth>
                  <InputLabel>Tipo de Atributo</InputLabel>
                  <Select
                    color='secondary'
                    labelId="demo-simple-select-label-2"
                    value={initialData.form_type}
                    label="Tipo de atributo"
                    onChange={(e => handleChange('form_type', e.target.value))}
                  >
                    <MenuItem value='select'>Seleccion de opciones</MenuItem>
                    <MenuItem value='text'>Campo de texto</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  color='secondary'
                  sx={{mt: 2}}
                  placeholder='Nombre de atribuo'
                  value={initialData.label}
                  onChange={(e) => handleChange('label', e.target.value)}
                  label='Nombre de atribuo'
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Box display='flex' justifyContent='center'>
              <Divider sx={{my: 2, width: 300}}/>
            </Box>
            {
              initialData.form_type === 'text' &&
              <TextField
                fullWidth
                color='secondary'
                sx={{mt: 2}}
                placeholder='Placeholder'
                value={initialData.placeholder}
                onChange={(e) => handleChange('placeholder', e.target.value)}
                label='Placeholder'
                variant="outlined"
              />
            }
            {
              initialData.form_type === 'select' &&
              <Box>
                <Box display='flex' alignItems='center'>
                  <Typography variant='h6'>Opciones </Typography>
                  <IconButton color='secondary' sx={{mx: 2}} onClick={() => pushOption()}>
                    <AddIcon/>
                  </IconButton>
                </Box>
                {
                  options.map((option, index) => (
                    <Box key={index + 1} display='flex' alignItems='center'>
                      <TextField
                        color='secondary'
                        sx={{mt: 2}}
                        placeholder={`Opcion ${index + 1}`}
                        value={options[index]}
                        // label={`Opcion ${index + 1}`}
                        variant="outlined"
                        onChange={(e) => handleChangeOptions(index, e.target.value)}
                      />
                      <DeleteButton item={`opcion: ${option}`} onClick={() => removeOption(option)}/>
                    </Box>
                  ))
                }
              </Box>
            }
          </Box>
        </Box>
        <Box
          py={5}
          display='flex'
          justifyContent='center'
        >
          <Button
            disabled={loading}
            sx={{width: 200}}
            size='large'
            variant='contained'
            color='secondary'
            onClick={
            type === 'create'
              ? () => createAttribute(initialData, options, fnAction)
              : () => editAttribute(initialData, options, fnAction)}
          >
            {
              type === 'create'
                ? 'Crear'
                : 'Editar'
            }
          </Button>
        </Box>
      </Box>
    </Drawer>
  )
}
