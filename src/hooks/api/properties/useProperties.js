import {useState} from 'react';
import { useSnackbar } from 'notistack'
import {useDispatch, useSelector} from "../../../redux/store";
import { removeProperty, setProperties } from '../../../redux/slices/properties';
import { setCurrentProperty } from '../../../redux/slices/propertyRegisterForm';
import axios from "../../../utils/axios";

export default function useProperties() {
  const dispatch = useDispatch();
  const {properties, currentProperty} = useSelector(state => state.properties);
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

  async function deleteProperty() {

  }

  async function editProperty() {

  }

  async function updateStatusProperty() {

  }

  async function createProperty() {

  }

  return {getProperties, loading, properties, getPropertyById};
}
