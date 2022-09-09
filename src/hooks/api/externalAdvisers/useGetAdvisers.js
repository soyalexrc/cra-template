import {useState} from 'react';
import {useDispatch, useSelector} from "../../../redux/store";
import {useSnackbar} from "notistack";
import axios from "../../../utils/axios";
import {setCurrentAdviser, setAdvisers} from "../../../redux/slices/externalAdvisers";

export default function useGetAdvisers() {
  const dispatch = useDispatch();
  const {advisers, currentAdviser} = useSelector(state => state.externalAdvisers);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar()

  async function getAdvisers() {
    try {
      setLoading(true);
      const response = await axios.get('owner/getAllData?type=Asesores%20Externos');
      if (response.status === 200) {
        dispatch(setAdvisers(response.data))
      }
    } catch (err) {
      enqueueSnackbar(`Error ${JSON.stringify(err)}`, { variant: 'error' })
    } finally {
      setLoading(false);
    }
  }

  async function getAdviserById(id) {
    try {
      setLoading(true);
      const response = await axios.get(`owner/getById?id=${id}`);
      if (response.status === 200 && response.data.recordset.length > 0) {
        console.log(response.data.recordset[0])
        dispatch(setCurrentAdviser(response.data.recordset[0]))
      }
    } catch (err) {
      enqueueSnackbar(`Error ${JSON.stringify(err)}`, { variant: 'error' })
    } finally {
      setLoading(false);
    }
  }
  return {advisers, currentAdviser, getAdviserById,  getAdvisers, loading};
}
