import {styled} from "@mui/material/styles";
import Page from "../../components/Page";
import { Box, Typography, Tabs, Tab } from '@mui/material';
import { useState } from 'react';
import PropertyList from "./PropertyList";
import AttributesList from "./AttributesList";
import BottomMenu from "../../components/shared/BottomMenu";
import { useNavigate } from 'react-router-dom';

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

  return (
    <Page title='Propiedades y atributos | Vision Inmobiliaria'>
      <Tabs value={tab} centered onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Propiedades" {...a11yProps(0)} />
        <Tab label="Atributos" {...a11yProps(1)} />
      </Tabs>

      <TabPanel value={tab} index={0}>
        <PropertyList />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <AttributesList />
      </TabPanel>
    </Page>
  )
}
