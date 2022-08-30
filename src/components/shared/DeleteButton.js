import {IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {useConfirmationModalContext} from "../../hooks/useConfirmationModalContext";

export default function DeleteButton(props) {
  const modalContext = useConfirmationModalContext();

  const handleOnClick = async () => {
    const result = await modalContext.showConfirmation(props.item);
    result && props.onClick();
  };

  return (
    <IconButton onClick={handleOnClick}>
      <DeleteIcon />
    </IconButton>
  )
};

