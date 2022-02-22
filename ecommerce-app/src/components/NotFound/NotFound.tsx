import { Box, Typography } from '@mui/material';

function NotFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
      }}
    >
      <Typography variant='h3'>404 Page Not Found</Typography>
      <Typography variant='body1'>Please try a different page</Typography>
    </Box>
  );
}

export default NotFound;
