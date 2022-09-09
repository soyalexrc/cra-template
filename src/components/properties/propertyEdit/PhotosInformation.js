import {Grid, Box, Typography, CircularProgress} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import useRegisterProperty from "../../../hooks/api/properties/useRegisterProperty";
import {useRef} from 'react';

export default function PhotosInformation({handleChangeMedia}) {
  const {loading, data, handleAddImage, handleRemoveImage, handleSortImage} = useRegisterProperty();
  const inputRef = useRef();

  return (
    <Box>
      <Box
        mt={2}
        display='flex'
        alignItems='center'
        justifyContent='center'
        height={50}
        border='1px dotted lightgray'
        onClick={() => inputRef.current.click()}
        sx={{
          cursor: 'pointer',
          backgroundColor: theme => theme.palette.secondary.lighter,
          "&:hover": {
            transition: 'background 1s ease',
            backgroundColor: theme => theme.palette.primary.lighter
          }
        }}
      >
        <input hidden ref={inputRef} disabled={loading} multiple accept="image/*" type="file"
               onChange={handleAddImage}/>
        {
          !loading &&
          <>
            <AddIcon/>
            <Typography fontWeight='bold' color='secondary'> Adjuntar imagenes</Typography>
          </>
        }
        {
          loading && <CircularProgress color='primary'/>
        }
      </Box>
      {/*<Box*/}
      {/*  display='flex'*/}
      {/*  alignItems='center'*/}
      {/*  justifyContent='center'*/}
      {/*  height={100}*/}
      {/*  border='1px dotted lightgray'*/}
      {/*  sx={{cursor: 'pointer'}}*/}
      {/*  onClick={() => inputRef.current.click()}*/}
      {/*>*/}
      {/*  <input hidden ref={inputRef} multiple accept="image/*" type="file" onChange={handleAddImage}/>*/}
      {/*  <AddIcon sx={{fontSize: '50px'}}/>*/}
      {/*</Box>*/}
      <Box display='flex' flexWrap='wrap'>
        {
          data.images.length > 0 && data.images.map(image => (
            <Box
              key={image.id}
              m={2}
              width={200}
              height={200}
              border='1px solid lightgray'
              position='relative'
            >
              <Box
                sx={{position: 'absolute', top: 0, left: 0, backgroundColor: 'black', zIndex: 11}}
              ></Box>
              <Box component='img' sx={{maxHeight: 200, maxWidth: 200}} src={image.imageData}/>
            </Box>
          ))
        }
      </Box>
    </Box>
  )
}
