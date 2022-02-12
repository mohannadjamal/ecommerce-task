import {
  Box,
  Button,
  createTheme,
  responsiveFontSizes,
  TextField,
  ThemeProvider,
  Typography,
} from '@mui/material';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function Newsletter() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: '#ebebeb',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingY: 6,
        }}
      >
        <Typography
          variant='h4'
          sx={{
            fontWeight: 700,
          }}
        >
          Newsletter
        </Typography>

        <Typography
          variant='subtitle1'
          sx={{
            color: '#a9a9a9',
            marginBottom: 4,
          }}
        >
          Subscribe to receive coupons and gift cards
        </Typography>
        <Box
          component='form'
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: {
              xs: 0.95,
              sm: 0.8,
              md: 0.6,
              lg: 0.45,
            },
          }}
        >
          <TextField
            size='small'
            placeholder='Email address'
            sx={{
              '& fieldset': {
                borderRadius: '0px',
              },
              '& ::placeholder': {
                color: '#808080',
                fontWeight: 500,
              },
              backgroundColor: '#FFFFFF',
              width: '80%',
              marginRight: '1rem',
            }}
          ></TextField>
          <Button
            type='submit'
            variant='contained'
            sx={{
              fontWeight: 700,
              width: '10rem',
              height: '3rem',
              borderRadius: 0,
              backgroundColor: '#ab1d2b',
              boxShadow: 0,
              '&:hover': {
                backgroundColor: '#d92121',
              },
            }}
          >
            SUBSCRIBE
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
export default Newsletter;
