
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography} from "@mui/material";
import {createContext, useRef, useState} from 'react';

export const ConfirmationModalContext = createContext({});

export const ConfirmationModalContextProvider = ({children}) => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [item, setItem] = useState('')
  const resolver = useRef();

  const handleShow = (itemName) => {
    setShowConfirmationModal(true);
    if (itemName) {
      setItem(itemName)
    }  else {
      setItem('')
    }

    return new Promise(function (resolve) {
      resolver.current = resolve;
    });
  };

  const handleOk = () => {
    resolver.current && resolver.current(true);
    setShowConfirmationModal(false)
  };

  const handleCancel = () => {
    resolver.current && resolver.current(false);
    setShowConfirmationModal(false)
  };

  const value = {
    showConfirmation : handleShow
  }

  return (
    <ConfirmationModalContext.Provider value={value}>
      {children}
      <Dialog
        open={showConfirmationModal}
        onClose={() => setShowConfirmationModal(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" align={'center'}>
          Deseas eliminar este elemento ?
        </DialogTitle>
        <DialogContent sx={{ mt: 2 }}>
          <Typography align='center' fontSize='22px'>
            {item && item}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' color='error' onClick={handleCancel}>Cancelar</Button>
          <Button variant='contained' color='secondary' onClick={handleOk} autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </ConfirmationModalContext.Provider>
  )
};
