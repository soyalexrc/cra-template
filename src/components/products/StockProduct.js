import {Box, Typography} from "@mui/material";

export default function StockProduct({stock}) {
  return (
    <Box
      sx={{
        backgroundColor: stock === 0 ? '#FFE7E7' : stock <= 20 ? '#FFEFD3' : '#DCFFE4',
        border:`1px solid ${stock === 0 ? '#E9B3B3' : stock <= 20 ? '#EED19F' : '#B7E9C3'}`
      }}
    >
      <Typography align='center' sx={{ color: stock === 0 ? '#BD6767' : stock <= 20 ? '#563703' : '#001104' }}>
        {stock === 0 ? 'Sin Stock' : `${stock} und` }
      </Typography>
    </Box>
  )
}
