import {Box, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

export default function CategoryBox({ isEmpty, img, title, amount }) {
  const navigate = useNavigate();

  if (isEmpty) {
    return (
      <Box
        onClick={() => navigate('registrar-categoria')}
        display='flex'
        alignItems='center'
        sx={{ backgroundColor: '#fff', p: 2, minHeight: '145px', cursor: 'pointer' }}>
        <Box
          sx={{
            border: '1px solid lightgray',
            p: 1,
            width: 100,
            height: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <AddIcon sx={{ fontSize: '3rem' }} />
        </Box>
        <Box ml={1}>
          <Typography variant='h5'>Nueva categoria</Typography>
          <Typography >Nueva categoria</Typography>
        </Box>
      </Box>
    )
  } else {
    return (
      <Box
        display='flex'
        alignItems='center'
        onClick={() => navigate('editar-categoria/sample')}
        sx={{ backgroundColor: '#fff', p: 2, minHeight: '145px', cursor: 'pointer' }}>
        <Box sx={{ border: '1px solid lightgray', p: 1 }}>
          <Box component='img' src={img} width={75} height={75} />
        </Box>
        <Box ml={1}>
          <Typography variant='h5'>{title}</Typography>
          <Typography>{amount} productos</Typography>
        </Box>
      </Box>
    )
  }

}
