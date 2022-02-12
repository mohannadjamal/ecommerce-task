import { useContext } from 'react';

import { IconButton, Badge, Box, Typography, Link } from '@mui/material';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import CartContext from '../../store/cart-context';

import logo from '../../images/logo.svg';

function Banner() {
  const cartCtx = useContext(CartContext);

  return (
    <Box
      sx={{
        width: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: { xs: ' 0 1rem', md: '0 10%' },
      }}
    >
      <Link href='/'>
        <Box
          component='img'
          src={logo}
          alt='Logo'
          sx={{
            height: 'auto',
            width: {
              xs: 100,
              sm: 200,
              md: 'initial',
            },
          }}
        />
      </Link>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <IconButton>
          <Badge badgeContent={0} color='error' showZero>
            <AutorenewIcon
              sx={{ color: 'black', fontSize: { xs: 16, sm: 24, md: 32 } }}
            />
          </Badge>
        </IconButton>
        <IconButton>
          <Badge badgeContent={0} color='error' showZero>
            <FavoriteBorderIcon
              sx={{ color: 'black', fontSize: { xs: 16, sm: 24, md: 32 } }}
            />
          </Badge>
        </IconButton>
        <IconButton component={Link} href='/cart'>
          <Badge badgeContent={cartCtx.totalProducts} color='error' showZero>
            <ShoppingCartOutlinedIcon
              sx={{ color: 'black', fontSize: { xs: 16, sm: 24, md: 32 } }}
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
          <Typography
            variant='body1'
            sx={{ fontWeight: 700, fontSize: { xs: 8, sm: 12, md: 18 } }}
          >
            Your Cart
          </Typography>
          <Typography
            variant='body2'
            sx={{ fontSize: { xs: 6, sm: 10, md: 16 } }}
          >
            ${cartCtx.totalPrice.toFixed(2)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Banner;
