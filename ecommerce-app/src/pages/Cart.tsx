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
import { makeStyles } from '@mui/styles';
import CloseIcon from '@mui/icons-material/Close';

import CartContext from '../store/cart-context';

const useStyles = makeStyles({
  tableCell: {
    color: '#808080',
    fontWeight: 700,
  },
  quantityBtn: {
    fontWeight: 200,
    minWidth: 30,
    color: '#cdcdcd',
  },
});
function Cart() {
  const cartCtx = useContext(CartContext);
  const classes = useStyles();

  const calculatePrice = (price: number, discount: number) => {
    if (discount == 0) {
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
        <Grid item xs={8}>
          <TableContainer component={Paper} elevation={0}>
            <Table
              sx={{ minWidth: 650, fontSize: 200 }}
              size='small'
              aria-label='a dense table'
            >
              <TableHead
                sx={{ borderTop: 'thin solid #dedede', fontSize: 200 }}
              >
                <TableRow>
                  <TableCell
                    className={classes.tableCell}
                    sx={{ width: '90%' }}
                  >
                    Product Name
                  </TableCell>
                  <TableCell align='center' className={classes.tableCell}>
                    Price
                  </TableCell>
                  <TableCell align='center' className={classes.tableCell}>
                    Quantity
                  </TableCell>
                  <TableCell align='center' className={classes.tableCell}>
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
                      ${calculatePrice(row.price, row.discount).toFixed(2)}
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
                        <Button variant='text' className={classes.quantityBtn}>
                          -
                        </Button>
                        <Box>{row.amount}</Box>
                        <Button variant='text' className={classes.quantityBtn}>
                          +
                        </Button>
                      </Box>
                    </TableCell>
                    <TableCell align='center'>
                      $
                      {(
                        calculatePrice(row.price, row.discount) * row.amount
                      ).toFixed(2)}
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
      </Grid>
    </Box>
  );
}
export default Cart;
