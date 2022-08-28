import {styled} from "@mui/material/styles";

import Page from '../../components/Page'
import {useNavigate} from 'react-router-dom';
import BottomMenu from "../../components/shared/BottomMenu";
import DeleteMessage from "../../components/shared/DeleteMessage";

const APP_BAR_MOBILE = 32;
const APP_BAR_DESKTOP = 44;

const RootStyle = styled(Page)(({theme}) => ({
  minHeight: "100%",
  overflowX: 'hidden',
  width: "100%",
  position: 'relative',
  paddingBottom: '7rem',
  paddingTop: APP_BAR_MOBILE,
  [theme.breakpoints.up("md")]: {
    paddingTop: APP_BAR_DESKTOP,
  },
}));

export default function CategoryDelete() {
  const navigate = useNavigate();

  const actions = [
    {label: 'No!, Volver', fn: () => navigate(-1), main: false, disabled: false},
    {label: 'Eliminar', fn: () => navigate(-1), main: true, disabled: false},
  ]

  return (
    <RootStyle title='Proveedores | Alishop'>
      <DeleteMessage msg='¿Seguro que deseas borrar esta Categoria?'/>
      <BottomMenu actions={actions}/>
    </RootStyle>
  )
}




