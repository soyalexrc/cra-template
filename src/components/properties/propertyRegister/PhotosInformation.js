import {IconButton, Box, Typography, CircularProgress} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import GridViewIcon from '@mui/icons-material/GridView';
import useRegisterProperty from "../../../hooks/api/properties/useRegisterProperty";
import {useRef, useState} from 'react';
import DeleteButton from "../../shared/DeleteButton";

export default function PhotosInformation({handleChangeMedia}) {
  const {loading, data, handleAddImage, handleRemoveImage, handleSortImages} = useRegisterProperty();
  const inputRef = useRef();
  const [dragItem, setDragItem] = useState(null)

  console.log(loading);

  const handleDragStart = (index) => {
    console.log(index);
    setDragItem(index);
  };

  const handleDragEnter = (e, index) => {

  };

  const handleDragLeave = (e, index) => {
    const newList = [...data.images];
    const item = newList[dragItem];
    newList.splice(dragItem, 1);
    newList.splice(index, 0, item);
    setDragItem(index);
    handleSortImages(newList);
  };

  const handleDrop = (e, index) => {
    console.log(e);
    console.log(index);
  };


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
          data.images.length > 0 && data.images.map((image, index) => (
            <Box
              key={image.id + index}
              m={2}
              width={200}
              height={200}
              border='1px solid lightgray'
              sx={{position: 'relative'}}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragEnter={(e) => handleDragEnter(e, index)}
              onDragLeave={(e) => handleDragLeave(e, index)}
              onDrop={(e) => handleDrop(e, index)}
              onDragOver={(e) => e.preventDefault()}
            >
              <Box display='flex' alignItems='center' justifyContent='center' sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                backgroundColor: 'background:rgba(255,255,255, 0.7)',
                zIndex: 11
              }}>
                <DeleteButton onClick={() => handleRemoveImage(image.id)} item={`imagen: ${image.id}`}/>
              </Box>
              <Box component='img' sx={{maxHeight: 200, maxWidth: 200, width: '100%', height: '100%'}} src={`http://138.219.42.156:3000/images/${image.id}`}/>
            </Box>
          ))
        }
      </Box>
    </Box>
  )
}
