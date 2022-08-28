import {Box, Button, Paper} from "@mui/material";

export default function BottomMenu({ actions }) {
  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: 90,
        borderTopLeftRadius: 50,
        zIndex: 111,
        borderTopRightRadius: 50,
        padding: '1.5rem',
      }}
      elevation={4}
    >
      <Box display='flex' justifyContent='center' flexWrap='wrap'>
        {
          actions.map((action, index) => (
            <Button
              sx={{ mx: 2}}
              key={index}
              onClick={action.fn}
              variant={action.main ? 'contained' : 'text'}
              disabled={action.disabled}
            >
              {action.label}
            </Button>
          ))
        }
      </Box>
    </Paper>
  )
}
