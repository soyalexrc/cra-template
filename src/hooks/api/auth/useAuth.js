import {useState} from 'react';
import {useDispatch, useSelector} from "../../../redux/store";
import { setToken, setCurrentUser, removeToken } from '../../../redux/slices/auth'
import { sleep } from '../../../utils/helpers'
import { useNavigate } from 'react-router-dom';
import axios from "../../../utils/axios";
import { useSnackbar } from 'notistack';

export default function useAuth() {
  const {enqueueSnackbar} = useSnackbar();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token, currentUser } = useSelector(state => state.auth)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function login(data) {
    try {
      setLoading(true)
      const response = await axios.get(`user/login?email=${data.email}`)
      if (response.data.recordset.length > 0) {
        const user = response.data.recordset[0];
        dispatch(setToken(user));
        dispatch(setCurrentUser(user));
        navigate('/');
        enqueueSnackbar(`Bienvenido/a, ${user.first_name}`, { variant: 'success' });
      } else {
        enqueueSnackbar('No se encontro un user con este email!', { variant: 'error' });
      }
      console.log(response);

    } catch(e) {
      enqueueSnackbar(JSON.stringify(e), { variant: 'error' });
    } finally {
      setLoading(false)
    }
  }

  function logout() {
    dispatch(removeToken());
    // dispatch(setCurrentUser({}));
    navigate('/login');
  }

  return {login, logout, token, currentUser, loading, error};
}
