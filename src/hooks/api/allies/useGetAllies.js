import {useState} from 'react';
import {useDispatch, useSelector} from "../../../redux/store";
import {useSnackbar} from "notistack";
import axios from "../../../utils/axios";
import {setCurrentAlly, setAllies} from "../../../redux/slices/allies";

export default function useGetAllies() {
  const dispatch = useDispatch();
  const {allies, currentAlly} = useSelector(state => state.allies);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar()

  async function getAllies() {
    try {
      setLoading(true);
      const response = await axios.get('owner/getAllData?type=Aliados');
      if (response.status === 200) {
        dispatch(setAllies(response.data))
      }
    } catch (err) {
      enqueueSnackbar(`Error ${JSON.stringify(err)}`, { variant: 'error' })
    } finally {
      setLoading(false);
    }
  }

  async function getAllyById(id) {
    try {
      setLoading(true);
      const response = await axios.get(`owner/getById?id=${id}`);
      if (response.status === 200 && response.data.recordset.length > 0) {
        console.log(response.data.recordset[0])
        dispatch(setCurrentAlly(response.data.recordset[0]))
      }
    } catch (err) {
      enqueueSnackbar(`Error ${JSON.stringify(err)}`, { variant: 'error' })
    } finally {
      setLoading(false);
    }
  }
  return {allies, currentAlly, getAllyById,  getAllies, loading};
}
