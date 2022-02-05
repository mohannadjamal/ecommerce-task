import { Box, Typography } from '@mui/material';

import Carousel from '../components/Carousel/Carousel';

import styles from './Homepage.module.scss';

import ad from '../images/JBLAd.png';
import { width } from '@mui/system';
import { ForkLeft } from '@mui/icons-material';

function Homepage() {
  const item = {
    id: 'AASDFD',
    title: 'Asus Zenbook 14',
    image:
      'https://eilat.payngo.co.il/media/catalog/product/cache/6b2f4d2b8c238597c4864fc429fa65dd/z/e/zenbook-14_ux425_icl_product-photo_2g_pine-grey_05_touchpad.jpg',
    price: 999,
  };
  const item2 = {
    id: 'AASDFD',
    title: 'HP Omen',
    image: 'https://www.notebookcheck.net/uploads/tx_nbc2/HPOmen15-dh__1_.jpg',
    price: 999,
  };
  const items = [item, item, item, item, item, item2, item2, item, item];
  return (
    <Box>
      <Box
        sx={{
          padding: '3rem 10%',
          backgroundColor: '#ebebeb',
        }}
      >
        <Carousel
          title={'Smartphones & Tablets'}
          itemsPerPage={6}
          items={items}
        />
      </Box>
      <Box
        sx={{
          padding: '3rem 10%',
        }}
      >
        <Box
          sx={{
            width: 1,
            display: 'inline-flex',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Carousel title={'Audio & Sound'} itemsPerPage={4} items={items} />
          </Box>
          <img src={ad} alt='JBL Bluetooth Speaker'></img>
        </Box>
        <Box
          sx={{
            height: 50,
            marginY: '2rem',
            display: 'inline-flex',
            width: 1,
          }}
        >
          <Box
            sx={{
              backgroundColor: '#1c252e',
              height: 1,
              display: 'inline-flex',
              alignItems: 'center',
              clipPath: ' polygon(0 0, 100% 0%, 95% 100%, 0 100%)',
              flex: '1 0 70%',
            }}
          >
            <Typography
              variant='subtitle1'
              sx={{ color: '#ffffff', paddingLeft: '7rem' }}
            >
              Save your money with super promotion, available every Sunday in
              the weekend!
            </Typography>
          </Box>
          <Box
            component='a'
            href='#!'
            sx={{
              height: 1,
              backgroundColor: '#ab1d2b',
              flex: '0 0 30%',
              marginLeft: '-12rem',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              textDecoration: 'none',
            }}
          >
            <Typography
              variant='body2'
              sx={{
                color: '#ffffff',
                marginRight: '8rem',
              }}
            >
              Learn More →
            </Typography>
          </Box>
        </Box>
        
      </Box>
    </Box>
  );
}

export default Homepage;
