import {useState} from 'react';
import {useDispatch, useSelector} from "../../../redux/store";
import {useSnackbar} from "notistack";
import axios from "../../../utils/axios";
import {setCurrentOwner, setOwners} from "../../../redux/slices/owners";

export default function useGetOwners() {
  const dispatch = useDispatch();
  const {owners, currentOwner} = useSelector(state => state.owners);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar()

  async function getOwners() {
    try {
      setLoading(true);
      const response = await axios.get('owner/getAllData?type=Propietarios');
      if (response.status === 200) {
        dispatch(setOwners(response.data))
      }
    } catch (err) {
      enqueueSnackbar(`Error ${JSON.stringify(err)}`, { variant: 'error' })
    } finally {
      setLoading(false);
    }
  }

  async function getOwnerById(id) {
    try {
      setLoading(true);
      const response = await axios.get(`owner/getById?id=${id}`);
      if (response.status === 200 && response.data.recordset.length > 0) {
        console.log(response.data.recordset[0])
        dispatch(setCurrentOwner(response.data.recordset[0]))
      }
    } catch (err) {
      enqueueSnackbar(`Error ${JSON.stringify(err)}`, { variant: 'error' })
    } finally {
      setLoading(false);
    }
  }
  return {owners, currentOwner, getOwnerById,  getOwners, loading};
}
