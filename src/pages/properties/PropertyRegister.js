import {Button, Box, Typography, useMediaQuery, Paper} from "@mui/material";
import Page from "../../components/Page";
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GeneralInformation from "../../components/properties/propertyRegister/GeneralInformation";
import LocationInformation from "../../components/properties/propertyRegister/LocationInformation";
import HandymanIcon from '@mui/icons-material/Handyman';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ArticleIcon from '@mui/icons-material/Article';
import HandshakeIcon from '@mui/icons-material/Handshake';
import PhotosInformation from "../../components/properties/propertyRegister/PhotosInformation";
import NegotiationInformation from "../../components/properties/propertyRegister/NegotiationInformation";
import LegalDocumentsInformation from "../../components/properties/propertyRegister/LegalDocumentsInformation";
import useRegisterProperty from "../../hooks/api/properties/useRegisterProperty";


export default function PropertyRegister() {
  const largeScreen = useMediaQuery(theme => theme.breakpoints.up('md'))
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [images, setImages] = useState([])
  const [files, setFiles] = useState([
    {
      id: null,
      imageData: null,
      imageType: null,
      label: 'Titulo de propiedad',
      name: 'title'
    },
    {
      id: null,
      imageData: null,
      imageType: null,
      label: 'Cedula catastral',
      name: 'catastralIdentification'
    },
    {
      id: null,
      imageData: null,
      imageType: null,
      label: 'Cedula de propietario',
      name: 'ownerIdentification'
    },
    {
      id: null,
      imageData: null,
      imageType: null,
      label: 'Convenio Compra / Venta',
      name: 'agreement'
    },
    {
      id: null,
      imageData: null,
      imageType: null,
      label: 'Otro',
      name: 'other'
    },

  ])
  const [location, setLocation] = useState({

  })
  const [clientData, setClientData] = useState({

  })


  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };



  return (
    <Page title='Registrar propiedad | Vision Inmobiliaria'>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Box display='flex' justifyContent='space-between' flexWrap='wrap' my={3}>
            <Typography variant='h2'>Registro de propiedad</Typography>
          <Button fullWidth={!largeScreen} sx={{ mt: !largeScreen && 2 }} variant='outlined' color='primary'>Vista previa</Button>
        </Box>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color='secondary' />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={{ p: 3 }}
          >
            <Box display='flex' alignItems='center'>
              <HandymanIcon color='secondary' sx={{ mr: 2 }} />
              <Typography variant='h6'>Informacion General</Typography>
            </Box>

          </AccordionSummary>
          <AccordionDetails>
            <GeneralInformation />
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color='secondary' />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            sx={{ p: 3 }}
          >
            <Box display='flex' alignItems='center'>
              <LocationOnIcon color='secondary' sx={{ mr: 2 }} />
              <Typography variant='h6'>Ubicacion de inmueble</Typography>
            </Box>

          </AccordionSummary>
          <AccordionDetails>
            <LocationInformation />
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color='secondary' />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            sx={{ p: 3 }}
          >
            <Box display='flex' alignItems='center'>
              <PermMediaIcon color='secondary' sx={{ mr: 2 }} />
              <Typography variant='h6'>Fotografias y videos de inmueble</Typography>
            </Box>
            </AccordionSummary>
          <AccordionDetails>
          <PhotosInformation />
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} disabled onChange={handleChange('panel4')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color='secondary' />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            sx={{ p: 3 }}
          >
            <Box display='flex' alignItems='center'>
              <ListAltIcon color='secondary' sx={{ mr: 2 }} />
              <Typography variant='h6'>Caracteristicas del inmueble</Typography>
            </Box>

          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
              amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color='secondary' />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
            sx={{ p: 3 }}
          >
            <Box display='flex' alignItems='center'>
              <HandshakeIcon color='secondary' sx={{ mr: 2 }} />
              <Typography variant='h6'>Datos de negociacion y cliente</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <NegotiationInformation />
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color='secondary' />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
            sx={{ p: 3 }}
          >
            <Box display='flex' alignItems='center'>
              <ArticleIcon color='secondary' sx={{ mr: 2 }} />
              <Typography variant='h6'>Documentos legales</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <LegalDocumentsInformation />
          </AccordionDetails>
        </Accordion>
        <Button sx={{ my: 5 }} fullWidth variant='contained' color='primary'>Registrar</Button>
      </Paper>

    </Page>

  )
}




