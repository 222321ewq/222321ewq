import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import UpdateIcon from '@material-ui/icons/Update';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import GroupIcon from '@material-ui/icons/Group';
import MeetingRoom from '@material-ui/icons/MeetingRoom';
import CalendarIcon from '@material-ui/icons/CalendarTodaySharp';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useTheme } from '@material-ui/core/styles';
import Profile from '../Profile';
import { useStyles } from './style';

export default function MiniDrawer({ updateLoading, handleLogout, handleUpdateLawsuits }) {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Simple Juris
          </Typography>
          {updateLoading ? (
            <Button style={{ marginLeft: '60%', backgroundColor: 'grey', marginRight: '1%' }}>
              <CircularProgress
                style={{
                  color: '#eef3fd',
                }}
                size={24}
                thickness={4}
              />
            </Button>
          ) : (
            <Button
              onClick={handleUpdateLawsuits}
              style={{ marginLeft: '60%', backgroundColor: 'grey', marginRight: '1%' }}
            >
              <UpdateIcon style={{ color: 'white' }} />
            </Button>
          )}
          <Typography variant="h6" noWrap>
            Atualizar Processos
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Profile />
        <Divider />
        <List>
          {['Clientes', 'Agenda', 'Documentação', 'Finaceiro', 'Sair'].map((text, index) =>
            text === 'Sair' ? (
              <ListItem button key={text}>
                <ListItemIcon onClick={handleLogout}>
                  {index % 2 === 0 ? <MeetingRoom /> : <CalendarIcon />}
                </ListItemIcon>
                <ListItemText onClick={handleLogout} primary={text} />
              </ListItem>
            ) : (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <GroupIcon /> : <CalendarIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ),
          )}
        </List>
      </Drawer>
    </div>
  );
}
