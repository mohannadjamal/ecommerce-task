import { IconButton, Badge } from '@mui/material';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import styles from './Banner.module.scss';

import logo from '../../images/logo.svg';

function Banner() {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt='Logo'></img>
      <div className={styles.box}>
        <IconButton className={styles.icon}>
          <Badge badgeContent={0} color='error' showZero>
            <AutorenewIcon fontSize='large' />
          </Badge>
        </IconButton>
        <IconButton className={styles.icon}>
          <Badge badgeContent={0} color='error' showZero>
            <FavoriteBorderIcon fontSize='large' />
          </Badge>
        </IconButton>
        <IconButton className={styles.icon}>
          <Badge badgeContent={0} color='error' showZero>
            <ShoppingCartOutlinedIcon fontSize='large' />
          </Badge>
        </IconButton>
        <div className={styles.cartinfo}>
          <span>Your Cart</span>
          <span className={styles.cartinfo__money}>$0.00</span>
        </div>
      </div>
    </div>
  );
}

export default Banner;
