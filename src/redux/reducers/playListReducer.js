import { ADD_ALBUM, GET_DATA, GET_PlAYLISTS } from "../const/constant";
const initialize = {
  data: [],
  dataPlayList: [],
  isAddRemove: -1,
  idAdd: ""
};

const playListReducer = (state = initialize, action) => {
  switch (action.type) {
    case GET_PlAYLISTS:
      return {
        dataPlayList: action.payload
      };

    case GET_DATA:
      return {
        ...state,
        data: action.payload
      };

    case ADD_ALBUM:
     
      
      const index = [...state.dataPlayList].findIndex(
        index => index.id === action.payload
      );
      console.log(index);
      if(state.dataPlayList.length===0){
        const itemAdd = state.data.find(item => item.id === action.payload);
        console.log( itemAdd, "jkljkj");
        var newItem = [...state.dataPlayList, itemAdd];
      
      }

      if (index < 0) {
        const itemAdd = state.data.find(item => item.id === action.payload);
        console.log( itemAdd, "jkljkj");

        var newItem = [...state.dataPlayList, itemAdd];
        console.log(newItem);
      } else {
        console.log("ggg")

        const dataIndex = state.dataPlayList.findIndex((indexData)=>(indexData.id===action.payload))
        console.log("hhh")
        newItem = state.dataPlayList.filter(element => {
          return element.id !== state.dataPlayList[dataIndex].id;
        });
        console.log(newItem);
      }
      
      return {
        ...state,
        dataPlayList: newItem,
        isAddRemove: index,
        idAdd: action.payload
      };
    
    default:
      return state;
  }
};
export default playListReducer;
