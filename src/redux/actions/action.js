import { GET_DATA, GET_LIKE, LISTEN_MUSIC } from "../const/constant";

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