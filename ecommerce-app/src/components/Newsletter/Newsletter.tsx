import { Box, Button, TextField, Typography } from '@mui/material';

/*
const TextBox = styled(TextField)(() => ({
  '& fieldset': {
    borderRadius: '0px',
  },
}));
*/
function Newsletter() {
  return (
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
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '45%',
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
          }}
        ></TextField>
        <Button
          type='submit'
          variant='contained'
          sx={{
            fontWeight: 700,
            width: '10rem',
            height: '2.6rem',
            borderRadius: 0,
            backgroundColor: '#ab1d2b',
          }}
        >
          SUBSCRIBE
        </Button>
      </Box>
    </Box>
  );
}
export default Newsletter;
