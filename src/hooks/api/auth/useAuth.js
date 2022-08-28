import {useState} from 'react';
import {useDispatch, useSelector} from "../../../redux/store";
import { setToken, setCurrentUser } from '../../../redux/slices/auth'
import { sleep } from '../../../utils/helpers'
import { useNavigate } from 'react-router-dom';

export default function useAuth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token, currentUser } = useSelector(state => state.auth)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function login() {
    try {
      setLoading(true)
      dispatch(setToken('tokendeejemplo'));
      dispatch(setCurrentUser(JSON.stringify({
        name: 'user de prueba',
        store: 'store de prueba'
      })));
      await sleep(2000);
      navigate('/');
    } catch(e) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }

  function logout() {
    dispatch(setToken(null));
    dispatch(setCurrentUser({}));
    navigate('/login');
  }

  return {login, logout, token, currentUser, loading, error};
}
