import { useContext, useState } from 'react';

import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CircularProgress,
  Typography,
  useTheme,
  TextField,
  IconButton,
  Paper,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import ProductsContext from '../store/products-context';

function Shop() {
  const [searchTerm, setSearchTerm] = useState('');
  const theme = useTheme();

  const { t, i18n } = useTranslation();

  const productsCtx = useContext(ProductsContext);

  if (productsCtx.isFetchingProducts)
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  const searchFilter = (products: any[]) => {
    return products.filter((term) => {
      if (searchTerm === '') return term;
      else if (
        term.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        term.catalog.toLowerCase().includes(searchTerm.toLowerCase())
      )
        return term;
      return null;
    });
  };
  const searchArray = searchFilter(productsCtx.products);
  return (
    <Box
      sx={{
        padding: '3rem 10%',
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '50vh',
        rowGap: '3rem',
      }}
    >
      <Typography
        variant='h3'
        sx={{
          alignSelf: 'center',
          color: theme.palette.primary.main,
        }}
      >
        {t('shop.title')}
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper
            component='form'
            sx={{ marginBottom: '1rem', display: 'flex', position: 'relative' }}
          >
            <IconButton>
              <SearchIcon />
            </IconButton>
            <TextField
              size='small'
              placeholder={t('shop.search-placeholder')}
              onChange={(event) => setSearchTerm(event.target.value)}
              sx={{
                '& fieldset': {
                  borderRadius: '0px',
                  border: 'none',
                },
                width: 1,
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={0} sm={6} md={8} lg={9}></Grid>
        {searchArray.length > 0 ? (
          searchArray.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
              <Card elevation={0} sx={{ height: 322, borderRadius: 0 }}>
                <CardActionArea
                  component={Link}
                  to={`/product/${item.id}`}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    height: 1,
                    width: 1,
                    position: 'relative',
                  }}
                >
                  {item.discount > 0 && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '20%',
                        ...(i18n.dir() === 'ltr' && {
                          left: 0,
                        }),
                        ...(i18n.dir() === 'rtl' && {
                          right: 0,
                        }),
                        backgroundColor: '#ec1835',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Typography
                        variant='body2'
                        sx={{
                          color: '#ffffff',
                          fontWeight: 500,
                        }}
                      >
                        -{item.discount * 100}%
                      </Typography>
                    </Box>
                  )}
                  <CardMedia
                    component='img'
                    src={item.images[0]}
                    alt={item.title}
                    sx={{
                      height: 150,
                      width: 1,
                      objectFit: 'contain',
                    }}
                  />
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      marginLeft: '1rem',
                      textAlign: 'center',
                    }}
                  >
                    <Typography
                      variant='body2'
                      sx={{
                        fontWeight: 700,
                        color: theme.palette.primary.main,
                      }}
                    >
                      {item.title}
                    </Typography>
                    {item.discount > 0 ? (
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'baseline',
                        }}
                      >
                        <Typography
                          variant='subtitle1'
                          sx={{
                            color: theme.palette.secondary.main,
                            fontWeight: 700,
                          }}
                        >
                          $
                          {(item.price - item.price * item.discount).toFixed(2)}
                        </Typography>
                        <Typography
                          variant='subtitle2'
                          sx={{
                            color: theme.palette.grey[500],
                            fontWeight: 700,
                            textDecoration: 'line-through',
                            marginLeft: '1rem',
                          }}
                        >
                          ${item.price.toFixed(2)}
                        </Typography>
                      </Box>
                    ) : (
                      <Typography
                        variant='subtitle1'
                        sx={{
                          color: theme.palette.secondary.main,
                        }}
                      >
                        ${item.price.toFixed(2)}
                      </Typography>
                    )}
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant='body1'>{t('shop.search-notfound')}</Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
export default Shop;
