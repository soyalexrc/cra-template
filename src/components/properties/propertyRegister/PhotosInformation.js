import {Grid, Box} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function PhotosInformation({ handleChangeMedia }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={2}>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          height={200}
          border='1px solid lightgray'
          sx={{ cursor: 'pointer' }}
        >
          <AddIcon sx={{ fontSize: '50px' }} />
        </Box>
      </Grid>

    </Grid>
  )
}
