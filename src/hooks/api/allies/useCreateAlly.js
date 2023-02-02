import {useState} from 'react';
import axios from "../../../utils/axios";
import {useSnackbar} from "notistack";
import { useNavigate } from 'react-router-dom';

export default function useCreateAlly() {
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate();

  async function createAlly(data) {
    try {
      setLoading(true);
      const response = await axios.post('owner/addNewData', data);
      if (response.status === 200) {
        enqueueSnackbar('Se creo el aliado con exito!', {variant: 'success'} )
        navigate(-1)
      }
    } catch (e) {
      enqueueSnackbar('Error!', {variant: 'error'} )
    } finally {
      setLoading(false);
    }
  }
  return {createAlly, loading};
}
