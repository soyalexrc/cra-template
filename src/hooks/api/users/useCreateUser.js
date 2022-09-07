import {useState} from 'react';
import axios from "../../../utils/axios";
import * as CryptoJS from 'crypto-js';
import {useSnackbar} from "notistack";
import { useNavigate } from 'react-router-dom';

export default function useCreateUser() {
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate();
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

  async function createUser(data) {
    const body = {...data, password: encryptValue(masterCryptoKey, data.password)}
    console.log(body);
    try {
      setLoading(true);
      const response = await axios.post('user/addNewData', data);
      if (response.status === 200) {
        enqueueSnackbar('Se creo el usuario con exito!', {variant: 'success'} )
        navigate(-1)
      }
    } catch (e) {
      console.log(e);
      enqueueSnackbar('Error!', {variant: 'error'} )
    } finally {
      setLoading(false);
    }
  }
  return {createUser, loading};
}
