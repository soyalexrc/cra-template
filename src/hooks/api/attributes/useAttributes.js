import {useState} from 'react';
import { useSnackbar } from 'notistack'
import {useDispatch, useSelector} from "../../../redux/store";
import { removeAttribute, setAttributes } from '../../../redux/slices/attributes'
import axios from "../../../utils/axios";

export default function UseAttributes() {
  const dispatch = useDispatch();
  const {attributes} = useSelector(state => state.attributes);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar()

  async function getAttributes() {
    try {
      setLoading(true);
      const response = await axios.get('attribute/getAllData');
      if (response.status === 200) {
        console.log(response)
        dispatch(setAttributes(response.data))
      }
    } catch (err) {
      enqueueSnackbar(`Error ${JSON.stringify(err)}`, { variant: 'error' })
    } finally {
      setLoading(false);
    }
  }

  async function deleteAttribute() {

  }

  async function editAttribute() {

  }


  async function createAttribute() {

  }

  return {getAttributes, loading, attributes};
}
