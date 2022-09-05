import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useSnackbar} from "notistack";
import axios from "../../../utils/axios";

export default function useUpdateUser() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar()



  async function editUser(data) {
    const json = {
      birthday: data.birthday.length > 10 ? data.birthday.substring(0, 10) : data.birthday,
      username: data.username,
      city: data.city,
      email: data.email,
      id: data.id.toString(),
      state: data.state,
      userType: data.user_type,
      password: data.password,
      profession: data.profession,
      socialFacebook: data.social_facebook,
      socialInstagram: data.social_instagram,
      socialTwitter: data.social_twitter,
      socialYoutube: data.social_youtube,
      phonNumber1: data.phone_number1,
      phonNumber2: data.phone_number2,
      imageData: data.image,
      imageType: data.imageType ? data.imageType : null,
      lastName: data.last_name,
      firstName: data.first_name,
      fiscalAddress: data.fiscal_address
    }
    try {
      setLoading(true);
      const response = await axios.put('user/updateData', json);
      if (response.status === 200) {
        navigate(-1)
        enqueueSnackbar('Se edito el usuario con exito!', {variant: 'success'} )
      }
    } catch (e) {
      console.log(e);
      enqueueSnackbar('Error!', {variant: 'error'} )
    } finally {
      setLoading(false);
    }
  }
  return {editUser, loading}
}
