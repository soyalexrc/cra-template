import {Button, Box, Typography, useMediaQuery, Paper} from "@mui/material";
import Page from "../../components/Page";
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GeneralInformation from "../../components/properties/propertyEdit/GeneralInformation";
import LocationInformation from "../../components/properties/propertyEdit/LocationInformation";
import HandymanIcon from '@mui/icons-material/Handyman';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ArticleIcon from '@mui/icons-material/Article';
import HandshakeIcon from '@mui/icons-material/Handshake';
import PhotosInformation from "../../components/properties/propertyEdit/PhotosInformation";
import NegotiationInformation from "../../components/properties/propertyEdit/NegotiationInformation";
import LegalDocumentsInformation from "../../components/properties/propertyEdit/LegalDocumentsInformation";
import useRegisterProperty from "../../hooks/api/properties/useRegisterProperty";
import AttributesInformation from "../../components/properties/propertyEdit/AttributesInformation";
import useProperties from "../../hooks/api/properties/useProperties";
import SmallLoading from "../../components/SmallLoading";
import PreviewModal from "../../components/properties/PreviewModal";


export default function PropertyRegister() {
  const largeScreen = useMediaQuery(theme => theme.breakpoints.up('md'))
  const { data, handleUpdateData, updateLoading } = useRegisterProperty();
  const {id} = useParams();
  const {getPropertyById, loading} = useProperties()
  const [expanded, setExpanded] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    getPropertyById(id)
  }, [])

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const submitData = async () => {
    setExpanded(false);
    await handleUpdateData()
  }

  return (
    <Page title='Registrar propiedad | Vision Inmobiliaria'>
      {loading && <SmallLoading />}
      {
        !loading &&
        <Paper elevation={3} sx={{ p: 3 }}>
          <Box display='flex' justifyContent='space-between' flexWrap='wrap' my={3}>
            <Typography variant='h2'>Edicion de propiedad</Typography>
            <Button fullWidth={!largeScreen} sx={{ mt: !largeScreen && 2 }} onClick={() => setOpenModal(true)} variant='outlined' color='primary'>Vista previa</Button>
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
              <GeneralInformation event={expanded} />
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
              <LocationInformation event={expanded} />
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
          <Accordion expanded={expanded === 'panel4'} disabled={data.attributes.length < 1} onChange={handleChange('panel4')}>
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
              <AttributesInformation />
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
              <NegotiationInformation event={expanded} />
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
              <LegalDocumentsInformation event={expanded} />
            </AccordionDetails>
          </Accordion>
          <Button sx={{ my: 5 }} disabled={updateLoading || expanded} onClick={submitData} fullWidth variant='contained' color='primary'>{updateLoading ? 'Guardando cambios': expanded ? 'Cierra los paneles para guardar los cambios' : 'Guardar cambios'}</Button>
        </Paper>
      }
      <PreviewModal data={data} open={openModal} setOpen={setOpenModal} loading={false} />
    </Page>
  )
}




