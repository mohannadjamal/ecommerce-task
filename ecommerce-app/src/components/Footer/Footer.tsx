import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

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

import visa from '../../images/visa.png';
import mastercard from '../../images/master.png';
import stripe from '../../images/stripe.png';
import paypal from '../../images/paypal.png';
import discover from '../../images/discover.png';

function Footer() {
  const { t } = useTranslation();
  return (
    <Box>
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
              width: '50%',
              display: 'inline-flex',
              justifyContent: 'space-between',
              alignItems: 'cetner',
            }}
          >
            <Box>
              <Typography
                variant='body2'
                sx={{
                  color: '#a9a9a9',
                  marginBottom: '1rem',
                  fontSize: { xs: 8, sm: 10, md: 12, lg: 14 },
                }}
              >
                {t('footer.address.title')}
              </Typography>
              <Typography
                variant='subtitle1'
                sx={{ fontSize: { xs: 10, sm: 12, md: 14, lg: 16 } }}
              >
                169 Florida Ave, L.A City
              </Typography>
            </Box>
            <Box>
              <Typography
                variant='body2'
                sx={{
                  color: '#a9a9a9',
                  marginBottom: '1rem',
                  fontSize: { xs: 8, sm: 10, md: 12, lg: 14 },
                }}
              >
                {t('footer.phone.title')}
              </Typography>
              <Typography
                dir='ltr'
                variant='subtitle1'
                sx={{ fontSize: { xs: 10, sm: 12, md: 14, lg: 16 } }}
              >
                (+84) 1234 686 9669
              </Typography>
            </Box>
          </Box>
          <Box>
            <IconButton>
              <FacebookIcon
                sx={{
                  color: '#dedede',
                  fontSize: { xs: 12, sm: 16, md: 24, lg: 32 },
                }}
              />
            </IconButton>
            <IconButton>
              <TwitterIcon
                sx={{
                  color: '#dedede',
                  fontSize: { xs: 12, sm: 16, md: 24, lg: 32 },
                }}
              />
            </IconButton>
            <IconButton>
              <PinterestIcon
                sx={{
                  color: '#dedede',
                  fontSize: { xs: 12, sm: 16, md: 24, lg: 32 },
                }}
              />
            </IconButton>
            <IconButton>
              <GoogleIcon
                sx={{
                  color: '#dedede',
                  fontSize: { xs: 12, sm: 16, md: 24, lg: 32 },
                }}
              />
            </IconButton>
            <IconButton>
              <InstagramIcon
                sx={{
                  color: '#dedede',
                  fontSize: { xs: 12, sm: 16, md: 24, lg: 32 },
                }}
              />
            </IconButton>
            <IconButton>
              <RssFeedIcon
                sx={{
                  color: '#dedede',
                  fontSize: { xs: 12, sm: 16, md: 24, lg: 32 },
                }}
              />
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
          <Box>
            <Typography
              variant='h6'
              sx={{
                marginBottom: '2rem',
                fontSize: { xs: 10, sm: 12, md: 16, lg: 20 },
              }}
            >
              {t('footer.stores.title')}
            </Typography>
            <List>
              <ListItem
                disablePadding
                sx={{ color: '#5d5d5d', marginBottom: '1.2rem' }}
              >
                <Typography
                  variant='body2'
                  sx={{
                    fontSize: { xs: 8, sm: 10, md: 12, lg: 14 },
                  }}
                >
                  501 Floor, Nguyen Ngoc Vu, Cau Glay, Ha Noi
                </Typography>
              </ListItem>
              <ListItem
                disablePadding
                sx={{ color: '#5d5d5d', marginBottom: '1.2rem' }}
              >
                <Typography
                  variant='body2'
                  sx={{
                    fontSize: { xs: 8, sm: 10, md: 12, lg: 14 },
                  }}
                >
                  741 - 11A Sandiago, L.A City, USA
                </Typography>
              </ListItem>
              <ListItem
                disablePadding
                sx={{ color: '#5d5d5d', marginBottom: '1.2rem' }}
              >
                <Typography
                  variant='body2'
                  sx={{
                    fontSize: { xs: 8, sm: 10, md: 12, lg: 14 },
                  }}
                >
                  1st Floor BrickHouse, 250 Wall Street, C.A City, UK
                </Typography>
              </ListItem>
              <ListItem
                disablePadding
                sx={{ color: '#5d5d5d', marginBottom: '1.2rem' }}
              >
                <Typography
                  variant='body2'
                  sx={{
                    fontSize: { xs: 8, sm: 10, md: 12, lg: 14 },
                  }}
                >
                  5th Floor, 169 Green Lakes, WestBrown, Liverpool City
                </Typography>
              </ListItem>
              <ListItem
                disablePadding
                sx={{ color: '#5d5d5d', marginBottom: '1.2rem' }}
              >
                <Typography
                  variant='body2'
                  sx={{
                    fontSize: { xs: 8, sm: 10, md: 12, lg: 14 },
                  }}
                >
                  628 Brooklyn Streen, Fullham District, Wales
                </Typography>
              </ListItem>
              <ListItem
                disablePadding
                sx={{ color: '#5d5d5d', marginBottom: '1.2rem' }}
              >
                <Typography
                  variant='body2'
                  sx={{
                    fontSize: { xs: 8, sm: 10, md: 12, lg: 14 },
                  }}
                >
                  10001 Street, WinLow District, Mexico
                </Typography>
              </ListItem>
              <ListItem
                disablePadding
                sx={{ color: '#5d5d5d', marginBottom: '1.2rem' }}
              >
                <Typography
                  variant='body2'
                  sx={{
                    fontSize: { xs: 8, sm: 10, md: 12, lg: 14 },
                  }}
                >
                  1st Floor BrickHouse, 250 Wall Street, C.A City, UK
                </Typography>
              </ListItem>
            </List>
          </Box>
          <Box>
            <Typography
              variant='h6'
              sx={{
                marginBottom: '2rem',
                fontSize: { xs: 10, sm: 12, md: 16, lg: 20 },
              }}
            >
              {t('footer.account.title')}
            </Typography>
            <List>
              <ListItem
                component={Link}
                to='/'
                disablePadding
                sx={{ color: '#a9a9a9', marginBottom: '0.5rem' }}
              >
                <Typography
                  variant='body2'
                  sx={{
                    fontSize: { xs: 8, sm: 10, md: 12, lg: 14 },
                  }}
                >
                  {t('footer.account.cart')}
                </Typography>
              </ListItem>
              <ListItem
                component={Link}
                to='/'
                disablePadding
                sx={{ color: '#a9a9a9', marginBottom: '0.5rem' }}
              >
                <Typography
                  variant='body2'
                  sx={{
                    fontSize: { xs: 8, sm: 10, md: 12, lg: 14 },
                  }}
                >
                  {t('footer.account.checkout')}
                </Typography>
              </ListItem>
              <ListItem
                component={Link}
                to='/'
                disablePadding
                sx={{ color: '#a9a9a9', marginBottom: '0.5rem' }}
              >
                <Typography
                  variant='body2'
                  sx={{
                    fontSize: { xs: 8, sm: 10, md: 12, lg: 14 },
                  }}
                >
                  {t('footer.account.wishlist')}
                </Typography>
              </ListItem>
              <ListItem
                component={Link}
                to='/'
                disablePadding
                sx={{ color: '#a9a9a9', marginBottom: '0.5rem' }}
              >
                <Typography
                  variant='body2'
                  sx={{
                    fontSize: { xs: 8, sm: 10, md: 12, lg: 14 },
                  }}
                >
                  {t('footer.account.terms')}
                </Typography>
              </ListItem>
              <ListItem
                component={Link}
                to='/'
                disablePadding
                sx={{ color: '#a9a9a9', marginBottom: '0.5rem' }}
              >
                <Typography
                  variant='body2'
                  sx={{
                    fontSize: { xs: 8, sm: 10, md: 12, lg: 14 },
                  }}
                >
                  {t('footer.account.account')}
                </Typography>
              </ListItem>
            </List>
          </Box>
          <Box>
            <Typography
              variant='h6'
              sx={{
                marginBottom: '2rem',
                fontSize: { xs: 10, sm: 12, md: 16, lg: 20 },
              }}
            >
              {t('footer.information.title')}
            </Typography>
            <List>
              <ListItem
                component={Link}
                to='/'
                disablePadding
                sx={{ color: '#a9a9a9', marginBottom: '0.5rem' }}
              >
                <Typography
                  variant='body2'
                  sx={{
                    fontSize: { xs: 8, sm: 10, md: 12, lg: 14 },
                  }}
                >
                  {t('footer.information.shipping')}
                </Typography>
              </ListItem>
              <ListItem
                component={Link}
                to='/'
                disablePadding
                sx={{ color: '#a9a9a9', marginBottom: '0.5rem' }}
              >
                <Typography
                  variant='body2'
                  sx={{
                    fontSize: { xs: 8, sm: 10, md: 12, lg: 14 },
                  }}
                >
                  {t('footer.information.giftcard')}
                </Typography>
              </ListItem>
              <ListItem
                component={Link}
                to='/'
                disablePadding
                sx={{ color: '#a9a9a9', marginBottom: '0.5rem' }}
              >
                <Typography
                  variant='body2'
                  sx={{
                    fontSize: { xs: 8, sm: 10, md: 12, lg: 14 },
                  }}
                >
                  {t('footer.information.track')}
                </Typography>
              </ListItem>
              <ListItem
                component={Link}
                to='/'
                disablePadding
                sx={{ color: '#a9a9a9', marginBottom: '0.5rem' }}
              >
                <Typography
                  variant='body2'
                  sx={{
                    fontSize: { xs: 8, sm: 10, md: 12, lg: 14 },
                  }}
                >
                  {t('footer.information.terms')}
                </Typography>
              </ListItem>
              <ListItem
                component={Link}
                to='/'
                disablePadding
                sx={{ color: '#a9a9a9', marginBottom: '0.5rem' }}
              >
                <Typography
                  variant='body2'
                  sx={{
                    fontSize: { xs: 8, sm: 10, md: 12, lg: 14 },
                  }}
                >
                  {t('footer.information.faq')}
                </Typography>
              </ListItem>
            </List>
          </Box>
          <Box>
            <Typography
              variant='h6'
              sx={{
                marginBottom: '2rem',
                fontSize: { xs: 10, sm: 12, md: 16, lg: 20 },
              }}
            >
              {t('footer.howto.title')}
            </Typography>
            <List>
              <ListItem
                component={Link}
                to='/'
                disablePadding
                sx={{ color: '#a9a9a9', marginBottom: '0.5rem' }}
              >
                <Typography
                  variant='body2'
                  sx={{
                    fontSize: { xs: 8, sm: 10, md: 12, lg: 14 },
                  }}
                >
                  {t('footer.howto.payments')}
                </Typography>
              </ListItem>
              <ListItem
                component={Link}
                to='/'
                disablePadding
                sx={{ color: '#a9a9a9', marginBottom: '0.5rem' }}
              >
                <Typography
                  variant='body2'
                  sx={{
                    fontSize: { xs: 8, sm: 10, md: 12, lg: 14 },
                  }}
                >
                  {t('footer.howto.delivery')}
                </Typography>
              </ListItem>
              <ListItem
                component={Link}
                to='/'
                disablePadding
                sx={{ color: '#a9a9a9', marginBottom: '0.5rem' }}
              >
                <Typography
                  variant='body2'
                  sx={{
                    fontSize: { xs: 8, sm: 10, md: 12, lg: 14 },
                  }}
                >
                  {t('footer.howto.protection')}
                </Typography>
              </ListItem>
              <ListItem
                component={Link}
                to='/'
                disablePadding
                sx={{ color: '#a9a9a9', marginBottom: '0.5rem' }}
              >
                <Typography
                  variant='body2'
                  sx={{
                    fontSize: { xs: 8, sm: 10, md: 12, lg: 14 },
                  }}
                >
                  {t('footer.howto.guide')}
                </Typography>
              </ListItem>
              <ListItem
                component={Link}
                to='/'
                disablePadding
                sx={{ color: '#a9a9a9', marginBottom: '0.5rem' }}
              >
                <Typography
                  variant='body2'
                  sx={{
                    fontSize: { xs: 8, sm: 10, md: 12, lg: 14 },
                  }}
                >
                  {t('footer.howto.partnership')}
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
        <Typography
          variant='body2'
          sx={{ fontSize: { xs: 8, sm: 10, md: 12, lg: 14 } }}
        >
          {t('footer.copyright')}
        </Typography>
        <Box component='footer'>
          <Box
            component='img'
            sx={{
              marginLeft: '0.5rem',
              opacity: 0.5,
              borderRadius: '2.5px',
              filter: 'grayscale(100%)',
              height: 'auto',
              width: { xs: 15, sm: 20, md: 30, lg: 40 },
            }}
            src={visa}
            alt='Visa'
          />
          <Box
            component='img'
            src={mastercard}
            alt='MasterCard'
            sx={{
              marginLeft: '0.5rem',
              opacity: 0.5,
              borderRadius: '2.5px',
              filter: 'grayscale(100%)',
              height: 'auto',
              width: { xs: 15, sm: 20, md: 30, lg: 40 },
            }}
          />
          <Box
            component='img'
            src={paypal}
            alt='PayPal'
            sx={{
              marginLeft: '0.5rem',
              opacity: 0.5,
              borderRadius: '2.5px',
              filter: 'grayscale(100%)',
              height: 'auto',
              width: { xs: 15, sm: 20, md: 30, lg: 40 },
            }}
          />
          <Box
            component='img'
            src={stripe}
            alt='Stripe'
            sx={{
              marginLeft: '0.5rem',
              opacity: 0.5,
              borderRadius: '2.5px',
              filter: 'grayscale(100%)',
              height: 'auto',
              width: { xs: 15, sm: 20, md: 30, lg: 40 },
            }}
          />
          <Box
            component='img'
            src={discover}
            alt='Discrover'
            sx={{
              marginLeft: '0.5rem',
              opacity: 0.5,
              borderRadius: '2.5px',
              filter: 'grayscale(100%)',
              height: 'auto',
              width: { xs: 15, sm: 20, md: 30, lg: 40 },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
