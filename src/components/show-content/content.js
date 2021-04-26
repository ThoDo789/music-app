import React from "react";
import { Route, Switch } from "react-router-dom";
import Album from "./pages/Albums/Album";
import Artist from "./pages/Artists/Artist";
import ForYou from "./pages/ForYou/ForYou";
import Hiphop from "./pages/HipHop/Hiphop";
import Jazz from "./pages/Jazz/Jazz";
import Library from "./pages/Library/Library";
import LikedSong from "./pages/LikedSong/LikedSong";
import MusicVideo from "./pages/MusicVideo/MusicVideo";

const menus = [
  {
    path: "/",
    exact: true,
    component: () => ForYou()
  },
  {
    path: "/library",
    exact: false,
    component: () => Library()
  },
  {
    path: "/music-video",
    exact: false,
    component: () => MusicVideo()
  },
  {
    path: "/liked-song",
    exact: false,
    component: () => LikedSong()
  },
  {
    path: "/album",
    exact: false,
    component: () => Album()
  },
  {
    path: "/hip-hop",
    exact: false,
    component: () => Hiphop()
  },
  {
    path: "/artist",
    exact: false,
    component: () => Artist()
  },
  {
    path: "/jazz",
    exact: false,
    component: () => Jazz()
  }
];
function ShowContent(props) {
  return (
    <Switch>
      {menus.map((menu,key) => (
        <Route key={key} path={menu.path} exact={menu.exact} component={menu.component} />
      ))}

     
    </Switch>
  );
}

export default ShowContent;
