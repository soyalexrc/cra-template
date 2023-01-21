import {FormControl, Grid, MenuItem, Select, TextField, Typography, IconButton, Box} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {useState, useEffect} from 'react';
import useRegisterProperty from "../../../hooks/api/properties/useRegisterProperty";
import DeleteButton from "../../shared/DeleteButton";
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import ImagePreviewModal from "../ImagePreviewModal";
import {openExternalUrl} from "../../../utils/helpers";

export default function LegalDocumentsInformation({event}) {
  const {data, handleFilesData, updateFiles} = useRegisterProperty();
  const [openModal, setOpenModal] = useState(false);
  const [image, setImage] = useState('')

  const handleChange = (index, value) => {
    updateFiles(index, value);
  }

  const handleClick = (i) => {
    const el = document.getElementById(`inputRef${i}`)
    el.click();
  }

  const openPreview = (image) => {
    setImage(image);
    setOpenModal(true)
  }


  return (
    <Box>
      <Grid container spacing={4}>
        {
          data.files.map((file, index) => {
            if (file.type === 'text') {
              return (
                <Grid item xs={12} md={4}>
                  <Typography fontWeight='bold' sx={{mb: 1}} color='primary'>{file.label}</Typography>
                  <TextField
                    color='secondary'
                    fullWidth
                    placeholder='Año'
                    value={file.value}
                    onChange={(e) => handleChange(file.name, e.target.value)}
                    variant="outlined"
                  />
                  {
                    file.id &&
                    <Box display='flex' alignItems='center' justifyContent='space-between'>
                      <Box display='flex' alignItems='center'>
                        {
                          !file.id.includes('.pdf') &&
                          <Box sx={{cursor: 'pointer'}}
                               onClick={() => openPreview(`http://138.219.42.156:3000/images/${file.id}`)}
                               component='img' mr={2} src={`http://138.219.42.156:3000/images/${file.id}`} width={40}
                               height={40}/>

                        }
                        {
                          file.id.includes('.pdf') &&
                          <IconButton onClick={() => openExternalUrl(`http://138.219.42.156:3000/images/${file.id}`)}>
                            <DocumentScannerIcon />
                          </IconButton>
                        }
                        <Box><Typography fontWeight='bold' color='primary'>Evidencia</Typography></Box>
                      </Box>
                      <DeleteButton onClick={() => {
                      }} item={`Evidencia de ${file.label}`}/>
                    </Box>
                  }
                  <Box
                    mt={2}
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    height={50}
                    border='1px dotted lightgray'
                    onClick={() => handleClick(index)}
                    sx={{cursor: 'pointer', backgroundColor: theme => theme.palette.secondary.lighter}}
                  >
                    <input hidden id={`inputRef${index}`} accept="*" type="file"
                           onChange={(e) => handleFilesData(e, file)}/>
                    <Typography fontWeight='bold' color='secondary'>Adjuntar evidencia</Typography>
                  </Box>
                </Grid>
              )
            } else {
              return (
                <Grid item xs={12} md={4}>
                  <Typography fontWeight='bold' sx={{mb: 1}} color='primary'>{file.label}</Typography>
                  <FormControl fullWidth>
                    <Select
                      onChange={(e) => handleChange(file.name, e.target.value)}
                      value={file.value}
                    >
                      {
                        file.values.split('#').map(option => (
                          <MenuItem value={option}>{option}</MenuItem>
                        ))
                      }
                    </Select>
                  </FormControl>
                  {
                    file.id &&
                    <Box display='flex' alignItems='center' justifyContent='space-between'>
                      <Box display='flex' alignItems='center'>
                        {
                          !file.id.includes('.pdf') &&
                          <Box sx={{cursor: 'pointer'}}
                               onClick={() => openPreview(`http://138.219.42.156:3000/images/${file.id}`)}
                               component='img' mr={2} src={`http://138.219.42.156:3000/images/${file.id}`} width={40}
                               height={40}/>

                        }
                        {
                          file.id.includes('.pdf') &&
                          <IconButton onClick={() => openExternalUrl(`http://138.219.42.156:3000/images/${file.id}`)}>
                            <DocumentScannerIcon color='primary'/>
                          </IconButton>
                        }
                        <Box><Typography fontWeight='bold' color='primary'>Evidencia {file.id.includes('.pdf') ? '(PDF)' : "(IMAGEN)"}</Typography></Box>
                      </Box>
                      <DeleteButton onClick={() => {
                      }} item={`Evidencia de ${file.label}`}/>
                    </Box>
                  }
                  {
                    file.value === 'Si' &&
                    <Box
                      mt={2}
                      display='flex'
                      alignItems='center'
                      justifyContent='center'
                      height={50}
                      border='1px dotted lightgray'
                      onClick={() => handleClick(index)}
                      sx={{cursor: 'pointer', backgroundColor: theme => theme.palette.secondary.lighter}}
                    >
                      <input hidden id={`inputRef${index}`} accept="*" type="file"
                             onChange={(e) => handleFilesData(e, file)}/>
                      <Typography fontWeight='bold' color='secondary'>Adjuntar evidencia</Typography>
                    </Box>
                  }
                </Grid>
              )
            }
          })
        }
        {/*<Grid item xs={12} md={4}>*/}
        {/*  <Typography fontWeight='bold' sx={{ mb: 1 }} color='primary'>Cedula catastral</Typography>*/}
        {/*  <TextField*/}
        {/*    color='secondary'*/}
        {/*    fullWidth*/}
        {/*    placeholder='Año'*/}
        {/*    value={''}*/}
        {/*    // onChange={(e) => handleAttributeData(attr.id, e.target.value)}*/}
        {/*    variant="outlined"*/}
        {/*  />*/}
        {/*  <Box*/}
        {/*    mt={2}*/}
        {/*    display='flex'*/}
        {/*    alignItems='center'*/}
        {/*    justifyContent='center'*/}
        {/*    height={50}*/}
        {/*    border='1px dotted lightgray'*/}
        {/*    sx={{cursor: 'pointer', backgroundColor: theme => theme.palette.secondary.lighter}}*/}
        {/*  >*/}
        {/*    <Typography fontWeight='bold' color='secondary'>Adjuntar evidencia</Typography>*/}
        {/*  </Box>*/}
        {/*</Grid>*/}
        {/*<Grid item xs={12} md={4}>*/}
        {/*  <Typography fontWeight='bold' sx={{ mb: 1 }} color='primary'>Impuesto municipal</Typography>*/}
        {/*  <TextField*/}
        {/*    color='secondary'*/}
        {/*    fullWidth*/}
        {/*    placeholder='Año'*/}
        {/*    value=''*/}
        {/*    // onChange={(e) => handleAttributeData(attr.id, e.target.value)}*/}
        {/*    variant="outlined"*/}
        {/*  />*/}
        {/*  <Box*/}
        {/*    mt={2}*/}
        {/*    display='flex'*/}
        {/*    alignItems='center'*/}
        {/*    justifyContent='center'*/}
        {/*    height={50}*/}
        {/*    border='1px dotted lightgray'*/}
        {/*    sx={{cursor: 'pointer', backgroundColor: theme => theme.palette.secondary.lighter}}*/}
        {/*  >*/}
        {/*    <Typography fontWeight='bold' color='secondary'>Adjuntar evidencia</Typography>*/}
        {/*  </Box>*/}
        {/*</Grid>*/}
        {/*<Grid item xs={12} md={4}>*/}
        {/*  <Typography fontWeight='bold' sx={{ mb: 1 }} color='primary'>Es vivienda principal?</Typography>*/}
        {/*  <FormControl fullWidth>*/}
        {/*    <Select*/}
        {/*      value={''}*/}
        {/*    >*/}
        {/*      <MenuItem value='Si'>Si</MenuItem>*/}
        {/*      <MenuItem value='No'>No</MenuItem>*/}
        {/*    </Select>*/}
        {/*  </FormControl>*/}
        {/*  <Box*/}
        {/*    mt={2}*/}
        {/*    display='flex'*/}
        {/*    alignItems='center'*/}
        {/*    justifyContent='center'*/}
        {/*    height={50}*/}
        {/*    border='1px dotted lightgray'*/}
        {/*    sx={{cursor: 'pointer', backgroundColor: theme => theme.palette.secondary.lighter}}*/}
        {/*  >*/}
        {/*    <Typography fontWeight='bold' color='secondary'>Adjuntar evidencia</Typography>*/}
        {/*  </Box>*/}
        {/*</Grid>*/}
        {/*<Grid item xs={12} md={4}>*/}
        {/*  <Typography fontWeight='bold' sx={{ mb: 1 }} color='primary'>Documento de propiedad registrado</Typography>*/}
        {/*  <FormControl fullWidth>*/}
        {/*    <Select*/}
        {/*      value={''}*/}
        {/*    >*/}
        {/*      <MenuItem value='Si'>Si</MenuItem>*/}
        {/*      <MenuItem value='No'>No</MenuItem>*/}
        {/*    </Select>*/}
        {/*  </FormControl>*/}
        {/*  <Box*/}
        {/*    mt={2}*/}
        {/*    display='flex'*/}
        {/*    alignItems='center'*/}
        {/*    justifyContent='center'*/}
        {/*    height={50}*/}
        {/*    border='1px dotted lightgray'*/}
        {/*    sx={{cursor: 'pointer', backgroundColor: theme => theme.palette.secondary.lighter}}*/}
        {/*  >*/}
        {/*    <Typography fontWeight='bold' color='secondary'>Adjuntar evidencia</Typography>*/}
        {/*  </Box>*/}
        {/*</Grid>*/}
        {/*<Grid item xs={12} md={4}>*/}
        {/*  <Typography fontWeight='bold' sx={{ mb: 1 }} color='primary'>CI de propietario</Typography>*/}
        {/*  <FormControl fullWidth>*/}
        {/*    <Select*/}
        {/*      value={''}*/}
        {/*    >*/}
        {/*      <MenuItem value='Si'>Si</MenuItem>*/}
        {/*      <MenuItem value='No'>No</MenuItem>*/}
        {/*    </Select>*/}
        {/*  </FormControl>*/}
        {/*  <Box*/}
        {/*    mt={2}*/}
        {/*    display='flex'*/}
        {/*    alignItems='center'*/}
        {/*    justifyContent='center'*/}
        {/*    height={50}*/}
        {/*    border='1px dotted lightgray'*/}
        {/*    sx={{cursor: 'pointer', backgroundColor: theme => theme.palette.secondary.lighter}}*/}
        {/*  >*/}
        {/*    <Typography fontWeight='bold' color='secondary'>Adjuntar evidencia</Typography>*/}
        {/*  </Box>*/}
        {/*</Grid>*/}
        {/*<Grid item xs={12} md={4}>*/}
        {/*  <Typography fontWeight='bold' sx={{ mb: 1 }} color='primary'>CI de apoderado</Typography>*/}
        {/*  <FormControl fullWidth>*/}
        {/*    <Select*/}
        {/*      value={''}*/}
        {/*    >*/}
        {/*      <MenuItem value='Si'>Si</MenuItem>*/}
        {/*      <MenuItem value='No'>No</MenuItem>*/}
        {/*    </Select>*/}
        {/*  </FormControl>*/}
        {/*  <Box*/}
        {/*    mt={2}*/}
        {/*    display='flex'*/}
        {/*    alignItems='center'*/}
        {/*    justifyContent='center'*/}
        {/*    height={50}*/}
        {/*    border='1px dotted lightgray'*/}
        {/*    sx={{cursor: 'pointer', backgroundColor: theme => theme.palette.secondary.lighter}}*/}
        {/*  >*/}
        {/*    <Typography fontWeight='bold' color='secondary'>Adjuntar evidencia</Typography>*/}
        {/*  </Box>*/}
        {/*</Grid>*/}
        {/*<Grid item xs={12} md={4}>*/}
        {/*  <Typography fontWeight='bold' sx={{ mb: 1 }} color='primary'>Declaracion sucesorial</Typography>*/}
        {/*  <FormControl fullWidth>*/}
        {/*    <Select*/}
        {/*      value={''}*/}
        {/*    >*/}
        {/*      <MenuItem value='Por tramite '>Por trámite </MenuItem>*/}
        {/*      <MenuItem value='En proceso'>En proceso</MenuItem>*/}
        {/*      <MenuItem value='Se cuenta con los documentos completos '>Se cuenta con los documentos completos </MenuItem>*/}
        {/*      <MenuItem value='No aplica '>No aplica </MenuItem>*/}
        {/*    </Select>*/}
        {/*  </FormControl>*/}
        {/*  <Box*/}
        {/*    mt={2}*/}
        {/*    display='flex'*/}
        {/*    alignItems='center'*/}
        {/*    justifyContent='center'*/}
        {/*    height={50}*/}
        {/*    border='1px dotted lightgray'*/}
        {/*    sx={{cursor: 'pointer', backgroundColor: theme => theme.palette.secondary.lighter}}*/}
        {/*  >*/}
        {/*    <Typography fontWeight='bold' color='secondary'>Adjuntar evidencia</Typography>*/}
        {/*  </Box>*/}
        {/*</Grid>*/}
        {/*<Grid item xs={12} md={4}>*/}
        {/*  <Typography fontWeight='bold' sx={{ mb: 1 }} color='primary'>Hipoteca</Typography>*/}
        {/*  <FormControl fullWidth>*/}
        {/*    <Select*/}
        {/*      value={''}*/}
        {/*    >*/}
        {/*      <MenuItem value='Si '>Si </MenuItem>*/}
        {/*      <MenuItem value='No '>No </MenuItem>*/}
        {/*    </Select>*/}
        {/*  </FormControl>*/}
        {/*  <Box*/}
        {/*    mt={2}*/}
        {/*    display='flex'*/}
        {/*    alignItems='center'*/}
        {/*    justifyContent='center'*/}
        {/*    height={50}*/}
        {/*    border='1px dotted lightgray'*/}
        {/*    sx={{cursor: 'pointer', backgroundColor: theme => theme.palette.secondary.lighter}}*/}
        {/*  >*/}
        {/*    <Typography fontWeight='bold' color='secondary'>Adjuntar evidencia</Typography>*/}
        {/*  </Box>*/}
        {/*</Grid>*/}
        {/*<Grid item xs={12} md={4}>*/}
        {/*  <Typography fontWeight='bold' sx={{ mb: 1 }} color='primary'>Liberación de Hipoteca</Typography>*/}
        {/*  <FormControl fullWidth>*/}
        {/*    <Select*/}
        {/*      value={''}*/}
        {/*    >*/}
        {/*      <MenuItem value='Por tramite '>Por trámite </MenuItem>*/}
        {/*      <MenuItem value='En proceso'>En proceso</MenuItem>*/}
        {/*      <MenuItem value='Registrada'>Registrada</MenuItem>*/}
        {/*      <MenuItem value='Solo finiquito'>Solo finiquito</MenuItem>*/}
        {/*    </Select>*/}
        {/*  </FormControl>*/}
        {/*  <Box*/}
        {/*    mt={2}*/}
        {/*    display='flex'*/}
        {/*    alignItems='center'*/}
        {/*    justifyContent='center'*/}
        {/*    height={50}*/}
        {/*    border='1px dotted lightgray'*/}
        {/*    sx={{cursor: 'pointer', backgroundColor: theme => theme.palette.secondary.lighter}}*/}
        {/*  >*/}
        {/*    <Typography fontWeight='bold' color='secondary'>Adjuntar evidencia</Typography>*/}
        {/*  </Box>*/}
        {/*</Grid>*/}
        {/*<Grid item xs={12} md={4}>*/}
        {/*  <Typography fontWeight='bold' sx={{ mb: 1 }} color='primary'>Medida de prohibición para enajenar y gravar</Typography>*/}
        {/*  <FormControl fullWidth>*/}
        {/*    <Select*/}
        {/*      value={''}*/}
        {/*    >*/}
        {/*      <MenuItem value='Si '>Si </MenuItem>*/}
        {/*      <MenuItem value='No '>No </MenuItem>*/}
        {/*    </Select>*/}
        {/*  </FormControl>*/}
        {/*  <Box*/}
        {/*    mt={2}*/}
        {/*    display='flex'*/}
        {/*    alignItems='center'*/}
        {/*    justifyContent='center'*/}
        {/*    height={50}*/}
        {/*    border='1px dotted lightgray'*/}
        {/*    sx={{cursor: 'pointer', backgroundColor: theme => theme.palette.secondary.lighter}}*/}
        {/*  >*/}
        {/*    <Typography fontWeight='bold' color='secondary'>Adjuntar evidencia</Typography>*/}
        {/*  </Box>*/}
        {/*</Grid>*/}
        {/*<Grid item xs={12} md={4}>*/}
        {/*  <Typography fontWeight='bold' sx={{ mb: 1 }} color='primary'>Propietario presente para la firma</Typography>*/}
        {/*  <FormControl fullWidth>*/}
        {/*    <Select*/}
        {/*      value={''}*/}
        {/*    >*/}
        {/*      <MenuItem value='Si '>Si </MenuItem>*/}
        {/*      <MenuItem value='No '>No </MenuItem>*/}
        {/*    </Select>*/}
        {/*  </FormControl>*/}
        {/*  <Box*/}
        {/*    mt={2}*/}
        {/*    display='flex'*/}
        {/*    alignItems='center'*/}
        {/*    justifyContent='center'*/}
        {/*    height={50}*/}
        {/*    border='1px dotted lightgray'*/}
        {/*    sx={{cursor: 'pointer', backgroundColor: theme => theme.palette.secondary.lighter}}*/}
        {/*  >*/}
        {/*    <Typography fontWeight='bold' color='secondary'>Adjuntar evidencia</Typography>*/}
        {/*  </Box>*/}
        {/*</Grid>*/}
        {/*<Grid item xs={12} md={4}>*/}
        {/*  <Typography fontWeight='bold' sx={{ mb: 1 }} color='primary'>Poder</Typography>*/}
        {/*  <FormControl fullWidth>*/}
        {/*    <Select*/}
        {/*      value={''}*/}
        {/*    >*/}
        {/*      <MenuItem value='Si '>Si </MenuItem>*/}
        {/*      <MenuItem value='No '>No </MenuItem>*/}
        {/*    </Select>*/}
        {/*  </FormControl>*/}
        {/*  <Box*/}
        {/*    mt={2}*/}
        {/*    display='flex'*/}
        {/*    alignItems='center'*/}
        {/*    justifyContent='center'*/}
        {/*    height={50}*/}
        {/*    border='1px dotted lightgray'*/}
        {/*    sx={{cursor: 'pointer', backgroundColor: theme => theme.palette.secondary.lighter}}*/}
        {/*  >*/}
        {/*    <Typography fontWeight='bold' color='secondary'>Adjuntar evidencia</Typography>*/}
        {/*  </Box>*/}
        {/*</Grid>*/}
        {/*<Grid item xs={12} md={4}>*/}
        {/*  <Typography fontWeight='bold' sx={{ mb: 1 }} color='primary'>Firma Cónyuge</Typography>*/}
        {/*  <FormControl fullWidth>*/}
        {/*    <Select*/}
        {/*      value={''}*/}
        {/*    >*/}
        {/*      <MenuItem value='Si '>Si </MenuItem>*/}
        {/*      <MenuItem value='No '>No </MenuItem>*/}
        {/*    </Select>*/}
        {/*  </FormControl>*/}
        {/*  <Box*/}
        {/*    mt={2}*/}
        {/*    display='flex'*/}
        {/*    alignItems='center'*/}
        {/*    justifyContent='center'*/}
        {/*    height={50}*/}
        {/*    border='1px dotted lightgray'*/}
        {/*    sx={{cursor: 'pointer', backgroundColor: theme => theme.palette.secondary.lighter}}*/}
        {/*  >*/}
        {/*    <Typography fontWeight='bold' color='secondary'>Adjuntar evidencia</Typography>*/}
        {/*  </Box>*/}
        {/*</Grid>*/}
        {/*<Grid item xs={12} md={4}>*/}
        {/*  <Typography fontWeight='bold' sx={{ mb: 1 }} color='primary'>Solvencia de condominio</Typography>*/}
        {/*  <FormControl fullWidth>*/}
        {/*    <Select*/}
        {/*      value={''}*/}
        {/*    >*/}
        {/*      <MenuItem value='Si '>Si </MenuItem>*/}
        {/*      <MenuItem value='No '>No </MenuItem>*/}
        {/*    </Select>*/}
        {/*  </FormControl>*/}
        {/*  <Box*/}
        {/*    mt={2}*/}
        {/*    display='flex'*/}
        {/*    alignItems='center'*/}
        {/*    justifyContent='center'*/}
        {/*    height={50}*/}
        {/*    border='1px dotted lightgray'*/}
        {/*    sx={{cursor: 'pointer', backgroundColor: theme => theme.palette.secondary.lighter}}*/}
        {/*  >*/}
        {/*    <Typography fontWeight='bold' color='secondary'>Adjuntar evidencia</Typography>*/}
        {/*  </Box>*/}
        {/*</Grid>*/}
        {/*<Grid item xs={12} md={4}>*/}
        {/*  <Typography fontWeight='bold' sx={{ mb: 1 }} color='primary'>Solvencia de servicios</Typography>*/}
        {/*  <FormControl fullWidth>*/}
        {/*    <Select*/}
        {/*      value={''}*/}
        {/*    >*/}
        {/*      <MenuItem value='Si '>Si </MenuItem>*/}
        {/*      <MenuItem value='No '>No </MenuItem>*/}
        {/*    </Select>*/}
        {/*  </FormControl>*/}
        {/*  <Box*/}
        {/*    mt={2}*/}
        {/*    display='flex'*/}
        {/*    alignItems='center'*/}
        {/*    justifyContent='center'*/}
        {/*    height={50}*/}
        {/*    border='1px dotted lightgray'*/}
        {/*    sx={{cursor: 'pointer', backgroundColor: theme => theme.palette.secondary.lighter}}*/}
        {/*  >*/}
        {/*    <Typography fontWeight='bold' color='secondary'>Adjuntar evidencia</Typography>*/}
        {/*  </Box>*/}
        {/*</Grid>*/}
        {/*<Grid item xs={12} >*/}
        {/*  <Divider xs={{ my: 2 }} />*/}
        {/*</Grid>*/}
        {/*<Grid item xs={12} md={4}>*/}
        {/*  <Typography fontWeight='bold' sx={{ mb: 1 }} color='primary'>Ficha tecnica</Typography>*/}
        {/*  <Box*/}
        {/*    mt={2}*/}
        {/*    display='flex'*/}
        {/*    alignItems='center'*/}
        {/*    justifyContent='center'*/}
        {/*    height={50}*/}
        {/*    border='1px dotted lightgray'*/}
        {/*    sx={{cursor: 'pointer', backgroundColor: theme => theme.palette.secondary.lighter}}*/}
        {/*  >*/}
        {/*    <Typography fontWeight='bold' color='secondary'>Adjuntar evidencia</Typography>*/}
        {/*  </Box>*/}
        {/*</Grid>*/}


        {/*<Grid item xs={12} md={4}>*/}
        {/*  <Typography fontWeight='bold' sx={{ mb: 1 }} color='primary'>Titulo de propiedad</Typography>*/}

        {/*  <Box*/}
        {/*    mt={2}*/}
        {/*    display='flex'*/}
        {/*    alignItems='center'*/}
        {/*    justifyContent='center'*/}
        {/*    height={50}*/}
        {/*    border='1px dotted lightgray'*/}
        {/*    sx={{cursor: 'pointer', backgroundColor: theme => theme.palette.secondary.lighter}}*/}
        {/*  >*/}
        {/*    <Typography fontWeight='bold' color='secondary'>Adjuntar evidencia</Typography>*/}
        {/*  </Box>*/}
        {/*</Grid>*/}
        {/*<Grid item xs={12} md={4}>*/}
        {/*  <Typography fontWeight='bold' sx={{ mb: 1 }} color='primary'>Cedula de propietario</Typography>*/}

        {/*  <Box*/}
        {/*    mt={2}*/}
        {/*    display='flex'*/}
        {/*    alignItems='center'*/}
        {/*    justifyContent='center'*/}
        {/*    height={50}*/}
        {/*    border='1px dotted lightgray'*/}
        {/*    sx={{cursor: 'pointer', backgroundColor: theme => theme.palette.secondary.lighter}}*/}
        {/*  >*/}
        {/*    <Typography fontWeight='bold' color='secondary'>Adjuntar evidencia</Typography>*/}
        {/*  </Box>*/}
        {/*</Grid>*/}
        {/*<Grid item xs={12}>*/}
        {/*  <Typography variant='h6'>Otros</Typography>*/}
        {/*</Grid>*/}

        {/*<Grid item xs={12} md={2}>*/}

        {/*  <Box*/}
        {/*    mt={2}*/}
        {/*    display='flex'*/}
        {/*    alignItems='center'*/}
        {/*    justifyContent='center'*/}
        {/*    height={50}*/}
        {/*    border='1px dotted lightgray'*/}
        {/*    sx={{cursor: 'pointer', backgroundColor: theme => theme.palette.secondary.lighter}}*/}
        {/*  >*/}
        {/*    <Typography fontWeight='bold' color='secondary'>Adjuntar evidencia</Typography>*/}
        {/*  </Box>*/}
        {/*</Grid>*/}
      </Grid>
      <ImagePreviewModal image={image} setOpen={setOpenModal} open={openModal}/>
    </Box>

  )
}
