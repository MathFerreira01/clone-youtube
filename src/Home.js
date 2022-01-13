import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Button,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Box,
  Grid,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import AppsIcon from "@material-ui/icons/Apps";
import MoreVert from "@material-ui/icons/MoreVert";
import VideoCallIcon from "@material-ui/icons/VideoCall";

import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import WhatshotIcon from "@material-ui/icons/Whatshot";

import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import Preto from "./images/preto.png";
import Thumb1 from "./images/thumb1.png";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },

  appBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  },

  drawer: {
    width: 240,
    flexShrink: 0,
  },

  drawerPaper: {
    width: 240,
    borderRight: "none",
  },

  grow: {
    flexGrow: 1,
  },

  icons: {
    paddingRight: theme.spacing(5),
  },

  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingleft: theme.spacing(6),
  },

  logo: {
    height: 27,
  },

  ListItemText: {
    fontSize: 14,
  },

  ListItem: {
    paddingTop: 4,
    paddingBottom: 4,
    marginLeft: 9,
  },
}));

const videos = [
  {
    id: 1,
    title:
      "FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29",
    channel: "Matheus Ferreira",
    views: "11 mi de visualizações",
    date: "há 1 semana",
    avatar: "./images/avatar.jpeg",
    thumb: "./images/thumb1.png",
  },
  {
    id: 2,
    title:
      "COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02",
    channel: "Matheus Ferreira",
    views: "957 mil visualizações",
    date: "há 1 semana",
    avatar: "./images/avatar.jpeg",
    thumb: "./images/thumb2.png",
  },
  {
    id: 3,
    title:
      "CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27",
    channel: "Matheus Ferreira",
    views: "106 mil visualizações",
    date: "há 1 semana",
    avatar: "./images/avatar.jpeg",
    thumb: "./images/thumb3.png",
  },
  {
    id: 4,
    title:
      "CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27",
    channel: "Matheus Ferreira",
    views: "5,6 mi de visualizações",
    date: "há 1 semana",
    avatar: "./images/avatar.jpeg",
    thumb: "./images/thumb4.png",
  },
  {
    id: 5,
    title:
      "EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26",
    channel: "Matheus Ferreira",
    views: "2,2 mi de visualizações",
    date: "há 1 semana",
    avatar: "./images/avatar.jpeg",
    thumb: "./images/thumb5.png",
  },
  {
    id: 6,
    title: "COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01",
    channel: "Matheus Ferreira",
    views: "233 mil visualizações",
    date: "há 1 semana",
    avatar: "./images/avatar.jpeg",
    thumb: "./images/thumb6.png",
  },
  {
    id: 7,
    title:
      "PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01",
    channel: "Matheus Ferreira",
    views: "118 mil visualizações",
    date: "há 1 semana",
    avatar: "./images/avatar.jpeg",
    thumb: "./images/thumb7.png",
  },
  {
    id: 8,
    title:
      "GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04",
    channel: "Lucas Nhimi",
    views: "1,9 mi de visualizações",
    date: "há 1 semana",
    avatar: "./images/avatar.jpeg",
    thumb: "./images/thumb8.png",
  },
];

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuIcon}
            arial-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <img src={Preto} alt="" className={classes.logo} />
          <div className={classes.grow} />
          <IconButton className={classes.icons} color="inherit">
            <VideoCallIcon />
          </IconButton>
          <IconButton className={classes.icons} color="inherit">
            <AppsIcon />
          </IconButton>
          <IconButton className={classes.icons} color="inherit">
            <MoreVert />
          </IconButton>
          <Button
            startIcon={<AccountCircleIcon />}
            variant="outlined"
            color="secondary"
          >
            Fazer login
          </Button>
        </Toolbar>
      </AppBar>

      <Box display="flex">
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List>
              <ListItem button classes={{ root: classes.ListItem }}>
                <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.ListItemText,
                  }}
                  primary={"Início"}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.ListItem }}>
                <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.ListItemText,
                  }}
                  primary={"Em alta"}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.ListItem }}>
                <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.ListItemText,
                  }}
                  primary={"Inscrições"}
                />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button classes={{ root: classes.ListItem }}>
                <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.ListItemText,
                  }}
                  primary={"Biblioteca"}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.ListItem }}>
                <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.ListItemText,
                  }}
                  primary={"Histórico"}
                />
              </ListItem>
            </List>
            <Divider />
            <Box p={5}>
              <Typography variant="body2">
                Faça login para curtur vídeos, comentar e se inscrever.
              </Typography>
              <Box mt={2}>
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<AccountCircleIcon />}
                >
                  Fazer login
                </Button>
              </Box>
            </Box>
            <Divider />
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader
                  component="div"
                  id="nested-list-subheader"
                  className={classes.subheader}
                >
                  O Melhor do youtube
                </ListSubheader>
              }
            >
              <ListItem button classes={{ root: classes.ListItem }}>
                <ListItemIcon>{<AddCircleOutlineIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.ListItemText,
                  }}
                  primary={"Música"}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.ListItem }}>
                <ListItemIcon>{<AddCircleOutlineIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.ListItemText,
                  }}
                  primary={"Esportes"}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.ListItem }}>
                <ListItemIcon>{<AddCircleOutlineIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.ListItemText,
                  }}
                  primary={"Jogos"}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.ListItem }}>
                <ListItemIcon>{<AddCircleOutlineIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.ListItemText,
                  }}
                  primary={"Filmes"}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.ListItem }}>
                <ListItemIcon>{<AddCircleOutlineIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.ListItemText,
                  }}
                  primary={"Notícias"}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.ListItem }}>
                <ListItemIcon>{<AddCircleOutlineIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.ListItemText,
                  }}
                  primary={"ao vivo"}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.ListItem }}>
                <ListItemIcon>{<AddCircleOutlineIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.ListItemText,
                  }}
                  primary={"Aprender"}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.ListItem }}>
                <ListItemIcon>{<AddCircleOutlineIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.ListItemText,
                  }}
                  primary={"Vídeo do momento"}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.ListItem }}>
                <ListItemIcon>{<AddCircleOutlineIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.ListItemText,
                  }}
                  primary={"Vídeo em 360º"}
                />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </Box>
      <div></div>
      <Box p={5} marginLeft={30}>
        <Toolbar />
        <Typography
          variant="h5"
          color="textPrimary"
          style={{ fontWeight: 600 }}
        >
          Recomendados
        </Typography>

        <Grid container spacing={4}>
          {videos.map((item, index) => (
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Box>
                <img style={{ width: "100%" }} alt={item.title} src={Thumb1} />
                <Box>
                  <Typography
                    style={{ fontWeight: 600 }}
                    gutterBottom
                    variant="body1"
                    color="textPrimary"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    display="block"
                    variant="body2"
                    color="textSecondary"
                  >
                    {item.channel}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {`${item.views} • ${item.date}`}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
