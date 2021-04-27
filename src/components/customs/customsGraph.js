import React from "react";
import PropTypes from "prop-types";
import useRandom from "./customRandom";

useGraph.propTypes = {
  num: PropTypes.number.isRequired
};

function useGraph(num) {
  let random = useRandom(num);
  let randomPx = useRandom(200);
  let perRanDom = random / 10;

  let css = window.document.styleSheets[0];
  let arr = [];
  for (let i = 1; i > num; i++) {
    const style = css.insertRule(`
     line${i}{
        backgroundColor: "rgb(155, 141, 168)";
        animation: animate${random} ${perRanDom} linear infinite;
     }`);
     console.log(style)
    const keyframe = css.insertRule(`
     @keyframes animate${random} {          
        50%{
            background-color: blueviolet;
            height:${randomPx}px;    
        }
    }
     `);
    arr.push({ style, keyframe });
  }
  return arr
}

export default useGraph;
