import {
  Checkbox, FormControlLabel, FormGroup, Box
} from "@mui/material";
import useRegisterProperty from "../../../hooks/api/properties/useRegisterProperty";
import {useState, useEffect} from 'react';

export default function PublicationSource({event}) {
  const {
    handlePropertyData,
    data,
    getAttributesByPropertyType,
    isNotPropertyApartment,
    isPropertyApartment
  } = useRegisterProperty();
  const [property, setProperty] = useState({...data.property})

  const handleChange = async (index, value) => {
    setProperty(prevState => ({
      ...prevState,
      [index]: value
    }))
    if (index === 'propertyType') {
      await getAttributesByPropertyType(value);
    }

    if (index === 'propertyType' && value === 'Apartamento') {
      isPropertyApartment()
    } else {
      isNotPropertyApartment()
    }
  }

  useEffect(() => {
    handlePropertyData(property)
  }, [event])

  return (
    <Box p={3}>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Instagram" />
        <FormControlLabel control={<Checkbox />} label="Facebook" />
        <FormControlLabel control={<Checkbox />} label="Tik Tok" />
        <FormControlLabel control={<Checkbox />} label="Mercadolibre" />
        <FormControlLabel control={<Checkbox />} label="Conlallave" />
        <FormControlLabel control={<Checkbox />} label="Grupos de whatsapp" />
      </FormGroup>
    </Box>
  )
}
