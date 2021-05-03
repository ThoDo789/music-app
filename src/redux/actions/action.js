import {
  GET_DATA,
  GET_LIKE,
  IS_RANDOM,
  LISTEN_MUSIC,
  NEXT_SONG,
  PREV_SONG,
  SET_PLAY,
  IS_LOOP,
  DURATION,
  IS_DISPLAY,
  ADD_ALBUM,
  GET_PlAYLISTS,
  REMOVE_ALBUM,
 
} from "../const/constant";

export const getData = data => {
  return {
    type: GET_DATA,
    payload: data
  };
};
export const getImage = stateImg => {
  return {
    type: LISTEN_MUSIC,
    payload: stateImg
  };
};
export const getLike = newLike => {
  return {
    type: GET_LIKE,
    payload: newLike
  };
};
export const setPlay = statePlay => {
  return {
    type: SET_PLAY,
    payload: statePlay
  };
};
export const prevSong = index => {
  return {
    type: PREV_SONG,
    payload: index
  };
};
export const nextSong = index => {
  return {
    type: NEXT_SONG,
    payload: index
  };
};
export const isRandom = () => {
  return {
    type: IS_RANDOM
  };
};
export const isLoop = index => {
  return {
    type: IS_LOOP,
   };
};
export const getDuration = time => {
  return {
    type: DURATION,
    payload:time
   };
};
export const setDisplay = time => {
  return {
    type: IS_DISPLAY,
    payload:time
   };
};
export const getPlaylist = item => {
  console.log(item, 123)
  return {
    type: GET_PlAYLISTS,
    payload:item
   };
};
export const removeItem = item => {
  console.log(item, 123)
  return {
    type: REMOVE_ALBUM,
    payload:item
   };
};
export const addAlbum = item => {
  return {
    type: ADD_ALBUM,
    payload:item
   };
};

