import {useState} from 'react';
import axios from "../../../utils/axios";
import {useSnackbar} from "notistack";
import { useNavigate } from 'react-router-dom';

export default function useCreateOwner() {
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate();

  async function createOwner(data) {
    try {
      setLoading(true);
      const response = await axios.post('owner/addNewData', data);
      if (response.status === 200) {
        enqueueSnackbar('Se creo el propietario con exito!', {variant: 'success'} )
        navigate(-1)
      }
    } catch (e) {
      enqueueSnackbar('Error!', {variant: 'error'} )
    } finally {
      setLoading(false);
    }
  }
  return {createOwner, loading};
}
