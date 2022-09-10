import {useState} from 'react';
import { useSnackbar } from 'notistack'
import {useDispatch, useSelector} from "../../../redux/store";
import { removeProperty, setProperties, setPropertyHistory } from '../../../redux/slices/properties';
import { setCurrentProperty } from '../../../redux/slices/propertyRegisterForm';
import axios from "../../../utils/axios";

export default function useProperties() {
  const dispatch = useDispatch();
  const {properties, history} = useSelector(state => state.properties);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar()

  async function getProperties(data) {
    try {
      setLoading(true);
      const response = await axios.post('property/getallDataFilter', data);
      if (response.status === 200) {
        dispatch(setProperties(response.data))
      }
    } catch (err) {
      enqueueSnackbar(`Error ${JSON.stringify(err)}`, { variant: 'error' })
    } finally {
      setLoading(false);
    }
  }

  async function getPropertyById(id) {
    try {
      setLoading(true);
      const response = await axios.get(`property/getById?id=${id}`);
      if (response.status === 200) {
        dispatch(setCurrentProperty(response.data))
      }
    } catch (err) {
      enqueueSnackbar(`Error ${JSON.stringify(err)}`, { variant: 'error' })
    } finally {
      setLoading(false);
    }
  }

  async function getPropertyHistory(id) {
    try {
      setLoading(true)
      const response = await axios.get(`property/getHistoricByPropertyId?property_id=${id}`);
      if (response.status === 200) {
        dispatch(setPropertyHistory(response.data));
      }
    } catch (e) {
      enqueueSnackbar('No se consiguio informacion de esta propiedad, ocurrio un error!', {variant: 'error'})
    } finally {
      setLoading(false)
    }
  }

  async function deleteProperty(id) {
    try {
      const response = await axios.delete(`property/deleteData?id=${id}`)
      console.log(response);
      if (response.status === 200) {
        dispatch(removeProperty(id))
        enqueueSnackbar('Se elimino la propiedad con exito!', {variant: 'success'})
      }
    } catch(err) {
      console.log(err)
      enqueueSnackbar('No se pudo eliminar la propiedad, ocurrio un error!', {variant: 'error'})
    }
  }

  async function updateStatusProperty(id, status) {
    try {
      const response = await axios.put("property/updateStatus", {id, property_status: status})
      if (response.status === 200) {
        enqueueSnackbar('Se cambio el estado de la propiedad con exito!', {variant: 'success'});
        await getProperties({
          filters: [],
          pageNumber: 1,
          pageSize: 10
        })
      }
    } catch(e) {
      enqueueSnackbar('No se pudo cambiar el estatus de la propiedad, ocurrio un error!', {variant: 'error'})
    }
  }
  return {getProperties, loading, properties, getPropertyById, deleteProperty, updateStatusProperty, getPropertyHistory, history};
}
