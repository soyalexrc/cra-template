import {useContext}  from 'react';
import {ConfirmationModalContext} from '../context/ConfirmationModalContext'

export const useConfirmationModalContext = () => useContext(ConfirmationModalContext);
