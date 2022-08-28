import {Collapse, Divider, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
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
import workers from '../assets/icons/workers.svg';
import clients from '../assets/icons/clients.svg';
import providers from '../assets/icons/providers.svg';
import catalogue from '../assets/icons/catalogue.svg';
import sell from '../assets/icons/sell.svg';
import products from '../assets/icons/products.svg';
import stadistics from '../assets/icons/stadistics.svg';
import Box from "@mui/material/Box";

const data = [
  {
    title: 'Vender',
    path: '/vender',
    value: 'vender',
    img: sell,
    id: 2,
  },
  {
    title: 'Pedidos',
    path: '/pedidos',
    img: products,
    value: 'pedidos',
    id: 5,
  },
  {
    title: 'Productos',
    path: '/productos',
    img: products,
    value: 'productos',
    id: 4,
  },
  {
    title: 'Clientes',
    path: '/clientes',
    value: 'clientes',
    img: clients,
    id: 1,
  },
  {
    title: 'Proveedores',
    path: '/proveedores',
    value: 'proveedores',
    img: providers,
    id: 10,
  },
  {
    title: 'Estadisticas',
    path: '/estadisticas',
    img: stadistics,
    value: 'estadisticas',
    id: 6,
  },
  {
    title: 'Trabajadores',
    path: '/trabajadores',
    img: workers,
    value: 'trabajadores',
    id: 7,
  },
];

export default function MenuItems({fn}) {
  const [selected, setSelected] = useState('');
  const navigate = useNavigate()
  const goTo = (path) => {
    fn();
    setSelected(path.replace('/', ''));
    navigate(path)
  }

  return (
    <List>
      {
        data.map((route, index) => (
          <>
            <ListItemButton
              key={route.id}
              onClick={() => goTo(route.path)}
              sx={{
                minHeight: 48,
                justifyContent: 'initial',
                backgroundColor: selected === route.value && 'rgba(0,0,0, 0.1)',
                borderLeft: `5px solid ${selected === route.value ? '#EF6800' : 'fff'}`,
                "&:hover": {
                  backgroundColor: 'rgba(0,0,0, 0.1)',
                  borderLeft: '5px solid #EF6800',
                },
                p: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: 3,
                  justifyContent: 'center',
                }}
              >
                <Box component='img' src={route.img}/>
              </ListItemIcon>
              <ListItemText primary={route.title}/>
            </ListItemButton>
            <Divider/>
          </>
        ))
      }
    </List>
  )
}
