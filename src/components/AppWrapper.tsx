import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import MetronomeIcon from '@mui/icons-material/LockClock';
import AddIcon from '@mui/icons-material/Add';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import styled from "@emotion/styled";

const drawerWidth = 240;

interface Props {

}

interface NavItem {
    title: string,
    icon: any
}

interface NavItems extends Array<NavItem>{};

const Navs: NavItems = [
  {
    title: 'Home', 
    icon: HomeIcon
  },
  {
    title: 'Metronome',
    icon: MetronomeIcon
  }, 
  {
    title: 'New Journal',
    icon: AddIcon
  }
]

const StyledBox = styled(Box)``;

export default function AppWrapper(props: React.PropsWithChildren<Props>) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { children } = props;

  const topToolbarRef: any = React.useRef();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{
      backgroundColor: "whitesmoke",
      height: '100%'
    }}>
      <Toolbar />
      <Divider />
      <List>
        {Navs.map((navlink, index) => (
          <ListItem key={navlink.title} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <navlink.icon />
              </ListItemIcon>
              <ListItemText primary={navlink.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  const container = window !== undefined ? () => window.document.body : undefined;

  const [topToolbarHeight, setTopToolbarHeight] = React.useState(0);

  React.useEffect(() => {
    setTopToolbarHeight(topToolbarRef.current.clientHeight * 2);
  }, [topToolbarRef.current])

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "darkslategray",
          color: "white"
        }}
      >
        <Toolbar>
          <StyledBox
            sx={{
              width: `100%`,
              height: '100%',
            }}
            ref={topToolbarRef}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Djournal
            </Typography>
          </StyledBox>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ 
          height: `calc(100vh - ${topToolbarHeight}px)`, 
          width: '100%', 
          marginTop: `${topToolbarHeight}px`,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}