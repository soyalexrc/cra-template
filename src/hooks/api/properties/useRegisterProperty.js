import {useSelector, useDispatch} from "../../../redux/store";
import {
  handleChangeProperty,
  handleChangeLocation,
  addImage,
  addFile,
  setAttributes,
  handleChangeAttribute,
  handleClient,
  manageIsPropertyApartment,
  manageIsNotPropertyApartment,
  handleUpdateFiles,
  setCurrentProperty,
  removeImage,
  orderImages
} from '../../../redux/slices/propertyRegisterForm'
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import axios from "../../../utils/axios";
import {useSnackbar} from "notistack";
import { useNavigate } from 'react-router-dom'
import {sleep} from "../../../utils/helpers";


export default function useRegisterProperty() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {data} = useSelector(state => state.propertyRegisterForm)
  const [loading, setLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [createLoading, setCreateLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();



  async function uploadFile(data) {
    try {
      setLoading(true);
      const response = await axios.post('file/upload', data);
      if (response.status === 200) {
        enqueueSnackbar('Se cargo el archivo  con exito!', { variant: 'success' })
        return response.data
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  async function getAttributesByPropertyType(type) {
    try {
      const response = await axios.get(`/attribute/getAllDataByPropertyType?propertyType=${type}`)
      if (response.status === 200) {
        dispatch(setAttributes(response.data));
      }
    } catch (e) {
      console.log(e)
    }
  }

  const handlePropertyData = async (data) => {
    dispatch(handleChangeProperty(data))
  }

  const isPropertyApartment = () => {
    dispatch(manageIsPropertyApartment)
  }
  const isNotPropertyApartment = () => {
    dispatch(manageIsNotPropertyApartment)
  }

  const handleLocationData = (data) => {
    dispatch(handleChangeLocation(data))
  }

  const handleAttributeData = (index, value) => {
    dispatch(handleChangeAttribute({index, value}));
  }

  const handleClientData = (data) => {
    dispatch(handleClient(data));
  }

  const updateFiles = (index, value) => {
    dispatch(handleUpdateFiles({index, value}));

  }

  const handleFilesData = async (e, element) => {
    let obj = {
      id: '',
      imageType: '',
      imageData: ''
    }
    const {files} = e.target;

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = async () => {
      obj.imageType = files[0].type;
      obj.imageData = reader.result;
      obj.id = uuidv4();
      const dataFile = await uploadFile(obj);
      const objFile = {
        id: dataFile,
        imageData: null,
        imageType: files[0].type
      }
      await dispatch(addFile({objFile, element}));
    }
  }

  const handleAddImage = async (e) => {
    let obj = {
      id: '',
      imageType: '',
      imageData: ''
    }
    const {files} = e.target;

    const forLoop = async _ => {
      console.log('comence!')
      for (let i = 0; i < files.length; i++) {
        console.log('here ', i)
        try {
          const reader = new FileReader();
          reader.readAsDataURL(files[i]);
          reader.onload = async () => {
            obj.imageType = files[i].type;
            obj.imageData = reader.result;
            obj.id = uuidv4();
            const dataImage = await uploadFile(obj);
            const objImage = {
              id: dataImage,
              imageData: null,
              imageType: files[i].type
            }
            await dispatch(addImage(objImage));
          }
        } catch (e) {
          console.log(e)
        }
      }
    }
    await forLoop();
    console.log('termine')
  }

  const handleRemoveImage = () => {

  }

  const handleOrderImage = () => {

  }

  const handleSubmitData = async () => {
    try {
      setCreateLoading(true);
      await sleep(2000)
      const response = await axios.post('property/addNewData', data);
      if (response.status === 200) {
        enqueueSnackbar('Se registro la propiedad con exito!', {variant: 'success'})
        navigate(-1)
      }
    } catch(err) {
      enqueueSnackbar("Ocurrio un error", {variant: 'error'})
    } finally {
      setCreateLoading(false);
    }
  }

  const handleUpdateData = async () => {
    try {
      setUpdateLoading(true);
      await sleep(2000)
      const response = await axios.put('property/updateData', data);
      if (response.status === 200) {
        enqueueSnackbar('Se edito la propiedad con exito!', {variant: 'success'})
        navigate(-1)
      }
    } catch(err) {
      enqueueSnackbar("Ocurrio un error", {variant: 'error'})
    } finally {
      setUpdateLoading(false);
    }
  }


  return {
    loading,
    data,
    createLoading,
    updateLoading,
    handlePropertyData,
    handleLocationData,
    handleOrderImage,
    handleRemoveImage,
    handleAddImage,
    handleAttributeData,
    handleClientData,
    getAttributesByPropertyType,
    isPropertyApartment,
    isNotPropertyApartment,
    handleFilesData,
    updateFiles,
    handleSubmitData,
    handleUpdateData
  };
}
