import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import {
  Box,
  Breadcrumbs,
  Button,
  Grid,
  IconButton,
  Link,
  Paper,
  Typography,
  Tabs,
  Tab,
} from '@mui/material';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { makeStyles } from '@mui/styles';
import { relative } from 'node:path/win32';

type Product = {
  catalog: string;
  description: string;
  discount: number;
  images: string[];
  price: number;
  sku: string;
  title: string;
};

const useStyles = makeStyles({
  crumbFont: {
    fontSize: 14,
    fontWeight: 400,
    color: '#cdcdcd',
  },
  quantityBtn: {
    fontWeight: 200,
    fontSize: '1.5rem',
    color: '#cdcdcd',
  },
  iconBtn: {
    borderRadius: 0,
    border: 'thin solid #cdcdcd',
  },
  active: {
    borderColor: '#b1203c',
    position: 'relative',
    '&:after': {
      position: 'absolute',
      left: 0,
      top: 0,
      width: 1,
      height: 1,
      display: 'inline-block',
      background: 'linear-gradient(to bottom, rgba(0,47,75,0.5) 0%,rgba(220, 66, 37, 0.5) 100%)',
    },
  },
});

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
function ProductDetails() {
  const classes = useStyles();

  const { productId } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [loadedProduct, setLoadedProduct] = useState<Product>({
    catalog: '',
    description: '',
    discount: 0,
    price: 0,
    sku: '',
    title: '',
    images: [],
  });
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://ecommerce-app-57402-default-rtdb.europe-west1.firebasedatabase.app/product/${productId}.json`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const product: Product = data;
        setIsLoading(false);
        setLoadedProduct(product);
        setCurrentImage(0);
      });
  }, []);

  const [quantity, setQuantity] = useState(1);

  function handleDecrement() {
    if (quantity > 1) setQuantity(quantity - 1);
  }
  function handleIncrement() {
    setQuantity(quantity + 1);
  }

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function clickImage(num: number) {
    setCurrentImage(num);
  }

  if (isLoading) return <Box></Box>;
  return (
    <Box sx={{ padding: '3rem 10%' }}>
      <Grid container>
        <Grid item xs={2}>
          {loadedProduct.images.map((image: string, index: number) => (
            <Paper
              key={index}
              elevation={0}
              variant='outlined'
              component='img'
              onClick={() => clickImage(index)}
              className={currentImage === index ? `${classes.active}` : ''}
              src={image}
              sx={{
                height: 150,
                width: 150,
                objectFit: 'contain',
                borderRadius: 0,
              }}
            />
          ))}
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box component='img' src={loadedProduct.images[currentImage]} />
        </Grid>
        <Grid item xs={5}>
          <Breadcrumbs aria-label='breadcrumb' className={classes.crumbFont}>
            <Link
              underline='hover'
              color='inherit'
              href='/'
              className={classes.crumbFont}
              sx={{ paddingRight: '1rem' }}
            >
              Home
            </Link>
            <Typography
              className={classes.crumbFont}
              sx={{ paddingLeft: '1rem' }}
            >
              {loadedProduct.title}
            </Typography>
          </Breadcrumbs>
          <Typography
            variant='h4'
            sx={{ fontWeight: 700, marginTop: '1rem', marginBottom: '2rem' }}
          >
            {loadedProduct.title}
          </Typography>
          <Typography
            variant='h6'
            sx={{ fontWeight: 700, color: '#b1203c', marginBottom: '1rem' }}
          >
            ${loadedProduct.price.toFixed(2)}
          </Typography>
          <Typography variant='body1' sx={{ height: '25vh' }}>
            {loadedProduct.description}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: 1,
              height: '3rem',
              marginBottom: '1.5rem',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '82%',
                border: 'thin solid #cdcdcd',
              }}
            >
              <Button
                variant='text'
                className={classes.quantityBtn}
                onClick={handleDecrement}
              >
                -
              </Button>
              <Box>{quantity}</Box>
              <Button
                variant='text'
                className={classes.quantityBtn}
                onClick={handleIncrement}
              >
                +
              </Button>
            </Box>
            <IconButton className={classes.iconBtn}>
              <AutorenewIcon />
            </IconButton>
            <IconButton className={classes.iconBtn}>
              <FavoriteBorderIcon />
            </IconButton>
          </Box>

          <Button
            variant='contained'
            sx={{
              width: 1,
              height: '3rem',
              borderRadius: 0,
              backgroundColor: '#000000',
              color: '#ffffff',
              '&:hover': {
                backgroundColor: '#333333',
              },
              marginBottom: '1.5rem',
              boxShadow: 'none',
            }}
          >
            ADD TO CART
          </Button>

          <Typography
            variant='subtitle2'
            sx={{ color: '#7a7a7a', marginBottom: '3rem' }}
          >
            {loadedProduct.title} is available to buy in increments of 1
          </Typography>

          <Typography
            variant='body1'
            sx={{ fontWeight: 500, color: '#9c9c9c' }}
          >
            SKU: {loadedProduct.sku}
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ width: '100%', padding: '10%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label='basic tabs'
            centered
            textColor='inherit'
            TabIndicatorProps={{
              style: {
                backgroundColor: '#000000',
              },
            }}
          >
            <Tab label='DETAILS' {...a11yProps(0)} />
            <Tab label='MORE INFORMATION' {...a11yProps(1)} />
            <Tab label='REVIEWS' {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {loadedProduct.description}
        </TabPanel>
        <TabPanel value={value} index={1}>
          Unimplemented
        </TabPanel>
        <TabPanel value={value} index={2}>
          Unimplemented
        </TabPanel>
      </Box>
    </Box>
  );
}

export default ProductDetails;
