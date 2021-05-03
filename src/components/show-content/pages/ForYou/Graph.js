import React from "react";
import { useSelector } from "react-redux";

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
  const array =randomEl(9,60)
  return (
    <div className={statePlay ? "music-line-wrap" : "d-none"}>
      {array.map((value,key)=>(<div className={`music-line line${value}`} key={key}></div>))}
      
    </div>
  );
}

export default Graph;
