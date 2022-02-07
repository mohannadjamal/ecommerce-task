import { useEffect, useState } from 'react';

import { Box, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import Carousel from '../components/Carousel/Carousel';
import Grouped from '../components/Grouped/Grouped';

import ad from '../images/JBLAd.png';
import startupSocks from '../images/startupsocks.png';
import hp from '../images/hp.png';
import swatch from '../images/swatch.png';
import asus from '../images/asus.png';
import dell from '../images/dell.png';
import toshiba from '../images/toshiba.png';

const useStyles = makeStyles({
  logo: {
    width: 150,
    height: 50,
    objectFit: 'contain',
  },
});

function Homepage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedProducts, setLoadedProducts] = useState<any[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://ecommerce-app-57402-default-rtdb.europe-west1.firebasedatabase.app/product.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const products: any[] = [];

        for (const key in data) {
          const product = {
            id: key,
            ...data[key],
          };
          products.push(product);
        }

        setIsLoading(false);
        setLoadedProducts(products);
      });
  }, []);

  const laptopProducts = loadedProducts.filter(
    (product) => product.catalog === 'Laptop'
  );
  const audioProducts = loadedProducts.filter(
    (product) => product.catalog === 'Audio'
  );
  const cameraProducts = loadedProducts.filter(
    (product) => product.catalog === 'Camera'
  );
  const classes = useStyles();

  if (isLoading) return <Box></Box>;
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
          items={laptopProducts}
        />
      </Box>
      <Box
        sx={{
          paddingX: '10%',
        }}
      >
        <Box
          sx={{
            width: 1,
            display: 'inline-flex',
            justifyContent: 'space-between',
            paddingY: '3rem',
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Carousel
              title={'Audio & Sound'}
              itemsPerPage={4}
              items={audioProducts}
            />
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
        <Box>
          <Grouped title='Camera & Lens' items={cameraProducts} />
        </Box>
        <Grid container sx={{ paddingY: '5rem', textAlign: 'center' }}>
          <Grid item xs={2}>
            <Box
              component='img'
              className={classes.logo}
              src={startupSocks}
              alt='Starup Socks logo'
            />
          </Grid>
          <Grid item xs={2}>
            <Box
              component='img'
              className={classes.logo}
              src={hp}
              alt='HP logo'
            />
          </Grid>
          <Grid item xs={2}>
            <Box
              component='img'
              className={classes.logo}
              src={swatch}
              alt='Swatch logo'
            />
          </Grid>
          <Grid item xs={2}>
            <Box
              component='img'
              className={classes.logo}
              src={asus}
              alt='Asus logo'
            />
          </Grid>
          <Grid item xs={2}>
            <Box
              component='img'
              className={classes.logo}
              src={toshiba}
              alt='Toshiba logo'
            />
          </Grid>
          <Grid item xs={2}>
            <Box
              component='img'
              className={classes.logo}
              src={dell}
              alt='Dell logo'
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Homepage;
