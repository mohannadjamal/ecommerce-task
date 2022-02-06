import { Box, Divider, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import GroupedItem from './GroupedItem';

type Prop = {
  title: string;
  items: any[];
};

const useStyles = makeStyles({
  cardContainer: {
    borderRight: '1px solid',
    borderImageSlice: 1,
    borderImageSource:
      'linear-gradient(to bottom,#ffffff 25%, #e4e4e4 50%, #ffffff 75%)',
    '&:nth-child(3n)': {
      borderRight: 'none !important',
    },
  },
});
function Grouped(props: Prop) {
  const classes = useStyles();

  const shuffledItems = props.items.sort(() => 0.5 - Math.random());
  let selectedItems = shuffledItems.slice(0, 6);

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
      <Grid container>
        {selectedItems.map((item) => (
          <Grid item key={item.id} xs={4} className={classes.cardContainer}>
            <GroupedItem
              id={item.id}
              title={item.title}
              image={item.images[0]}
              price={item.price}
              discount={item.discount}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Grouped;
