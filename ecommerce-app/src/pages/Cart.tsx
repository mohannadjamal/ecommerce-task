import { useContext } from 'react';

import {
  Box,
  Grid,
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Typography,
  Paper,
  Button,
  IconButton,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

import CartContext from '../store/cart-context';

function Cart() {
  const cartCtx = useContext(CartContext);

  const calculatePrice = (price: number, discount: number) => {
    if (discount === 0) {
      return price;
    } else {
      return price - price * discount;
    }
  };
  return (
    <Box
      sx={{
        padding: '3rem 10%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant='h2' sx={{ fontWeight: 400, marginY: '3rem' }}>
        Shopping Cart
      </Typography>
      <Grid container>
        <Grid item xs={8} sx={{ paddingRight: '5rem' }}>
          <TableContainer component={Paper} elevation={0}>
            <Table size='small' aria-label='a dense table'>
              <TableHead
                sx={{ borderTop: 'thin solid #dedede', fontSize: 200 }}
              >
                <TableRow>
                  <TableCell
                    sx={{ width: '90%', color: '#808080', fontWeight: 700 }}
                  >
                    Product Name
                  </TableCell>
                  <TableCell
                    align='center'
                    sx={{ color: '#808080', fontWeight: 700 }}
                  >
                    Price
                  </TableCell>
                  <TableCell
                    align='center'
                    sx={{ color: '#808080', fontWeight: 700 }}
                  >
                    Quantity
                  </TableCell>
                  <TableCell
                    align='center'
                    sx={{ color: '#808080', fontWeight: 700 }}
                  >
                    Total
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartCtx.products.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell sx={{ width: '80%' }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          paddingY: '1rem',
                        }}
                      >
                        <Box
                          component='img'
                          src={row.images[0]}
                          sx={{ width: 100, height: 100, objectFit: 'contain' }}
                        />
                        <Box sx={{ marginLeft: '5rem' }}>
                          <Typography
                            variant='subtitle1'
                            sx={{ color: '#808080', fontWeight: 200 }}
                          >
                            {row.title}
                          </Typography>
                          {row.discount > 0 ? (
                            <Box
                              sx={{ display: 'flex', alignItems: 'baseline' }}
                            >
                              <Typography
                                variant='body1'
                                sx={{ fontWeight: 500 }}
                              >
                                $
                                {calculatePrice(
                                  row.price,
                                  row.discount
                                ).toFixed(2)}
                              </Typography>
                              <Typography
                                variant='subtitle2'
                                sx={{
                                  color: '#c4c4c4',
                                  fontWeight: 700,
                                  textDecoration: 'line-through',
                                  marginLeft: '1rem',
                                }}
                              >
                                ${row.price.toFixed(2)}
                              </Typography>
                            </Box>
                          ) : (
                            <Typography
                              variant='body1'
                              sx={{ fontWeight: 500 }}
                            >
                              ${row.price.toFixed(2)}
                            </Typography>
                          )}
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell align='center'>
                      <Typography variant='body1' sx={{ fontWeight: 500 }}>
                        ${calculatePrice(row.price, row.discount).toFixed(2)}
                      </Typography>
                    </TableCell>
                    <TableCell align='center'>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: 'thin solid #cdcdcd',
                        }}
                      >
                        <Button
                          variant='text'
                          sx={{
                            fontWeight: 200,
                            minWidth: 30,
                            color: '#cdcdcd',
                          }}
                          onClick={() => cartCtx.decrementAmount(row.id)}
                        >
                          -
                        </Button>
                        <Box>{row.amount}</Box>
                        <Button
                          variant='text'
                          sx={{
                            fontWeight: 200,
                            minWidth: 30,
                            color: '#cdcdcd',
                          }}
                          onClick={() => cartCtx.incrementAmount(row.id)}
                        >
                          +
                        </Button>
                      </Box>
                    </TableCell>
                    <TableCell align='center'>
                      <Typography variant='body1' sx={{ fontWeight: 500 }}>
                        $
                        {(
                          calculatePrice(row.price, row.discount) * row.amount
                        ).toFixed(2)}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <IconButton onClick={() => cartCtx.removeProduct(row.id)}>
                        <CloseIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            border: 'thin solid #dedede',
            backgroundColor: '#ebebeb',
            height: '35vh',
          }}
        >
          <TableContainer
            component={Paper}
            elevation={0}
            sx={{ backgroundColor: '#ebebeb' }}
          >
            <Table size='small' aria-label='a dense table'>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ paddingY: '1rem', color: '#808080', fontWeight: 700 }}
                  >
                    Summary
                  </TableCell>
                  <TableCell align='right'></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography variant='body2' sx={{ color: '#8f8f8f' }}>
                      Subtotal
                    </Typography>
                  </TableCell>
                  <TableCell align='right'>
                    <Typography variant='body1' sx={{ fontWeight: 500 }}>
                      ${cartCtx.totalPrice.toFixed(2)}
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant='body2' sx={{ color: '#8f8f8f' }}>
                      Shipping (Flat Rate - Fixed)
                    </Typography>
                  </TableCell>
                  <TableCell align='right'>
                    <Typography variant='body1' sx={{ fontWeight: 500 }}>
                      $5.00
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ border: 0 }}>
                    <Typography variant='body2' sx={{ color: '#8f8f8f' }}>
                      Order Total
                    </Typography>
                  </TableCell>
                  <TableCell align='right' sx={{ border: 0 }}>
                    <Typography variant='body1' sx={{ fontWeight: 500 }}>
                      ${(cartCtx.totalPrice + 5).toFixed(2)}
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Button
              variant='contained'
              sx={{
                fontWeight: 700,
                width: '10rem',
                height: '3rem',
                borderRadius: 0,
                backgroundColor: '#ab1d2b',
                boxShadow: 0,
                marginY: '2rem',
                '&:hover': {
                  backgroundColor: '#d92121',
                },
              }}
            >
              GO TO CHECKOUT
            </Button>
            <Typography variant='subtitle1'>
              Check Out with Multiple Addresses
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Cart;
