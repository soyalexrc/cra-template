import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Divider,
  IconButton,
  useMediaQuery,
  Typography, Grid, InputLabel, Select, MenuItem, FormControl
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'

import download from '../../assets/img/status-config.png';
import SmallLoading from "../SmallLoading";
import useRegisterProperty from "../../hooks/api/properties/useRegisterProperty";
import useProperties from "../../hooks/api/properties/useProperties";
import useAuth from "../../hooks/api/auth/useAuth";

export default function ChangeStatusModal({setOpen, open, data, trigger}) {
  const largeScreen = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const {updateStatusProperty, loading} = useProperties();
  const {getUser} = useAuth()

  function middleWare(id, value) {
    const payload = {
      comments: '',
      property_id: data.id,
      status: value,
      user_id: getUser().id,
      username: getUser().username
    }
    updateStatusProperty(id, value, payload)
    if (value === 'Cerrado por Externo') {
      trigger()
    }
    setOpen(false);
  }

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="responsive-dialog-title"
    >
      <Box display='flex' justifyContent='flex-end' p={2}>
        <IconButton>
          <CloseIcon onClick={() => setOpen(false)}/>
        </IconButton>
      </Box>
      {data &&
        <>
          <DialogContent sx={{padding: '1rem 3rem'}}>
            <Typography variant='h5' sx={{ mb: 3 }} color='primary'>Cambio de estatus</Typography>
            <FormControl sx={{ width: largeScreen ? 300 : '100%' }} >
              <InputLabel id="demo-simple-select-label">Estatus</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data.property_status}
                label="Estatus"
                onChange={(e) => middleWare(data.id, e.target.value)}
              >
                <MenuItem value='Incompleto'>Incompleto</MenuItem>
                <MenuItem value='Reservado'>Reservado</MenuItem>
                <MenuItem value='Suspendido'>Suspendido</MenuItem>
                <MenuItem value='Cerrado por Vision'>Cerrado por Vision</MenuItem>
                <MenuItem value='Cerrado por Externo'>Cerrado por Externo</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button variant='contained' fullWidth onClick={() => setOpen(false)}>
              Cerrar
            </Button>
          </DialogActions>
        </>
      }
    </Dialog>
  )
}
