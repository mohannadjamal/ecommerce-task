import React, { useState, useRef } from 'react';

import {
  Box,
  Divider,
  FormControlLabel,
  Grid,
  Grow,
  List,
  ListItem,
  Paper,
  Switch,
  Theme,
  Typography,
  Zoom,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import CarouselItem from './CarouselItem';
import { TransitionGroup } from 'react-transition-group';

type Prop = {
  title: string;
  itemsPerPage: number;
  items: any[];
};
const icon = (
  <Paper sx={{ m: 1 }} elevation={4}>
    <Box component='svg' sx={{ width: 100, height: 100 }}>
      <Box
        component='polygon'
        sx={{
          fill: (theme: Theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
        points='0,100 50,00, 100,100'
      />
    </Box>
  </Paper>
);

const useStyles = makeStyles({
  cardContainer: {
    borderRight: '1px solid',
    borderImageSlice: 1,
    borderImageSource:
      'linear-gradient(to bottom,#ffffff 25%, #e4e4e4 50%, #ffffff 75%)',
    '&:last-child': {
      borderRight: 'none !important',
    },
  },
  active: {
    borderBottom: '3px solid gray',
  },
  next_animation: {
    animation: `$nextPage .5s forwards`,
  },
  prev_animation: {
    animation: `$prevPage .5s forwards`,
  },
  '@keyframes nextPage': {
    '0%': {
      opacity: 0,
      transform: 'translate(2rem, 0)',
    },
    '100%': {
      opacity: 1,
      transform: 'translate(0, 0)',
    },
  },
  '@keyframes prevPage': {
    '0%': {
      opacity: 0,
      transform: 'translate(-2rem, 0)',
    },
    '100%': {
      opacity: 1,
      transform: 'translate(0, 0)',
    },
  },
});

function Carousel(props: Prop) {
  const [checked, setChecked] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const classes = useStyles();

  const gridSpace = Math.floor(12 / props.itemsPerPage);

  const indexOfLastItem = currentPage * props.itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - props.itemsPerPage;
  const currentItems = props.items.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers: number[] = [];
  for (
    let i = 1;
    i <= Math.ceil(props.items.length / props.itemsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  let paginateInterval: NodeJS.Timer;
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    clearInterval(paginateInterval);
  };

  if (currentPage !== pageNumbers[pageNumbers.length - 1]) {
    paginateInterval = setInterval(() => {
      paginate(currentPage + 1);
    }, 5000);
  } else {
    paginateInterval = setInterval(() => {
      paginate(1);
    }, 5000);
  }

  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        padding: '0.5rem 1.5rem',
      }}
    >
      <Typography
        variant='h6'
        sx={{
          position: 'relative',
          width: 1,
          margin: 0,
          paddingTop: '1rem',
          paddingBottom: '0.5rem',

          '&::after': {
            content: '""',
            position: 'absolute',
            backgroundColor: '#ab1d2b',
            width: '7rem',
            height: 3,
            bottom: 0,
            left: 0,
          },
        }}
      >
        {props.title}
      </Typography>
      <Divider />
      <TransitionGroup>
        <Grid container sx={{ marginY: '1rem' }}>
          {currentItems.map((item) => (
            <Grow in={checked} key={item.id}>
              <Grid item xs={gridSpace} className={classes.cardContainer}>
                <CarouselItem
                  id={item.id}
                  title={item.title}
                  image={item.images[0]}
                  price={item.price}
                  discount={item.discount}
                />
              </Grid>
            </Grow>
          ))}
        </Grid>
      </TransitionGroup>
      <Box>
        <List
          sx={{
            marginTop: '2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'baseline',
          }}
        >
          {pageNumbers.map((number) => (
            <ListItem
              key={number}
              sx={{
                width: 'initial',
                padding: 0,
                marginX: '0.2rem',
              }}
            >
              <Box
                component='a'
                className={currentPage === number ? `${classes.active}` : ''}
                onClick={() => {
                  paginate(number);
                }}
                href='#!'
              >
                <Box
                  sx={{
                    width: '2rem',
                    height: '1px',
                    borderBottom: '3px solid gray',
                  }}
                ></Box>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}
export default Carousel;
