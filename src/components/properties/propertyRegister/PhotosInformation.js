import {Grid, Box} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import useRegisterProperty from "../../../hooks/api/properties/useRegisterProperty";
import {useRef} from 'react';

export default function PhotosInformation({handleChangeMedia}) {
  const {data, handleAddImage, handleRemoveImage, handleSortImage} = useRegisterProperty();
  const inputRef = useRef();

  return (
    <Box>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        height={100}
        border='1px dashed lightgray'
        sx={{cursor: 'pointer'}}
        onClick={() => inputRef.current.click()}
      >
        <input hidden ref={inputRef} multiple accept="image/*" type="file" onChange={handleAddImage}/>
        <AddIcon sx={{fontSize: '50px'}}/>
      </Box>
      <Box display='flex' flexWrap='wrap' >
        {
          data.images.length > 0 && data.images.map(image => (
            <Box
              key={image.id}
              m={2}
              width={200}
              height={200}
              position='relative'
            >
              <Box
                sx={{ position: 'absolute', top: 0, left: 0, backgroundColor: 'black', zIndex: 11 }}
              ></Box>
              <Box component='img' sx={{ maxHeight: 200, maxWidth: 200 }} src={image.imageData}/>
            </Box>
          ))
        }
      </Box>
    </Box>
  )
}
