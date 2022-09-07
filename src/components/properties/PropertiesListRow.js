import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Box, Collapse, IconButton, TableCell, TableRow} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import noImage from "../../assets/vision-icon.png";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import DeleteButton from "../shared/DeleteButton";
import SearchIcon from '@mui/icons-material/Search'
import {formatPrice} from "../../utils/format";

export default function PropertiesListRow({row, fnDelete}) {
  const [open, setOpen] = useState(false);
  const userType = JSON.parse(localStorage.getItem("vi-currentUser")).user_type;

  const navigate = useNavigate();

  return (
    <>
      <TableRow
        key={row.id}
        sx={{
          '&:last-child td, &:last-child th': {border: 0},
          transition: "background .2s",
          backgroundColor: open && 'rgba(0,0,0, 0.05)',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0, 0.05)'
          }
        }}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
          </IconButton>
        </TableCell>
        <TableCell>
          <Box
            onError={({currentTarget}) => {
              currentTarget.onerror = null;
              currentTarget.src = noImage
            }}
            component='img'
            src={row.image ? row.image : noImage}
            width={50}
            height={50}
            sx={{borderRadius: 100}}
          />
        </TableCell>
        <TableCell>
          <Typography>
            {row.attributes[0]?.property_type}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography>
            {row.location.country} - {row.location.city} - {row.location.state} - {row.location.municipality}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography>
            {row.operationType}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography>
            DocumentStatus
          </Typography>
        </TableCell>
        <TableCell>
          <Typography>
            Aliado
          </Typography>
        </TableCell>
        <TableCell align='center'>
          {
            userType === 'Asesor inmobiliario Vision'
              ? (
                <IconButton onClick={() => navigate(`editar/${row.id}`)}>
                  <SearchIcon />
                </IconButton>
              ) : (
                <Box display='flex' alignItems='center'>
                  <IconButton onClick={() => navigate(`editar/${row.id}`)}>
                    <EditIcon/>
                  </IconButton>
                  <IconButton onClick={() => alert('cambiar status')}>
                    <AutorenewIcon/>
                  </IconButton>
                  <DeleteButton item={`Propiedad: ${row.propertyType} ${row.operationType}`} onClick={() => fnDelete(row.id)}/>
                </Box>
              )
          }
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box m={3} display='flex' flexWrap='wrap' alignItems='center' width='100%'>
              <Box m={2}>
                <Typography fontWeight='bold'>Punta Asesor</Typography>
                <Typography>Asesor</Typography>
              </Box>
              <Box m={2}>
                <Typography fontWeight='bold'>Capacitacion Externo</Typography>
                <Typography>External capacitor</Typography>
              </Box>
              <Box m={2}>
                <Typography fontWeight='bold'>Codigo de promocion</Typography>
                <Typography>Promotion status</Typography>
              </Box>
              <Box m={2}>
                <Typography fontWeight='bold'>Codigo</Typography>
                <Typography>{row.code}</Typography>
              </Box>
              <Box m={2}>
                <Typography fontWeight='bold'>Estatus</Typography>
                <Typography>{row.property_status}</Typography>
              </Box>
              <Box m={2}>
                <Typography fontWeight='bold'>Precio</Typography>
                <Typography>{formatPrice(row.price)}</Typography>
              </Box>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}
