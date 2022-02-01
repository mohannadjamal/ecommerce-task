import { IconButton, Badge, Box, Typography } from '@mui/material';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import logo from '../../images/logo.svg';

function Banner() {
  return (
    <Box
      sx={{
        width: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 9%',
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
            <AutorenewIcon fontSize='large' style={{ color: 'black' }} />
          </Badge>
        </IconButton>
        <IconButton>
          <Badge badgeContent={0} color='error' showZero>
            <FavoriteBorderIcon fontSize='large' style={{ color: 'black' }} />
          </Badge>
        </IconButton>
        <IconButton>
          <Badge badgeContent={0} color='error' showZero>
            <ShoppingCartOutlinedIcon
              fontSize='large'
              style={{ color: 'black' }}
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
          <Typography variant='body2'>$0.00</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Banner;
