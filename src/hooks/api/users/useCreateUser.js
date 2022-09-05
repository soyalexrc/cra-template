import {useState} from 'react';
import axios from "../../../utils/axios";
import {useSnackbar} from "notistack";
import { useNavigate } from 'react-router-dom';

export default function useCreateUser() {
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate();

  async function createUser(data) {
    try {
      setLoading(true);
      const response = await axios.post('user/addNewData', data);
      if (response.status === 200) {
        enqueueSnackbar('Se creo el usuario con exito!', {variant: 'success'} )
        navigate(-1)
      }
    } catch (e) {
      console.log(e);
      enqueueSnackbar('Error!', {variant: 'error'} )
    } finally {
      setLoading(false);
    }
  }
  return {createUser, loading};
}
