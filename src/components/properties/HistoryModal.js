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
  Typography, Grid
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'

import download from '../../assets/img/status-config.png';
import SmallLoading from "../SmallLoading";
import {formatDate} from "../../utils/helpers";

export default function HistoryModal({setOpen, open, data, loading}) {

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="responsive-dialog-title"
    >
      <Box display='flex' justifyContent='flex-end' p={2}>
        <IconButton>
          <CloseIcon onClick={() => setOpen(false)}/>
        </IconButton>
      </Box>
      {
        loading &&
        <SmallLoading/>
      }
      {!loading && data &&
        <>
          <DialogContent sx={{padding: '1rem 3rem'}}>
            <Typography variant='h1' color='primary'>Historico de estatus </Typography>
            <Grid container spacing={2} sx={{ mt: 3 }}>
              {data.length < 1 &&
                <Grid item xs={12}>
                  <Typography>No hay record de status en esta propiedad...</Typography>
                </Grid>
              }
              {data.length > 0 && data.map(item => (
                <>
                  <Grid item xs={12} md={3}>
                    <Typography fontWeight='bold'>Usuario</Typography>
                    <Typography>{item.username}</Typography>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography fontWeight='bold'>Fecha</Typography>
                    <Typography>{formatDate(item.created_date)}</Typography>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography fontWeight='bold'>Estatus</Typography>
                    <Typography>{item.status}</Typography>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography fontWeight='bold'>Comentarios</Typography>
                    <Typography>{item.comments}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider sx={{ my: 2, borderWidth: '2px' }} />
                  </Grid>
                </>
              ))}
            </Grid>
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
