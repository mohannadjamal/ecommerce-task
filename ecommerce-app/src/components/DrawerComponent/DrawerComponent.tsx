import { useState } from 'react';

import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const { t, i18n } = useTranslation();
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor={i18n.dir() === 'ltr' ? 'left' : 'right'}
      >
        <List sx={{ backgroundColor: '#1c252e', height: 1 }}>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Box
                component={Link}
                to='/'
                sx={{
                  textDecoration: 'none',
                  fontWeight: 700,
                  color: '#ffffff',
                }}
              >
                {t('nav.home')}
              </Box>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Box
                component={Link}
                to='/shop'
                sx={{
                  textDecoration: 'none',
                  fontWeight: 700,
                  color: '#ffffff',
                }}
              >
                {t('nav.shop')}
              </Box>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Box
                component={Link}
                to='/pages'
                sx={{
                  textDecoration: 'none',
                  fontWeight: 700,
                  color: '#ffffff',
                }}
              >
                {t('nav.pages')}
              </Box>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Box
                component={Link}
                to='/lookbook'
                sx={{
                  textDecoration: 'none',
                  fontWeight: 700,
                  color: '#ffffff',
                }}
              >
                {t('nav.lookbook')}
              </Box>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Box
                component={Link}
                to='/brands'
                sx={{
                  textDecoration: 'none',
                  fontWeight: 700,
                  color: '#ffffff',
                }}
              >
                {t('nav.brands')}
              </Box>
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
