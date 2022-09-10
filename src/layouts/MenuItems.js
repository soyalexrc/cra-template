import {Box, Typography, Collapse, Divider, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {useNavigate} from 'react-router-dom'
import {useState} from 'react';
import PersonIcon from '@mui/icons-material/Person';
import WidgetsIcon from '@mui/icons-material/Widgets';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import GroupsIcon from '@mui/icons-material/Groups';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const data = [
  {
    title: "Inicio",
    path: "/",
    value: "inicio",
    icon: <WidgetsIcon style={{ color: "white" }} />,
    id: 2,
    rols: [
      "Administrador",
      "Asesor inmobiliario Vision",
      "Coordinador de servicios",
    ],
  },
  {
    title: "Propietarios",
    path: "/propietarios",
    icon: <AssignmentIndIcon style={{ color: "white" }} />,
    value: "propietarios",
    id: 5,
    rols: ["Administrador"],
  },
  {
    title: "Usuarios",
    path: "/usuarios",
    icon: <PeopleAltIcon style={{ color: "white" }} />,
    value: "usuarios",
    id: 4,
    rols: ["Administrador"],
  },
  {
    title: "Propiedades",
    path: "/propiedades",
    icon: <ApartmentIcon style={{ color: "white" }} />,
    value: "propiedades",
    id: 4,
    rols: [
      "Administrador",
      "Asesor inmobiliario Vision",
      "Coordinador de servicios",
    ],
  },
  {
    title: "Asesores Externos",
    path: "/asesores-externos",
    value: "asesores-externos",
    icon: <GroupsIcon style={{ color: "white" }} />,
    id: 3,
    rols: ["Administrador"],
  },
  {
    title: "Aliados",
    path: "/aliados",
    value: "aliados",
    icon: <VolunteerActivismIcon style={{ color: "white" }} />,
    id: 1,
    rols: ["Administrador"],
  },
  {
    title: "Administracion",
    path: "/administracion",
    icon: <AdminPanelSettingsIcon style={{ color: "white" }} />,
    value: "administracion",
    id: 6,
    rols: ["Administrador"],
  },
];

export default function MenuItems({open, fn}) {
  const [selected, setSelected] = useState('');
  const navigate = useNavigate()
  const userType = JSON.parse(localStorage.getItem('vi-currentUser')).user_type;
  const goTo = (path) => {
    fn();
    setSelected(path.replace('/', ''));
    navigate(path)
  }

  console.log('routes', data)

  return (
    <Box sx={{color: 'white'}}>
      {
        data.filter(x => x.rols?.includes(userType)).map((route, index) => (
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
