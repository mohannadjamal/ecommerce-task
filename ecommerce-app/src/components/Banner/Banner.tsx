import { makeStyles } from '@mui/styles';
import { IconButton, Badge, Box, Typography } from '@mui/material';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import logo from '../../images/logo.svg';

const useStyles = makeStyles({
  icon: {
    color: 'black',
  },
});
function Banner() {
  const classes = useStyles();
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
            <AutorenewIcon fontSize='large' className={classes.icon} />
          </Badge>
        </IconButton>
        <IconButton>
          <Badge badgeContent={0} color='error' showZero>
            <FavoriteBorderIcon fontSize='large' className={classes.icon} />
          </Badge>
        </IconButton>
        <IconButton>
          <Badge badgeContent={0} color='error' showZero>
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
          <Typography variant='body2'>$0.00</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Banner;
