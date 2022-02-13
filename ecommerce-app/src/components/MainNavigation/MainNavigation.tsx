
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Link,
  useTheme,
  useMediaQuery,
} from '@mui/material';

import DrawerComponent from '../DrawerComponent/DrawerComponent';

function MainNavigation() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
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
      {isMobile ? (
        <DrawerComponent />
      ) : (
        <List
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
          }}
        >
          <ListItem>
            <ListItemText>
              <Link
                href='/'
                sx={{
                  textDecoration: 'none',
                  fontWeight: 700,
                  color: '#ffffff',
                }}
              >
                HOME
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Link
                href='/shop'
                sx={{
                  textDecoration: 'none',
                  fontWeight: 700,
                  color: '#ffffff',
                }}
              >
                SHOP
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Link
                href='/pages'
                sx={{
                  textDecoration: 'none',
                  fontWeight: 700,
                  color: '#ffffff',
                }}
              >
                PAGES
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Link
                href='/lookbook'
                sx={{
                  textDecoration: 'none',
                  fontWeight: 700,
                  color: '#ffffff',
                }}
              >
                LOOKBOOK
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Link
                href='/brands'
                sx={{
                  textDecoration: 'none',
                  fontWeight: 700,
                  color: '#ffffff',
                }}
              >
                BRANDS
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      )}
    </Box>
  );
}
export default MainNavigation;
