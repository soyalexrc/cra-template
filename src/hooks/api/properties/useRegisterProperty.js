import {useSelector, useDispatch} from "../../../redux/store";
import {
  handleChangeProperty,
  handleChangeLocation,
  addImage,
  removeImage,
  orderImages
} from '../../../redux/slices/propertyRegisterForm'
import { v4 as uuidv4 } from 'uuid';
import axios from "../../../utils/axios";



export default function useRegisterProperty() {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.propertyRegisterForm)

  async function uploadFile(data) {
    try {
      const response = await axios.post('file/upload', data);
      if (response.status === 200) {
        return response.data
      }
    } catch(err) {
      console.log(err);
    }
  }

  const handlePropertyData = (index, value) => {
    dispatch(handleChangeProperty({index, value}))
  }
  const handleLocationData = (index, value) => {
    dispatch(handleChangeLocation({index, value}))
  }

  const handleAddImage = async (e) => {
    let obj = {
      id: '',
      imageType: '',
      imageData: ''
    }
    const {files} = e.target;
    console.log(files[0])
    for (let i = 0; i < files.length; i++) {
    const reader = new FileReader();
      reader.readAsDataURL(files[i]);
      reader.onload = async () => {
        obj.imageType = files[i].type;
        obj.imageData = reader.result;
        obj.id = uuidv4();
        const dataImage = await uploadFile(obj);
        const objImage = {
          id: dataImage,
          imageData : reader.result,
          imageType: files[i].type
        }
        await dispatch(addImage(objImage));
      }
    }



  }

  const handleRemoveImage = () => {

  }

  const handleOrderImage = () => {

  }


  return {data, handlePropertyData, handleLocationData, handleOrderImage, handleRemoveImage, handleAddImage};
}
