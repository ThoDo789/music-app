import React from "react";
import { useSelector } from "react-redux";
import useRandom from "../../../customs/customRandom";

function Graph(props) {
  const { statePlay } = useSelector(state => state.data);
 
  const randomEl = (max,quantity) => {
    const arr = []
  while(arr.length < quantity){
    var candidateInt = Math.floor(Math.random() * max) + 1
     arr.push(candidateInt)
  }
return(arr)

  };
  const array =randomEl(9,40)
  return (
    <div className={statePlay ? "music-line-wrap" : "d-none"}>
      {array.map((value,key)=>(<div className={`music-line line${value}`} key={key}></div>))}
      
    </div>
  );
}

export default Graph;
