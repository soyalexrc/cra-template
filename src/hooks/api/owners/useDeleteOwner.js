import {useState} from 'react';
import axios from "../../../utils/axios";
import {removeOwner} from "../../../redux/slices/owners";
import {useDispatch} from "../../../redux/store";
import {useSnackbar} from "notistack";

export default function useDeleteOwner() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar()

  async function deleteOwner(id, fn) {
    try {
      setLoading(true);
      const response = await axios.delete(`owner/deleteData?id=${id}`);
      if (response.status === 200) {
        dispatch(removeOwner(id))
        enqueueSnackbar('Se elimino el propietario con exito!', {variant: 'success'} )
        fn();
      }
    } catch (e) {
      enqueueSnackbar('Error!', {variant: 'error'} )
    } finally {
      setLoading(false);
    }
  }

  return {deleteOwner, loading};
}
