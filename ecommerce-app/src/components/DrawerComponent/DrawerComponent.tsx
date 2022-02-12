import { useState } from 'react';

import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Link,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List sx={{ backgroundColor: '#1c252e', height: 1 }}>
          <ListItem onClick={() => setOpenDrawer(false)}>
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
          <ListItem onClick={() => setOpenDrawer(false)}>
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
          <ListItem onClick={() => setOpenDrawer(false)}>
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
          <ListItem onClick={() => setOpenDrawer(false)}>
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
          <ListItem onClick={() => setOpenDrawer(false)}>
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
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon sx={{ color: '#ffffff' }} />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
