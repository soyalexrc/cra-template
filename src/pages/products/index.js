import {styled} from "@mui/material/styles";
import Page from "../../components/Page";
import { Box, Typography, Tabs, Tab } from '@mui/material';
import { useState } from 'react';
import ProductsList from "./ProductsList";
import CategoriesList from "./CategoriesList";
import BottomMenu from "../../components/shared/BottomMenu";
import { useNavigate } from 'react-router-dom';

const APP_BAR_MOBILE = 32;
const APP_BAR_DESKTOP = 44;

const RootStyle = styled(Page)(({theme}) => ({
  minHeight: "100%",
  overflowX: 'hidden',
  width: "100%",
  position: 'relative',
  paddingBottom: '7rem',
  paddingTop: APP_BAR_MOBILE,
  [theme.breakpoints.up("md")]: {
    paddingTop: APP_BAR_DESKTOP,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ProductsAndCategoriesList() {
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  const actions = [
    {
      main: true,
      fn: () => navigate(tab === 0 ? 'registrar' : 'registrar-categoria'),
      label: tab === 0 ? 'Nuevo producto' : 'Nueva categoria'
    }
  ]

  return (
    <RootStyle title='Productos y Categorias | Alishop'>
      <Tabs value={tab} centered onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Items" {...a11yProps(0)} />
        <Tab label="Categorias" {...a11yProps(1)} />
      </Tabs>

      <TabPanel value={tab} index={0}>
        <ProductsList />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <CategoriesList />
      </TabPanel>
      <BottomMenu actions={actions}  />
    </RootStyle>
  )
}
