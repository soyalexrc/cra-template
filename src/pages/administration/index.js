import {
  Box,
  LinearProgress,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  Button,
  TableHead,
  TableBody,
  Grid,
  Pagination, TextField, InputAdornment, IconButton, Paper, useMediaQuery
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import {mockUserTable} from '../../utils/mockData';
import {useState} from "react";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from 'react-router-dom'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {formatPrice} from "../../utils/format";
import { openWhatsApp } from '../../utils/helpers';
import DeleteButton from "../../components/shared/DeleteButton";
import Page from "../../components/Page";

export default function Administration() {
  const largeScreen = useMediaQuery((theme) => theme.breakpoints.up('md'))
  const navigate = useNavigate();
  const [data, setData] = useState(mockUserTable.data);
  const [length, setLength] = useState(mockUserTable.length);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('')

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Page title='Administracion | Vision Inmobiliaria'>
      <Typography>Administracion</Typography>
    </Page>
  )
}
