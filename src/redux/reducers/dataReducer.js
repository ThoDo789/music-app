import { DURATION, GET_DATA, GET_LIKE, IS_LOOP, IS_RANDOM, LISTEN_MUSIC, NEXT_SONG, PREV_SONG, SET_PLAY } from "../const/constant";

const initialState = {
  data: [],
  image: {},
  statePlay: false,
  index:0,
  isRandomIndex:false,
  isLoopSong:false,
  indexLoopSong:null,
  durationTime:null,

};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        data: action.payload
      };
    case LISTEN_MUSIC:
      const indexData = state.data.findIndex(value => value.id === action.payload.id);
     
      return {
        ...state,
        image: action.payload,
        statePlay: true,
        index:indexData

      };

    case GET_LIKE:
      const index = state.data.findIndex(value => value.id === action.payload);
      
      const newData = [...state.data];
      
      newData[index].liked = !state.data[index].liked;

    
      return {
        ...state,
        data: newData
      };

    case SET_PLAY:
      return {
        ...state,
        statePlay: action.payload,
        
      };

      case PREV_SONG:
      return {
        ...state,
        index: action.payload,
        image:state.data[action.payload]
      };  

      case NEXT_SONG:
        return {
          ...state,
          index: action.payload,
          image:state.data[action.payload]
        };  
        case IS_RANDOM:
          return {
            ...state,
            isRandomIndex:!state.isRandomIndex
          };  
          case IS_LOOP:
            return {
              ...state,
              isLoopSong:!state.isLoopSong,
              indexLoopSong:action.payload
            };  
      
            case DURATION:
              return {
                ...state,
                durationTime:action.payload
                
              }; 

    default:
      return state;
  }
};
export default dataReducer;
