import {styled} from "@mui/material/styles";
import {Box, Button, useMediaQuery, TextField} from "@mui/material";
import Page from "../../components/Page";
import {useNavigate} from 'react-router-dom';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import {useState} from 'react';
import BottomMenu from "../../components/shared/BottomMenu";
import ActionBar from "../../components/shared/ActionBar";

export default function PropertyEdit() {
  const largeScreen = useMediaQuery(theme => theme.breakpoints.up('md'))
  const navigate = useNavigate();
  const [providerData, setProviderData] = useState({
    name: 'Categoria de ejemplo',
  })

  function changeUserData(type, value) {
    setProviderData(prevState => ({
      ...prevState,
      [type]: value
    }))
  }

  return (
    <Page title='Editar propiedad | Vision Inmobiliaria'>
      <Box display='flex' justifyContent='center' alignItems='center' height='70vh'>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Box display='flex' alignItems='center' justifyContent='center' width={200} height={200}
               sx={{backgroundColor: '#F5F5F5',}}>
            <CameraAltIcon sx={{fontSize: 62, color: '#434F5F33'}}/>
          </Box>
          <Button component="label" sx={{mt: 2}}>
            Subir Fotografia
            <input hidden accept="image/*" multiple type="file"/>
          </Button>
          <Box display='flex' justifyContent='center'>
            <Box width={largeScreen ? 500 : 300}>
              <TextField
                fullWidth
                color='secondary'
                helperText='Max. 20 caracteres'
                sx={{mt: 2}}
                id="user-name-textfield"
                placeholder='Nombre'
                value={providerData.name}
                onChange={(e) => changeUserData('name', e.target.value)}
                label='Nombre'
                variant="outlined"
              />
            </Box>
          </Box>
        </Box>
      </Box>

    </Page>

  )
}




