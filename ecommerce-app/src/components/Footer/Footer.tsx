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

function Footer() {
  return (
    <Box>
      <ThemeProvider theme={componentTheme}>
        <Box
          sx={{
            width: 1,
            backgroundColor: '#252525',
            color: '#dedede',
            padding: { xs: '0 1rem', md: '0 10%' },
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
                  sx={{ color: '#a9a9a9', marginBottom: '1rem !important' }}
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
                  sx={{ color: '#a9a9a9', marginBottom: '1rem !important' }}
                >
                  Please call Us:
                </Typography>
                <Typography variant='subtitle1'>(+84) 1234 686 9669</Typography>
              </Box>
            </Box>
            <Box>
              <IconButton>
                <FacebookIcon sx={{ color: '#dedede' }} />
              </IconButton>
              <IconButton>
                <TwitterIcon sx={{ color: '#dedede' }} />
              </IconButton>
              <IconButton>
                <PinterestIcon sx={{ color: '#dedede' }} />
              </IconButton>
              <IconButton>
                <GoogleIcon sx={{ color: '#dedede' }} />
              </IconButton>
              <IconButton>
                <InstagramIcon sx={{ color: '#dedede' }} />
              </IconButton>
              <IconButton>
                <RssFeedIcon sx={{ color: '#dedede' }} />
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
            <Box sx={{ minWidth: { sm: 0, md: '11rem' } }}>
              <Typography variant='h6' sx={{ marginBottom: '2rem !important' }}>
                Our Stores
              </Typography>
              <List>
                <ListItem
                  disablePadding
                  sx={{ color: '#5d5d5d', marginBottom: '1.2rem' }}
                >
                  <Typography variant='body2'>
                    501 Floor, Nguyen Ngoc Vu, Cau Glay, Ha Noi
                  </Typography>
                </ListItem>
                <ListItem
                  disablePadding
                  sx={{ color: '#5d5d5d', marginBottom: '1.2rem' }}
                >
                  <Typography variant='body2'>
                    741 - 11A Sandiago, L.A City, USA
                  </Typography>
                </ListItem>
                <ListItem
                  disablePadding
                  sx={{ color: '#5d5d5d', marginBottom: '1.2rem' }}
                >
                  <Typography variant='body2'>
                    1st Floor BrickHouse, 250 Wall Street, C.A City, UK
                  </Typography>
                </ListItem>
                <ListItem
                  disablePadding
                  sx={{ color: '#5d5d5d', marginBottom: '1.2rem' }}
                >
                  <Typography variant='body2'>
                    5th Floor, 169 Green Lakes, WestBrown, Liverpool City
                  </Typography>
                </ListItem>
                <ListItem
                  disablePadding
                  sx={{ color: '#5d5d5d', marginBottom: '1.2rem' }}
                >
                  <Typography variant='body2'>
                    628 Brooklyn Streen, Fullham District, Wales
                  </Typography>
                </ListItem>
                <ListItem
                  disablePadding
                  sx={{ color: '#5d5d5d', marginBottom: '1.2rem' }}
                >
                  <Typography variant='body2'>
                    10001 Street, WinLow District, Mexico
                  </Typography>
                </ListItem>
                <ListItem
                  disablePadding
                  sx={{ color: '#5d5d5d', marginBottom: '1.2rem' }}
                >
                  <Typography variant='body2'>
                    1st Floor BrickHouse, 250 Wall Street, C.A City, UK
                  </Typography>
                </ListItem>
              </List>
            </Box>
            <Box sx={{ minWidth: { sm: 0, md: '11rem' } }}>
              <Typography variant='h6' sx={{ marginBottom: '2rem !important' }}>
                My Account
              </Typography>
              <List>
                <ListItem
                  component={Link}
                  to='/'
                  disablePadding
                  sx={{ color: '#a9a9a9', marginBottom: '0.5rem' }}
                >
                  <Typography variant='body2'>My Cart</Typography>
                </ListItem>
                <ListItem
                  component={Link}
                  to='/'
                  disablePadding
                  sx={{ color: '#a9a9a9', marginBottom: '0.5rem' }}
                >
                  <Typography variant='body2'>Check Out</Typography>
                </ListItem>
                <ListItem
                  component={Link}
                  to='/'
                  disablePadding
                  sx={{ color: '#a9a9a9', marginBottom: '0.5rem' }}
                >
                  <Typography variant='body2'>Wishlist</Typography>
                </ListItem>
                <ListItem
                  component={Link}
                  to='/'
                  disablePadding
                  sx={{ color: '#a9a9a9', marginBottom: '0.5rem' }}
                >
                  <Typography variant='body2'>Term & Policy</Typography>
                </ListItem>
                <ListItem
                  component={Link}
                  to='/'
                  disablePadding
                  sx={{ color: '#a9a9a9', marginBottom: '0.5rem' }}
                >
                  <Typography variant='body2'>Your Account</Typography>
                </ListItem>
              </List>
            </Box>
            <Box sx={{ minWidth: { sm: 0, md: '11rem' } }}>
              <Typography variant='h6' sx={{ marginBottom: '2rem !important' }}>
                Information
              </Typography>
              <List>
                <ListItem
                  component={Link}
                  to='/'
                  disablePadding
                  sx={{ color: '#a9a9a9', marginBottom: '0.5rem' }}
                >
                  <Typography variant='body2'>Shipping & Return</Typography>
                </ListItem>
                <ListItem
                  component={Link}
                  to='/'
                  disablePadding
                  sx={{ color: '#a9a9a9', marginBottom: '0.5rem' }}
                >
                  <Typography variant='body2'>Giftcards</Typography>
                </ListItem>
                <ListItem
                  component={Link}
                  to='/'
                  disablePadding
                  sx={{ color: '#a9a9a9', marginBottom: '0.5rem' }}
                >
                  <Typography variant='body2'>Track My Order</Typography>
                </ListItem>
                <ListItem
                  component={Link}
                  to='/'
                  disablePadding
                  sx={{ color: '#a9a9a9', marginBottom: '0.5rem' }}
                >
                  <Typography variant='body2'>Term & Policy</Typography>
                </ListItem>
                <ListItem
                  component={Link}
                  to='/'
                  disablePadding
                  sx={{ color: '#a9a9a9', marginBottom: '0.5rem' }}
                >
                  <Typography variant='body2'>FAQs</Typography>
                </ListItem>
              </List>
            </Box>
            <Box sx={{ minWidth: { sm: 0, md: '11rem' } }}>
              <Typography variant='h6' sx={{ marginBottom: '2rem !important' }}>
                How to Buy
              </Typography>
              <List>
                <ListItem
                  component={Link}
                  to='/'
                  disablePadding
                  sx={{ color: '#a9a9a9', marginBottom: '0.5rem' }}
                >
                  <Typography variant='body2'>Making Payments</Typography>
                </ListItem>
                <ListItem
                  component={Link}
                  to='/'
                  disablePadding
                  sx={{ color: '#a9a9a9', marginBottom: '0.5rem' }}
                >
                  <Typography variant='body2'>Delivery Options</Typography>
                </ListItem>
                <ListItem
                  component={Link}
                  to='/'
                  disablePadding
                  sx={{ color: '#a9a9a9', marginBottom: '0.5rem' }}
                >
                  <Typography variant='body2'>Buyer Protection</Typography>
                </ListItem>
                <ListItem
                  component={Link}
                  to='/'
                  disablePadding
                  sx={{ color: '#a9a9a9', marginBottom: '0.5rem' }}
                >
                  <Typography variant='body2'>New User Guide</Typography>
                </ListItem>
                <ListItem
                  component={Link}
                  to='/'
                  disablePadding
                  sx={{ color: '#a9a9a9', marginBottom: '0.5rem' }}
                >
                  <Typography variant='body2'>Partner Ship</Typography>
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
              sx={{
                marginLeft: '1rem',
                opacity: 0.5,
                width: '2.5rem',
                borderRadius: '2.5px',
                filter: 'grayscale(100%)',
              }}
              src={visa}
              alt='Visa'
            />
            <Box
              component='img'
              src={mastercard}
              alt='MasterCard'
              sx={{
                marginLeft: '1rem',
                opacity: 0.5,
                width: '2.5rem',
                borderRadius: '2.5px',
                filter: 'grayscale(100%)',
              }}
            />
            <Box
              component='img'
              src={paypal}
              alt='PayPal'
              sx={{
                marginLeft: '1rem',
                opacity: 0.5,
                width: '2.5rem',
                borderRadius: '2.5px',
                filter: 'grayscale(100%)',
              }}
            />
            <Box
              component='img'
              src={stripe}
              alt='Stripe'
              sx={{
                marginLeft: '1rem',
                opacity: 0.5,
                width: '2.5rem',
                borderRadius: '2.5px',
                filter: 'grayscale(100%)',
              }}
            />
            <Box
              component='img'
              src={discover}
              alt='Discrover'
              sx={{
                marginLeft: '1rem',
                opacity: 0.5,
                width: '2.5rem',
                borderRadius: '2.5px',
                filter: 'grayscale(100%)',
              }}
            />
          </Box>
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default Footer;
