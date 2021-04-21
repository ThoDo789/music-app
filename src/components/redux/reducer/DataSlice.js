import {createSlice} from "@reduxjs/toolkit";

// Application name	thodo-music
// API key	0f7d79017203110e538baa1158f3c782
// Shared secret	9f1669e7249f146f39202f965b4c5152
// Registered to	tho8314
const dataSongs =[
    { 
      id:1,
      nameSong:"song1",
      author:"author1",
      artist:"atist1",
      imageSong:"",
      videoSong:"",
      liked:false,
      category:"jazz",
      time:"2:13",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      playlist:false,
    },
    { 
      id:2,
      nameSong:"song1",
      author:"author1",
      artist:"atist1",
      imageSong:"",
      videoSong:"",
      liked:false,
      category:"jazz",
      time:"2:13",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      playlist:false,
    },
    { 
      id:3,
      nameSong:"song1",
      author:"author1",
      artist:"atist1",
      imageSong:"",
      videoSong:"",
      liked:false,
      category:"jazz",
      time:"2:13",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      playlist:false,
    },
    { 
      id:4,
      nameSong:"song1",
      author:"author1",
      artist:"atist1",
      imageSong:"",
      videoSong:"",
      liked:false,
      category:"jazz",
      time:"2:13",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      playlist:false,
    },
    { 
      id:5,
      nameSong:"song1",
      author:"author1",
      artist:"atist1",
      imageSong:"",
      videoSong:"",
      liked:false,
      category:"jazz",
      time:"2:13",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      playlist:false,
    },
    { 
      id:6,
      nameSong:"song1",
      author:"author1",
      artist:"atist1",
      imageSong:"",
      videoSong:"",
      liked:false,
      category:"jazz",
      time:"2:13",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      playlist:false,
    },
    { 
      id:7,
      nameSong:"song1",
      author:"author1",
      artist:"atist1",
      imageSong:"",
      videoSong:"",
      liked:false,
      category:"jazz",
      time:"2:13",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      playlist:false,
    },
    { 
      id:8,
      nameSong:"song1",
      author:"author1",
      artist:"atist1",
      imageSong:"",
      videoSong:"",
      liked:false,
      category:"jazz",
      time:"2:13",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      playlist:false,
    },
    { 
      id:9,
      nameSong:"song1",
      author:"author1",
      artist:"atist1",
      imageSong:"",
      videoSong:"",
      liked:false,
      category:"jazz",
      time:"2:13",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      playlist:false,
    },
    { 
      id:10,
      nameSong:"song1",
      author:"author1",
      artist:"atist1",
      imageSong:"",
      videoSong:"",
      liked:false,
      category:"jazz",
      time:"2:13",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      playlist:false,
    },
    { 
      id:11,
      nameSong:"song1",
      author:"author1",
      artist:"atist1",
      imageSong:"",
      videoSong:"",
      liked:false,
      category:"jazz",
      time:"2:13",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      playlist:false,
    },
    { 
      id:12,
      nameSong:"song1",
      author:"author1",
      artist:"atist1",
      imageSong:"",
      videoSong:"",
      liked:false,
      category:"jazz",
      time:"2:13",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      playlist:false,
    },

]

const DataSlice = createSlice({
  name: "DataSlice",
  initialState:dataSongs ,

  reducers: {
    addPost(state, action) {
      state.push(action.payload);
    },
    removePost(state, action) {
      state.splice(action.payload, 1);
    }
  }
});

const { actions, reducer } = DataSlice;
export const { addPost, removePost } = actions;
export default reducer;
