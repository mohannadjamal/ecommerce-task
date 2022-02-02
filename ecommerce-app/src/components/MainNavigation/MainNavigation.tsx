import { Link } from 'react-router-dom';

import { Box, List, ListItem } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
    fontWeight: 700,
    color: '#ffffff',
  },
});

function MainNavigation() {
  const classes = useStyles();
  return (
    <Box
      component='nav'
      sx={{
        width: 1,
        height: '3rem',
        backgroundColor: '#1c252e',
        padding: '0 10%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <List
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
        }}
      >
        <ListItem>
          <Link to='/' className={classes.link}>
            HOME
          </Link>
        </ListItem>
        <ListItem>
          <Link to='/shop' className={classes.link}>
            SHOP
          </Link>
        </ListItem>
        <ListItem>
          <Link to='/pages' className={classes.link}>
            PAGES
          </Link>
        </ListItem>
        <ListItem>
          <Link to='/lookbook' className={classes.link}>
            LOOKBOOK
          </Link>
        </ListItem>
        <ListItem>
          <Link to='/brands' className={classes.link}>
            BRANDS
          </Link>
        </ListItem>
      </List>
    </Box>
  );
}
export default MainNavigation;
