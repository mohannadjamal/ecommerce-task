import { Box, List, ListItem, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  link: {},
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
        padding: { xs: ' 0 1rem', md: '0 10%' },
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
        <ListItem
          sx={{
            padding: {
              sm: '4px 8px',
              md: 'intial',
            },
          }}
        >
          <Link
            href='/'
            sx={{
              textDecoration: 'none',
              fontWeight: 700,
              color: '#ffffff',
              fontSize: {
                xs: 12,
                sm: 16,
                md: 'intial',
              },
            }}
          >
            HOME
          </Link>
        </ListItem>
        <ListItem
          sx={{
            padding: {
              sm: '4px 8px',
              md: 'intial',
            },
          }}
        >
          <Link
            href='/shop'
            sx={{
              textDecoration: 'none',
              fontWeight: 700,
              color: '#ffffff',
              fontSize: {
                xs: 12,
                sm: 16,
                md: 'intial',
              },
            }}
          >
            SHOP
          </Link>
        </ListItem>
        <ListItem
          sx={{
            padding: {
              sm: '4px 8px',
              md: 'intial',
            },
          }}
        >
          <Link
            href='/pages'
            sx={{
              textDecoration: 'none',
              fontWeight: 700,
              color: '#ffffff',
              fontSize: {
                xs: 12,
                sm: 16,
                md: 'intial',
              },
            }}
          >
            PAGES
          </Link>
        </ListItem>
        <ListItem
          sx={{
            padding: {
              sm: '4px 8px',
              md: 'intial',
            },
          }}
        >
          <Link
            href='/lookbook'
            sx={{
              textDecoration: 'none',
              fontWeight: 700,
              color: '#ffffff',
              fontSize: {
                xs: 12,
                sm: 16,
                md: 'intial',
              },
            }}
          >
            LOOKBOOK
          </Link>
        </ListItem>
        <ListItem
          sx={{
            padding: {
              sm: '4px 8px',
              md: 'intial',
            },
          }}
        >
          <Link
            href='/brands'
            sx={{
              textDecoration: 'none',
              fontWeight: 700,
              color: '#ffffff',
              fontSize: {
                xs: 12,
                sm: 16,
                md: 'intial',
              },
            }}
          >
            BRANDS
          </Link>
        </ListItem>
      </List>
    </Box>
  );
}
export default MainNavigation;
