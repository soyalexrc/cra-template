import {useState} from 'react';
import {useDispatch, useSelector} from "../../../redux/store";
import { setToken, setCurrentUser, removeToken } from '../../../redux/slices/auth'
import { sleep } from '../../../utils/helpers'
import { useNavigate } from 'react-router-dom';
import axios from "../../../utils/axios";
import { useSnackbar } from 'notistack';
import * as CryptoJS from "crypto-js";

export default function useAuth() {
  const {enqueueSnackbar} = useSnackbar();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token, currentUser } = useSelector(state => state.auth)
  const [encryptedPass, setEncryptedPass] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const masterCryptoKey = '123456$#@$^@1ERF'

  function encryptValue(keys, value){
    const key = CryptoJS.enc.Utf8.parse(keys);
    const iv = CryptoJS.enc.Utf8.parse(keys);
    const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key,
      {
        keySize: 128 / 8,
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });

    return encrypted.toString();
  }

  async function login(data) {
    try {
      setLoading(true)
      const response = await axios.get(`user/login?email=${data.email}`)
      if (response.data.recordset.length > 0) {
        const user = response.data.recordset[0];
        // const encryptedPassword = encryptValue(masterCryptoKey, user.password);
        // console.log(encryptedPassword === user.)
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
