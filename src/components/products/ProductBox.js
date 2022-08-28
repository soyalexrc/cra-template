import {Box, Typography, Divider } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import {formatPrice} from "../../utils/format";
import StockProduct from "./StockProduct";

export default function ProductBox({ isEmpty, img, title, code, stock, detailPrice, mayorPrice, packagePrice }) {
  const navigate = useNavigate();

  if (isEmpty) {
    return (
      <Box
        onClick={() => navigate('registrar')}
        display='flex'
        alignItems='center'
        sx={{ backgroundColor: '#fff', p: 2, minHeight: '180px', cursor: 'pointer' }}>
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
        <Box ml={3}>
          <Typography variant='h5'>Nuevo producto</Typography>
          <Typography >Nuevo producto</Typography>
        </Box>
      </Box>
    )
  } else {
    return (
      <Box
        onClick={() => navigate('editar/sample')}
        sx={{ backgroundColor: '#fff', p: 2, minHeight: '180px', cursor: 'pointer' }}>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Typography>{title}</Typography>
          <Typography sx={{ color: '#7E92AD' }} fontWeight='bold' fontSize='12px'>{code}</Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box
          display='flex'
          alignItems='center'>
          <Box sx={{ border: '1px solid lightgray', p: 1 }}>
            <Box component='img' src={img} width={75} height={75} />
          </Box>
          <Box ml={3}>
            <StockProduct stock={stock} />
            <Typography fontWeight='bold'>{formatPrice(detailPrice)} - Detalle</Typography>
            <Typography fontWeight='bold'>{formatPrice(mayorPrice)} - Al mayor</Typography>
            <Typography fontWeight='bold'>{formatPrice(packagePrice)} - Por embalaje</Typography>
          </Box>
        </Box>
      </Box>

    )
  }

}
