import { useEffect, useState } from 'react';

import { Box, Grid, Typography, useTheme } from '@mui/material';

import Carousel from '../components/Carousel/Carousel';
import Grouped from '../components/Grouped/Grouped';

import ad from '../images/JBLAd.png';
import startupSocks from '../images/startupsocks.png';
import hp from '../images/hp.png';
import swatch from '../images/swatch.png';
import asus from '../images/asus.png';
import dell from '../images/dell.png';
import toshiba from '../images/toshiba.png';

function Homepage() {
  const theme = useTheme();
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
  function firstCarouselQuery(): number {
    if (window.innerWidth < 600) {
      return 3;
    } else if (window.innerWidth > 600 && window.innerWidth < 900) return 4;
    return 6;
  }
  function secondCarouselQuery(): number {
    if (window.innerWidth < 600) return 2;
    else if (window.innerWidth > 600 && window.innerWidth < 900) return 3;
    return 4;
  }
  const firstCarouselItems = firstCarouselQuery();
  const secondCarouselItems = secondCarouselQuery();
  if (isLoading) return <Box></Box>;
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Box
        sx={{
          padding: {
            xs: '1rem 0',
            md: '3rem 10%',
          },
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Carousel
          title={'Smartphones & Tablets'}
          itemsPerPage={firstCarouselItems}
          items={laptopProducts}
        />
      </Box>
      <Box
        sx={{
          paddingX: { xs: '0', md: '10%' },
        }}
      >
        <Box
          sx={{
            width: 1,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingY: {
              xs: '1rem',
              md: '3rem',
            },
          }}
        >
          <Box sx={{ width: 1 }}>
            <Carousel
              title={'Audio & Sound'}
              itemsPerPage={secondCarouselItems}
              items={audioProducts}
            />
          </Box>
          <Box
            component='img'
            src={ad}
            alt='JBL Bluetooth Speaker'
            sx={{
              height: 'auto',
              width: {
                xs: '30%',
              },
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            height: 50,
            display: 'flex',
            width: 1,
            marginBottom: '3rem',
          }}
        >
          <Box
            sx={{
              backgroundColor: '#1c252e',
              height: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              clipPath: ' polygon(0 0, 100% 0%, 95% 100%, 0 100%)',
              flex: '1 0 70%',
            }}
          >
            <Typography
              variant='subtitle1'
              sx={{
                color: theme.palette.common.white,
                fontSize: { xs: 8, sm: 10, md: 12, lg: 14 },
              }}
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
              flex: '1 0 30%',
              marginLeft: {
                xs: '-2rem',
                md: '-5rem',
                lg: '-8rem',
              },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            <Typography
              variant='body2'
              sx={{
                color: theme.palette.common.white,
                paddingRight: '1rem',
                fontSize: {
                  xs: 10,
                  sm: 12,
                  md: 14,
                  lg: 16,
                },
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
              sx={{
                width: { xs: 50, sm: 100, md: 150 },
                height: { xs: 25, sm: 50, md: 75 },
                objectFit: 'contain',
              }}
              src={startupSocks}
              alt='Starup Socks logo'
            />
          </Grid>
          <Grid item xs={2}>
            <Box
              component='img'
              sx={{
                width: { xs: 30, sm: 100, md: 150 },
                height: { xs: 15, sm: 50, md: 75 },
                objectFit: 'contain',
              }}
              src={hp}
              alt='HP logo'
            />
          </Grid>
          <Grid item xs={2}>
            <Box
              component='img'
              sx={{
                width: { xs: 30, sm: 100, md: 150 },
                height: { xs: 15, sm: 50, md: 75 },
                objectFit: 'contain',
              }}
              src={swatch}
              alt='Swatch logo'
            />
          </Grid>
          <Grid item xs={2}>
            <Box
              component='img'
              sx={{
                width: { xs: 30, sm: 100, md: 150 },
                height: { xs: 15, sm: 50, md: 75 },
                objectFit: 'contain',
              }}
              src={asus}
              alt='Asus logo'
            />
          </Grid>
          <Grid item xs={2}>
            <Box
              component='img'
              sx={{
                width: { xs: 30, sm: 100, md: 150 },
                height: { xs: 15, sm: 50, md: 75 },
                objectFit: 'contain',
              }}
              src={toshiba}
              alt='Toshiba logo'
            />
          </Grid>
          <Grid item xs={2}>
            <Box
              component='img'
              sx={{
                width: { xs: 30, sm: 100, md: 150 },
                height: { xs: 15, sm: 50, md: 75 },
                objectFit: 'contain',
              }}
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
