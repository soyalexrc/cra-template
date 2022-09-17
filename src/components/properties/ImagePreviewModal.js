import {Box, IconButton, Dialog} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function ImagePreviewModal({image, open, setOpen}) {
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
      <Box width='100%' height='100%' component='img' src={image} />
    </Dialog>
  )
}
