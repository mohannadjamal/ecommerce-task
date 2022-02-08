import { useContext } from 'react';

import { Link } from 'react-router-dom';

import { makeStyles } from '@mui/styles';
import { IconButton, Badge, Box, Typography } from '@mui/material';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import CartContext from '../../store/cart-context';

import logo from '../../images/logo.svg';

const useStyles = makeStyles({
  icon: {
    color: 'black',
  },
});

function Banner() {
  const cartCtx = useContext(CartContext);

  const classes = useStyles();

  return (
    <Box
      sx={{
        width: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 10%',
      }}
    >
      <img src={logo} alt='Logo'></img>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <IconButton>
          <Badge badgeContent={0} color='error' showZero>
            <AutorenewIcon fontSize='large' className={classes.icon} />
          </Badge>
        </IconButton>
        <IconButton>
          <Badge badgeContent={0} color='error' showZero>
            <FavoriteBorderIcon fontSize='large' className={classes.icon} />
          </Badge>
        </IconButton>
        <IconButton component={Link} to='/cart'>
          <Badge badgeContent={cartCtx.totalProducts} color='error' showZero>
            <ShoppingCartOutlinedIcon
              fontSize='large'
              className={classes.icon}
            />
          </Badge>
        </IconButton>
        <Box
          sx={{
            display: 'inline-flex',
            flexDirection: 'column',
            textAlign: 'center',
            marginLeft: 2,
          }}
        >
          <Typography variant='body1' sx={{ fontWeight: 700 }}>
            Your Cart
          </Typography>
          <Typography variant='body2'>
            ${cartCtx.totalPrice.toFixed(2)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Banner;
