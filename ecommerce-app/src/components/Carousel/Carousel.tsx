import React, { useState, useRef } from 'react';

import { Box, Divider, Grid, List, ListItem, Typography } from '@mui/material';

import CarouselItem from './CarouselItem';

import styles from './Carousel.module.scss';
import { makeStyles } from '@mui/styles';

type Prop = {
  title: string;
  itemsPerPage: number;
  items: any[];
};

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
  const classes = useStyles();

  const gridSpace = Math.floor(12 / props.itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  let currentPageRef = useRef<any>(null);

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
    if (currentPage === pageNumber) {
      currentPageRef.current!.classList.remove(`${classes.next_animation}`);
      currentPageRef.current!.classList.remove(`${classes.prev_animation}`);
    } else if (currentPage > pageNumber) {
      currentPageRef.current!.classList.add(`${classes.prev_animation}`);
    } else {
      currentPageRef.current!.classList.add(`${classes.next_animation}`);
    }
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
      <Grid
        container
        ref={currentPageRef}
        onAnimationEnd={() => {
          currentPageRef.current!.classList.remove(`${classes.next_animation}`);
          currentPageRef.current!.classList.remove(`${classes.prev_animation}`);
        }}
      >
        {currentItems.map((item) => (
          <Grid item xs={gridSpace} className={classes.cardContainer}>
            <CarouselItem
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          </Grid>
        ))}
      </Grid>
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
