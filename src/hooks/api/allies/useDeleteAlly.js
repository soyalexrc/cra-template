import {useState} from 'react';
import axios from "../../../utils/axios";
import {removeAlly} from "../../../redux/slices/allies";
import {useDispatch} from "../../../redux/store";
import {useSnackbar} from "notistack";

export default function useDeleteAlly() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar()

  async function deleteAlly(id, fn) {
    try {
      setLoading(true);
      const response = await axios.delete(`owner/deleteData?id=${id}`);
      if (response.status === 200) {
        dispatch(removeAlly(id))
        enqueueSnackbar('Se elimino el aliado con exito!', {variant: 'success'} )
        fn();
      }
    } catch (e) {
      console.log(e);
      enqueueSnackbar('Error!', {variant: 'error'} )
    } finally {
      setLoading(false);
    }
  }

  return {deleteAlly, loading};
}
