import {useState} from 'react';
import { useSnackbar } from 'notistack'
import {useDispatch, useSelector} from "../../../redux/store";
import { removeAttribute, setAttributes } from '../../../redux/slices/attributes'
import axios from "../../../utils/axios";
import {sleep} from "../../../utils/helpers";

export default function useAttributes() {
  const dispatch = useDispatch();
  const {attributes} = useSelector(state => state.attributes);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar()

  async function getAttributes() {
    try {
      setLoading(true);
      const response = await axios.get('attribute/getAllData');
      if (response.status === 200) {
        dispatch(setAttributes(response.data))
      }
    } catch (err) {
      enqueueSnackbar(`Error ${JSON.stringify(err)}`, { variant: 'error' })
    } finally {
      setLoading(false);
    }
  }

  async function deleteAttribute(id, fn) {
    try {
      setLoading(true);
      const response = await axios.delete(`attribute/deleteData?id=${id}`);
      if (response.status === 200) {
        enqueueSnackbar('Se elimino el atributo con exito!', {variant: 'success'} )
        fn();
      }
    } catch (e) {
      console.log(e);
      enqueueSnackbar('Error!', {variant: 'error'} )
    } finally {
      setLoading(false);
    }
  }

  async function editAttribute(data, options, fn) {
    const json = {
      category: data.category,
      formType: data.form_type,
      label: data.label,
      id: data.id,
      placeholder: data.placeholder,
      propertyType: data.property_type,
      values: options.join('#')
    }
    try {
      setLoading(true);
      const response = await axios.put('attribute/updateData', json);
      if (response.status === 200) {
        enqueueSnackbar('Se edito el atributo con exito!', {variant: 'success'} )
        fn();
      }
    } catch (e) {
      console.log(e);
      enqueueSnackbar('Error!', {variant: 'error'} )
    } finally {
      setLoading(false);
    }
  }


  async function createAttribute(data, options, fn) {
    const json = {
      category: data.category,
      formType: data.form_type,
      label: data.label,
      placeholder: data.placeholder,
      propertyType: data.property_type,
      values: options.join('#')
    }
    try {
      setLoading(true);
      const response = await axios.post('attribute/addNewData', json);
      if (response.status === 200) {
        enqueueSnackbar('Se creo el atributo con exito!', {variant: 'success'} )
        fn();
      }
    } catch (e) {
      console.log(e);
      enqueueSnackbar('Error!', {variant: 'error'} )
    } finally {
      setLoading(false);
    }
  }

  return {getAttributes, loading, attributes, createAttribute, editAttribute, deleteAttribute};
}
