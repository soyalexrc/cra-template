import NProgress from 'nprogress';
import { useEffect, useMemo } from 'react';
// material
import { styled} from '@mui/material/styles';
import {Backdrop, CircularProgress, GlobalStyles} from '@mui/material';
//

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white'
}));

// ----------------------------------------------------------------------

export function ProgressBarStyle() {
  // const theme = useTheme();

  return (
    <GlobalStyles
      styles={{
        '#nprogress': {
          pointerEvents: 'none',
          '& .bar': {
            top: 0,
            left: 0,
            height: 2,
            width: '100%',
            position: 'fixed',
            // zIndex: theme.zIndex.snackbar,
            // backgroundColor: theme.palette.primary.main,
            // boxShadow: `0 0 2px ${theme.palette.primary.main}`
          },
          '& .peg': {
            right: 0,
            opacity: 1,
            width: 100,
            height: '100%',
            display: 'block',
            position: 'absolute',
            transform: 'rotate(3deg) translate(0px, -4px)',
            // boxShadow: `0 0 10px ${theme.palette.primary.main}, 0 0 5px ${theme.palette.primary.main}`
          }
        }
      }}
    />
  );
}

function ProgressBar() {
  NProgress.configure({
    showSpinner: false
  });

  useMemo(() => {
    NProgress.start();
  }, []);

  useEffect(() => {
    NProgress.done();
  }, []);

  return null;
}

export default function LoadingScreen({ ...other }) {
  return (
    <>
      <ProgressBar />

      <RootStyle {...other}>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="secondary" />
        </Backdrop>
      </RootStyle>
    </>
  );
}
