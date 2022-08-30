import {Box, Typography, Collapse, Divider, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {useNavigate} from 'react-router-dom'
import {useState} from 'react';
import PersonIcon from '@mui/icons-material/Person';
import WidgetsIcon from '@mui/icons-material/Widgets';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import BuildIcon from '@mui/icons-material/Build';
import BadgeIcon from '@mui/icons-material/Badge';

const data = [
  {
    title: 'Inicio',
    path: '/',
    value: 'inicio',
    icon: <WidgetsIcon style={{ color: 'white' }} />,
    id: 2,
  },
  {
    title: 'Propietarios',
    path: '/propietarios',
    icon: <ShoppingCartIcon style={{ color: 'white' }} />,
    value: 'propietarios',
    id: 5,
  },
  {
    title: 'Usuarios',
    path: '/usuarios',
    icon: <ReceiptLongIcon style={{ color: 'white' }} />,
    value: 'usuarios',
    id: 4,
  },
  {
    title: 'Propiedades',
    path: '/propiedades',
    icon: <ReceiptLongIcon style={{ color: 'white' }} />,
    value: 'propiedades',
    id: 4,
  },
  {
    title: 'Asesores Externos',
    path: '/asesores-externos',
    value: 'asesores-externos',
    icon: <AttachMoneyIcon style={{ color: 'white' }} />,
    id: 3,
  },
  {
    title: 'Aliados',
    path: '/aliados',
    value: 'aliados',
    icon: <PersonIcon style={{ color: 'white' }} />,
    id: 1,
  },
  {
    title: 'Administracion',
    path: '/administracion',
    icon: <SignalCellularAltIcon style={{ color: 'white' }} />,
    value: 'administracion',
    id: 6,
  },
];

export default function MenuItems({open, fn}) {
  const [selected, setSelected] = useState('');
  const navigate = useNavigate()
  const goTo = (path) => {
    fn();
    setSelected(path.replace('/', ''));
    navigate(path)
  }

  return (
    <Box sx={{color: 'white'}}>
      {
        data.map((route, index) => (
          <Box
            key={route.id}
            onClick={() => goTo(route.path)}
            sx={{
              cursor: 'pointer',
              minHeight: 48,
              display: 'flex',
              justifyContent: 'initial',
              backgroundColor: selected === route.value && 'rgba(255,255,255, 0.1)',
              "&:hover": {
                backgroundColor: 'rgba(255,255,255, 0.1)',
              },
              p: 2.5,
            }}
          >
            <Box
              sx={{
                mr: 3,
                justifyContent: 'center',
              }}
            >
              {route.icon}
            </Box>
            <Typography> {route.title}</Typography>
          </Box>
        ))
      }
    </Box>
  )
}
