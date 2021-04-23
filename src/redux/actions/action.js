import { GET_DATA, GET_LIKE, IS_RANDOM, LISTEN_MUSIC,NEXT_SONG,PREV_SONG,SET_PLAY } from "../const/constant";

export const getData = (data) => {
  return {
    type: GET_DATA,
    payload:data,
  };
};
export const getImage = (stateImg) => {
  return {
    type: LISTEN_MUSIC,
    payload:stateImg,
  };
};
export const getLike = (newLike) => {
  return {
    type: GET_LIKE,
    payload:newLike,
  };
};
export const setPlay = (statePlay) => {
  return {
    type: SET_PLAY,
    payload:statePlay
  };
};
export const prevSong = (index) => {
  return {
    type: PREV_SONG,
    payload:index
  };
};
export const nextSong = (index) => {
  return {
    type: NEXT_SONG,
    payload:index
  };
};
export const isRandom = () => {
  return {
    type: IS_RANDOM,
   
  };
};