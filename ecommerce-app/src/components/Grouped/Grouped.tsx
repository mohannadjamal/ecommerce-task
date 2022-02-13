import { Box, Divider, Grid, Typography, useTheme } from '@mui/material';
import { useContext } from 'react';
import ThemeContext from '../../theme/theme-context';

import GroupedItem from './GroupedItem';

type Prop = {
  title: string;
  items: any[];
};

function Grouped(props: Prop) {
  const themeCtx = useContext(ThemeContext);
  const theme = useTheme();

  const shuffledItems = props.items.sort(() => 0.5 - Math.random());
  let selectedItems = shuffledItems.slice(0, 6);

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
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
          color: theme.palette.primary.light,

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
      <Divider sx={{ backgroundColor: theme.palette.divider }} />
      <Grid container>
        {selectedItems.map((item) => (
          <Grid
            item
            key={item.id}
            xs={4}
            sx={
              themeCtx.currentMode === 'light'
                ? {
                    borderRight: '1px solid',
                    borderImageSlice: 1,
                    borderImageSource:
                      'linear-gradient(to bottom,#ffffff 25%, #e4e4e4 50%, #ffffff 75%)',
                    '&:nth-of-type(3n)': {
                      borderRight: 'none !important',
                    },
                    marginY: '1rem',
                  }
                : {
                    borderRight: '1px solid',
                    borderImageSlice: 1,
                    borderImageSource:
                      'linear-gradient(to bottom,#121212 25%, #e4e4e4 50%, #121212 75%)',
                    '&:nth-of-type(3n)': {
                      borderRight: 'none !important',
                    },
                    marginY: '1rem',
                  }
            }
          >
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
