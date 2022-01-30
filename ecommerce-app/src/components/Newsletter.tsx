import { Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

import styles from './Newsletter.module.scss';

const TextBox = styled(TextField)(() => ({
  '& fieldset': {
    borderRadius: '0px',
  },
}));

function Newsletter() {
  return (
    <div className={styles.container}>
      <h1>Newsletter</h1>
      <span>Subscribe to recieve coupons and gift cards</span>
      <form>
        <TextBox
          size='small'
          placeholder='Email address'
          sx={{
            width: '80%',
            backgroundColor: '#FFFFFF',
          }}
        ></TextBox>
        <Button
          type='submit'
          variant='contained'
          className={styles.btn}
          sx={{
            borderRadius: 0,
            backgroundColor: '#ab1d2b',
          }}
        >
          SUBSCRIBE
        </Button>
      </form>
    </div>
  );
}
export default Newsletter;
