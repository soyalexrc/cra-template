import {useState} from 'react';
import {useDispatch, useSelector} from "../../../redux/store";
import {useSnackbar} from "notistack";
import axios from "../../../utils/axios";
import {setCurrentUser, setUsers} from "../../../redux/slices/users";

export default function useGetUsers() {
  const dispatch = useDispatch();
  const {users, currentUser} = useSelector(state => state.users);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar()

  async function getUsers() {
    try {
      setLoading(true);
      const response = await axios.get('user/getAllData');
      if (response.status === 200) {
        dispatch(setUsers(response.data))
      }
    } catch (err) {
      enqueueSnackbar(`Error ${JSON.stringify(err)}`, { variant: 'error' })
    } finally {
      setLoading(false);
    }
  }

  async function getUserById(id) {
    try {
      setLoading(true);
      const response = await axios.get(`user/getById?id=${id}`);
      if (response.status === 200 && response.data.recordset.length > 0) {
        dispatch(setCurrentUser(response.data.recordset[0]))
      }
    } catch (err) {
      enqueueSnackbar(`Error ${JSON.stringify(err)}`, { variant: 'error' })
    } finally {
      setLoading(false);
    }
  }
  return {users, currentUser, getUserById,  getUsers, loading};
}
