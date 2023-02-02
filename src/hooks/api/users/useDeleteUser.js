import {useState} from 'react';
import axios from "../../../utils/axios";
import {removeUser} from "../../../redux/slices/users";
import {useDispatch} from "../../../redux/store";
import {useSnackbar} from "notistack";

export default function useDeleteUser() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar()

  async function deleteUser(id, fn) {
    try {
      setLoading(true);
      const response = await axios.delete(`user/deleteData?id=${id}`);
      if (response.status === 200) {
        dispatch(removeUser(id))
        enqueueSnackbar('Se elimino el usuario con exito!', {variant: 'success'} )
        fn();
      }
    } catch (e) {
      enqueueSnackbar('Error!', {variant: 'error'} )
    } finally {
      setLoading(false);
    }
  }

  return {deleteUser, loading};
}
