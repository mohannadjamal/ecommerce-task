import { Link } from 'react-router-dom';

import {
  Box,
  createTheme,
  Divider,
  IconButton,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ThemeProvider } from '@emotion/react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import RssFeedIcon from '@mui/icons-material/RssFeed';

import visa from '../../images/visa.png';
import mastercard from '../../images/master.png';
import stripe from '../../images/stripe.png';
import paypal from '../../images/paypal.png';
import discover from '../../images/discover.png';

const componentTheme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'body2',
          },
          style: {
            fontSize: 14,
          },
        },
        {
          props: {
            variant: 'subtitle1',
          },
          style: {
            fontWeight: 700,
          },
        },
      ],
    },
  },
});

const useStyles = makeStyles({
  header1: {
    color: '#a9a9a9',
    marginBottom: '1rem',
  },
  icon: {
    color: '#dedede',
  },
  header2: {
    marginBottom: '2rem',
  },
  infoContainer: {
    minWidth: '11rem',
  },
  locationItem: {
    color: '#5d5d5d',
    marginBottom: '1.2rem',
  },
  linkItem: {
    color: '#a9a9a9',
    marginBottom: '0.5rem',
  },
  paymentItem: {
    marginLeft: '1rem',
    opacity: 0.5,
    width: '2.5rem',
    borderRadius: '2.5px',
    filter: 'grayscale(100%)',
  },
});
function Footer() {
  const classes = useStyles();
  return (
    <Box>
      <ThemeProvider theme={componentTheme}>
        <Box
          sx={{
            width: 1,
            backgroundColor: '#252525',
            color: '#dedede',
            padding: '0 10%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingY: 4,
            }}
          >
            <Box
              sx={{
                width: '35%',
                display: 'inline-flex',
                justifyContent: 'space-between',
                alignItems: 'cetner',
              }}
            >
              <Box>
                <Typography variant='body2' className={classes.header1}>
                  Our office Address
                </Typography>
                <Typography variant='subtitle1'>
                  169 Florida Ave, L.A City
                </Typography>
              </Box>
              <Box>
                <Typography variant='body2' className={classes.header1}>
                  Please call Us:
                </Typography>
                <Typography variant='subtitle1'>(+84) 1234 686 9669</Typography>
              </Box>
            </Box>
            <Box>
              <IconButton className={classes.icon}>
                <FacebookIcon />
              </IconButton>
              <IconButton className={classes.icon}>
                <TwitterIcon />
              </IconButton>
              <IconButton className={classes.icon}>
                <PinterestIcon />
              </IconButton>
              <IconButton className={classes.icon}>
                <GoogleIcon />
              </IconButton>
              <IconButton className={classes.icon}>
                <InstagramIcon />
              </IconButton>
              <IconButton className={classes.icon}>
                <RssFeedIcon />
              </IconButton>
            </Box>
          </Box>
          <Divider sx={{ backgroundColor: '#5d5d5d' }} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingTop: 5,
              paddingBottom: 3,
            }}
          >
            <Box className={classes.infoContainer}>
              <Typography variant='h6' className={classes.header2}>
                Our Stores
              </Typography>
              <List>
                <ListItem disablePadding>
                  <Typography variant='body2' className={classes.locationItem}>
                    501 Floor, Nguyen Ngoc Vu, Cau Glay, Ha Noi
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <Typography variant='body2' className={classes.locationItem}>
                    741 - 11A Sandiago, L.A City, USA
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <Typography variant='body2' className={classes.locationItem}>
                    1st Floor BrickHouse, 250 Wall Street, C.A City, UK
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <Typography variant='body2' className={classes.locationItem}>
                    5th Floor, 169 Green Lakes, WestBrown, Liverpool City
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <Typography variant='body2' className={classes.locationItem}>
                    628 Brooklyn Streen, Fullham District, Wales
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <Typography variant='body2' className={classes.locationItem}>
                    10001 Street, WinLow District, Mexico
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <Typography variant='body2' className={classes.locationItem}>
                    1st Floor BrickHouse, 250 Wall Street, C.A City, UK
                  </Typography>
                </ListItem>
              </List>
            </Box>
            <Box className={classes.infoContainer}>
              <Typography variant='h6' className={classes.header2}>
                My Account
              </Typography>
              <List>
                <ListItem component={Link} to='/' disablePadding>
                  <Typography variant='body2' className={classes.linkItem}>
                    My Cart
                  </Typography>
                </ListItem>
                <ListItem component={Link} to='/' disablePadding>
                  <Typography variant='body2' className={classes.linkItem}>
                    Check Out
                  </Typography>
                </ListItem>
                <ListItem component={Link} to='/' disablePadding>
                  <Typography variant='body2' className={classes.linkItem}>
                    Wishlist
                  </Typography>
                </ListItem>
                <ListItem component={Link} to='/' disablePadding>
                  <Typography variant='body2' className={classes.linkItem}>
                    Term & Policy
                  </Typography>
                </ListItem>
                <ListItem component={Link} to='/' disablePadding>
                  <Typography variant='body2' className={classes.linkItem}>
                    Your Account
                  </Typography>
                </ListItem>
              </List>
            </Box>
            <Box className={classes.infoContainer}>
              <Typography variant='h6' className={classes.header2}>
                Information
              </Typography>
              <List>
                <ListItem component={Link} to='/' disablePadding>
                  <Typography variant='body2' className={classes.linkItem}>
                    Shipping & Return
                  </Typography>
                </ListItem>
                <ListItem component={Link} to='/' disablePadding>
                  <Typography variant='body2' className={classes.linkItem}>
                    Giftcards
                  </Typography>
                </ListItem>
                <ListItem component={Link} to='/' disablePadding>
                  <Typography variant='body2' className={classes.linkItem}>
                    Track My Order
                  </Typography>
                </ListItem>
                <ListItem component={Link} to='/' disablePadding>
                  <Typography variant='body2' className={classes.linkItem}>
                    Term & Policy
                  </Typography>
                </ListItem>
                <ListItem component={Link} to='/' disablePadding>
                  <Typography variant='body2' className={classes.linkItem}>
                    FAQs
                  </Typography>
                </ListItem>
              </List>
            </Box>
            <Box className={classes.infoContainer}>
              <Typography variant='h6' className={classes.header2}>
                How to Buy
              </Typography>
              <List>
                <ListItem component={Link} to='/' disablePadding>
                  <Typography variant='body2' className={classes.linkItem}>
                    Making Payments
                  </Typography>
                </ListItem>
                <ListItem component={Link} to='/' disablePadding>
                  <Typography variant='body2' className={classes.linkItem}>
                    Delivery Options
                  </Typography>
                </ListItem>
                <ListItem component={Link} to='/' disablePadding>
                  <Typography variant='body2' className={classes.linkItem}>
                    Buyer Protection
                  </Typography>
                </ListItem>
                <ListItem component={Link} to='/' disablePadding>
                  <Typography variant='body2' className={classes.linkItem}>
                    New User Guide
                  </Typography>
                </ListItem>
                <ListItem component={Link} to='/' disablePadding>
                  <Typography variant='body2' className={classes.linkItem}>
                    Partner Ship
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: 1,
            padding: '1.2rem 10%',
            backgroundColor: '#1f1f1f',
            color: '#a9a9a9',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant='body2'>
            © 2022 Made by Mohannad Jamal. All Rights Reserved.
          </Typography>
          <Box component='footer'>
            <Box
              component='img'
              className={classes.paymentItem}
              src={visa}
              alt='Visa'
            ></Box>
            <Box
              component='img'
              src={mastercard}
              alt='MasterCard'
              className={classes.paymentItem}
            ></Box>
            <Box
              component='img'
              src={paypal}
              alt='PayPal'
              className={classes.paymentItem}
            ></Box>
            <Box
              component='img'
              src={stripe}
              alt='Stripe'
              className={classes.paymentItem}
            ></Box>
            <Box
              component='img'
              src={discover}
              alt='Discrover'
              className={classes.paymentItem}
            ></Box>
          </Box>
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default Footer;
