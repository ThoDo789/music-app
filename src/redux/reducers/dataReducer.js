import { GET_DATA, GET_LIKE, LISTEN_MUSIC } from "../const/constant";

const initialState = {
  data: [],
  image: {
    id: "bf9fb96c-fb01-4ef5-875e-03ff40284b30",
    nameSong: "Incredible Cotton Bacon",
    author: "Miss Christian Smith",
    artist: "Wade Towne V",
    imageSong: 1,
    liked: false,
    category: "Blues",
    music: 1,
    desc:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    playlist: false,
    years: 2020
  }
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        data: action.payload
      };
    case LISTEN_MUSIC:
      return {
        ...state,
        image: action.payload
      };
    case GET_LIKE:
      const index = state.data.findIndex(value => value.id === action.payload);
      console.log(index);
      const newData = [...state.data];
      console.log(!state.data.liked);
      newData[index].liked = !state.data[index].liked;

      return {
        ...state,
        data: newData
      };
    default:
      return state;
  }
};
export default dataReducer;
