import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useSnackbar} from "notistack";
import axios from "../../../utils/axios";

export default function useUpdateAdviser() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar()



  async function editAdviser(data) {
    const json = {
      type: 'Asesores Externos',
      birthday: data.birthday.length > 10 ? data.birthday.substring(0, 10) : data.birthday,
      email: data.email,
      id: data.id.toString(),
      phone: data.phone,
      lastName: data.last_name,
      firstName: data.first_name,
      isInvestor: data.isInvestor
    }
    try {
      setLoading(true);
      const response = await axios.put('owner/updateData', json);
      if (response.status === 200) {
        navigate(-1)
        enqueueSnackbar('Se edito el asesor externo con exito!', {variant: 'success'} )
      }
    } catch (e) {
      enqueueSnackbar('Error!', {variant: 'error'} )
    } finally {
      setLoading(false);
    }
  }
  return {editAdviser, loading}
}
