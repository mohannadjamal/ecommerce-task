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
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import RssFeedIcon from '@mui/icons-material/RssFeed';

import styles from './Footer.module.scss';

import visa from '../../images/visa.png';
import mastercard from '../../images/master.png';
import stripe from '../../images/stripe.png';
import paypal from '../../images/paypal.png';
import discover from '../../images/discover.png';
import { ThemeProvider } from '@emotion/react';

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

function Footer() {
  return (
    <Box>
      <ThemeProvider theme={componentTheme}>
        <Box
          sx={{
            width: 1,
            height: 500,
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
                <Typography
                  variant='body2'
                  sx={{ color: '#a9a9a9', marginBottom: 1 }}
                >
                  Our office Address
                </Typography>
                <Typography variant='subtitle1'>
                  169 Florida Ave, L.A City
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant='body2'
                  sx={{ color: '#a9a9a9', marginBottom: 1 }}
                >
                  Please call Us:
                </Typography>
                <Typography variant='subtitle1'>(+84) 1234 686 9669</Typography>
              </Box>
            </Box>
            <Box>
              <IconButton style={{ color: '#dedede' }}>
                <FacebookIcon />
              </IconButton>
              <IconButton style={{ color: '#dedede' }}>
                <TwitterIcon />
              </IconButton>
              <IconButton style={{ color: '#dedede' }}>
                <PinterestIcon />
              </IconButton>
              <IconButton style={{ color: '#dedede' }}>
                <GoogleIcon />
              </IconButton>
              <IconButton style={{ color: '#dedede' }}>
                <InstagramIcon />
              </IconButton>
              <IconButton style={{ color: '#dedede' }}>
                <RssFeedIcon />
              </IconButton>
            </Box>
          </Box>
          <Divider sx={{ backgroundColor: '#5d5d5d' }} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingY: 7,
            }}
          >
            <Box>
              <Typography variant='h6' sx={{ marginBottom: 3 }}>
                Our Stores
              </Typography>
              <List>
                <ListItem disablePadding>
                  <Typography
                    variant='body2'
                    sx={{ color: '#5d5d5d', marginBottom: 2 }}
                  >
                    501 Floor, Nguyen Ngoc Vu, Cau Glay, Ha Noi
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <Typography
                    variant='body2'
                    sx={{ color: '#5d5d5d', marginBottom: 2 }}
                  >
                    741 - 11A Sandiago, L.A City, USA
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <Typography
                    variant='body2'
                    sx={{ color: '#5d5d5d', marginBottom: 2 }}
                  >
                    1st Floor BrickHouse, 250 Wall Street, C.A City, UK
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <Typography
                    variant='body2'
                    sx={{ color: '#5d5d5d', marginBottom: 2 }}
                  >
                    5th Floor, 169 Green Lakes, WestBrown, Liverpool City
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <Typography
                    variant='body2'
                    sx={{ color: '#5d5d5d', marginBottom: 2 }}
                  >
                    628 Brooklyn Streen, Fullham District, Wales
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <Typography
                    variant='body2'
                    sx={{ color: '#5d5d5d', marginBottom: 2 }}
                  >
                    10001 Street, WinLow District, Mexico
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <Typography
                    variant='body2'
                    sx={{ color: '#5d5d5d', marginBottom: 2 }}
                  >
                    1st Floor BrickHouse, 250 Wall Street, C.A City, UK
                  </Typography>
                </ListItem>
              </List>
            </Box>
            <div className={styles.links}>
              <h3>My Account</h3>
              <ul>
                <li>
                  <Link to='/'>My Cart</Link>
                </li>
                <li>
                  <Link to='/'>Check Out</Link>
                </li>
                <li>
                  <Link to='/'>Wishlist</Link>
                </li>
                <li>
                  <Link to='/'>Term & Policy</Link>
                </li>
                <li>
                  <Link to='/'>Your Account</Link>
                </li>
              </ul>
            </div>
            <div className={styles.links}>
              <h3>Information</h3>
              <ul>
                <li>
                  <Link to='/'>Shipping & Return</Link>
                </li>
                <li>
                  <Link to='/'>Giftcards</Link>
                </li>
                <li>
                  <Link to='/'>Track My Order</Link>
                </li>
                <li>
                  <Link to='/'>Term & Policy</Link>
                </li>
                <li>
                  <Link to='/'>FAQs</Link>
                </li>
              </ul>
            </div>
            <div className={styles.links}>
              <h3>How to Buy</h3>
              <ul>
                <li>
                  <Link to='/'>Making Payments</Link>
                </li>
                <li>
                  <Link to='/'>Delivery Options</Link>
                </li>
                <li>
                  <Link to='/'>Buyer Protection</Link>
                </li>
                <li>
                  <Link to='/'>New User Guide</Link>
                </li>
                <li>
                  <Link to='/'>Partnership</Link>
                </li>
              </ul>
            </div>
          </Box>
        </Box>
        <footer>
          <span>
            © 2022 Made by <b>Mohannad Jamal</b>. All Rights Reserved.
          </span>
          <div className={styles.payments}>
            <img src={visa} alt='Visa' className={styles.image}></img>
            <img
              src={mastercard}
              alt='MasterCard'
              className={styles.image}
            ></img>
            <img src={paypal} alt='PayPal' className={styles.image}></img>
            <img src={stripe} alt='Stripe' className={styles.image}></img>
            <img src={discover} alt='Visa' className={styles.image}></img>
          </div>
        </footer>
      </ThemeProvider>
    </Box>
  );
}

export default Footer;
