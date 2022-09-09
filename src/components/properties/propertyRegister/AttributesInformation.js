import {FormControl, Grid, MenuItem, Select, TextField, Typography, Divider, Box} from "@mui/material";
import useRegisterProperty from "../../../hooks/api/properties/useRegisterProperty";


export default function AttributesInformation() {
  const {data, handleAttributeData} = useRegisterProperty()
  console.log(data.attributes);

  return (
    <Grid container spacing={4}>
      {
        data.attributes.length > 0 && data.attributes.some(x => x.category === 'General') &&
        <>
          <Grid item xs={12}>
            <Typography variant='h5' color='secondary'>Atributos generales de {data.property.propertyType}</Typography>
            <Divider sx={{ my: 2 }} />
          </Grid>
          {
            data.attributes.length > 0 && data.attributes.filter(x => x.category === 'General').map(attr => {
              if (attr.form_type === 'text') {
                return (
                  <Grid item xs={12} md={3} key={attr.id}>
                    <Typography fontWeight='bold' sx={{mb: 1}}>{attr.label}</Typography>
                    <TextField
                      color='secondary'
                      fullWidth
                      placeholder={attr.label}
                      value={attr.value}
                      onChange={(e) => handleAttributeData(attr.id, e.target.value)}
                      variant="outlined"
                    />
                  </Grid>
                )
              } else {
                return (
                  <Grid item xs={12} md={3} key={attr.id}>
                    <Typography fontWeight='bold' sx={{mb: 1}}>{attr.label}</Typography>
                    <FormControl fullWidth>
                      <Select
                        value={attr.value}
                        onChange={(e) => handleAttributeData(attr.id, e.target.value)}
                      >
                        {
                          attr.values.split('#').map((option, index) => (
                            <MenuItem key={`${option}-${index}`} value={option}>{option}</MenuItem>

                          ))
                        }
                      </Select>
                    </FormControl>
                  </Grid>
                )
              }
            })
          }
          <Grid item xs={12}>
            <Divider sx={{ my: 2 }} />
          </Grid>
        </>
      }
      {
        data.attributes.length > 0 && data.attributes.some(x => x.category === 'Property') &&
        <>
          <Grid item xs={12}>
            <Typography variant='h5' color='secondary'>Atributos de la residencia </Typography>
            <Divider sx={{ my: 2 }} />
          </Grid>
          {
            data.attributes.length > 0 && data.attributes.filter(x => x.category === 'Property').map(attr => {
              if (attr.form_type === 'text') {
                return (
                  <Grid item xs={12} md={3} key={attr.id}>
                    <Typography fontWeight='bold' sx={{mb: 1}}>{attr.label}</Typography>
                    <TextField
                      color='secondary'
                      fullWidth
                      placeholder={attr.label}
                      value={attr.value}
                      onChange={(e) => handleAttributeData(attr.id, e.target.value)}
                      variant="outlined"
                    />
                  </Grid>
                )
              } else {
                return (
                  <Grid item xs={12} md={3} key={attr.id}>
                    <Typography fontWeight='bold' sx={{mb: 1}}>{attr.label}</Typography>
                    <FormControl fullWidth>
                      <Select
                        value={attr.value}
                        onChange={(e) => handleAttributeData(attr.id, e.target.value)}
                      >
                        {
                          attr.values.split('#').map((option, index) => (
                            <MenuItem key={`${option}-${index}`} value={option}>{option}</MenuItem>

                          ))
                        }
                      </Select>
                    </FormControl>
                  </Grid>
                )
              }
            })
          }
          <Grid item xs={12}>
            <Divider sx={{ my: 2 }} />
          </Grid>
        </>
      }
      {
        data.attributes.length > 0 && data.attributes.some(x => x.category === 'Furniture') &&
        <>
          <Grid item xs={12}>
            <Typography variant='h5' color='secondary'>Muebles y equipos disponibles para la Negociación </Typography>
            <Divider sx={{ my: 2 }} />
          </Grid>
          {
            data.attributes.length > 0 && data.attributes.filter(x => x.category === 'Furniture').map(attr => {
              if (attr.form_type === 'text') {
                return (
                  <Grid item xs={12} md={3} key={attr.id}>
                    <Typography fontWeight='bold' sx={{mb: 1}}>{attr.label}</Typography>
                    <TextField
                      color='secondary'
                      fullWidth
                      placeholder={attr.label}
                      value={attr.value}
                      onChange={(e) => handleAttributeData(attr.id, e.target.value)}
                      variant="outlined"
                    />
                  </Grid>
                )
              } else {
                return (
                  <Grid item xs={12} md={3} key={attr.id}>
                    <Typography fontWeight='bold' sx={{mb: 1}}>{attr.label}</Typography>
                    <FormControl fullWidth>
                      <Select
                        value={attr.value}
                        onChange={(e) => handleAttributeData(attr.id, e.target.value)}
                      >
                        {
                          attr.values.split('#').map((option, index) => (
                            <MenuItem key={`${option}-${index}`} value={option}>{option}</MenuItem>

                          ))
                        }
                      </Select>
                    </FormControl>
                  </Grid>
                )
              }
            })
          }
          <Grid item xs={12}>
            <Divider sx={{ my: 2 }} />
          </Grid>
        </>
      }
      {
        data.attributes.length > 0 && data.attributes.some(x => x.category === 'Custom') &&
        <>
          <Grid item xs={12}>
            <Typography variant='h5' color='secondary'>Atributos adicionales </Typography>
            <Divider sx={{ my: 2 }} />
          </Grid>
          {
            data.attributes.length > 0 && data.attributes.filter(x => x.category === 'Custom').map(attr => {
              if (attr.form_type === 'text') {
                return (
                  <Grid item xs={12} md={3} key={attr.id}>
                    <Typography fontWeight='bold' sx={{mb: 1}}>{attr.label}</Typography>
                    <TextField
                      color='secondary'
                      fullWidth
                      placeholder={attr.label}
                      value={attr.value}
                      onChange={(e) => handleAttributeData(attr.id, e.target.value)}
                      variant="outlined"
                    />
                  </Grid>
                )
              } else {
                return (
                  <Grid item xs={12} md={3} key={attr.id}>
                    <Typography fontWeight='bold' sx={{mb: 1}}>{attr.label}</Typography>
                    <FormControl fullWidth>
                      <Select
                        value={attr.value}
                        onChange={(e) => handleAttributeData(attr.id, e.target.value)}
                      >
                        {
                          attr.values.split('#').map((option, index) => (
                            <MenuItem key={`${option}-${index}`} value={option}>{option}</MenuItem>

                          ))
                        }
                      </Select>
                    </FormControl>
                  </Grid>
                )
              }
            })
          }
          <Grid item xs={12}>
            <Divider sx={{ my: 2 }} />
          </Grid>
        </>
      }
    </Grid>
  )
}
