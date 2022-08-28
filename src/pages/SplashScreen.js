import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
import { Box, Button, Typography, Container } from "@mui/material";
// mantenedorAdmin
import {MotionContainer, varBounceIn, varBounceInSplash, varBouncInSplash} from "../components/animate";
import Page from "../components/Page";
import { PageNotFoundIllustration } from "../assets";
import Logo from '../assets/alishop-logo.png';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  display: "flex",
  minHeight: "100%",
  alignItems: "center",
  backgroundColor: '#000000',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

// ----------------------------------------------------------------------

export default function SplashScreen() {
  return (
    <RootStyle title="Cargando... | Alishop">
      <Container>
        <MotionContainer initial="initial" open>
          <Box sx={{ maxWidth: 480, margin: "auto", textAlign: "center" }}>
            <motion.div variants={varBounceInSplash}>
              <Box component='img' src={Logo} />
            </motion.div>
          </Box>
        </MotionContainer>
      </Container>
    </RootStyle>
  );
}
