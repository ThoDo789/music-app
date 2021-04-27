import React from 'react';
import { useSelector } from 'react-redux';

function Graph(props) {
    const {  statePlay } = useSelector(
        state => state.data
      );
    

    return (
        <div className={statePlay ? "music-line-wrap" : "d-none"}>
        <div className="music-line line1"></div>
        <div className="music-line line2"></div>
        <div className="music-line line3"></div>
        <div className="music-line line4"></div>
        <div className="music-line line5"></div>
        <div className="music-line line6"></div>
        <div className="music-line line7"></div>
        <div className="music-line line8"></div>
        <div className="music-line line9"></div>
        <div className="music-line line1"></div>
        <div className="music-line line3"></div>
        <div className="music-line line4"></div>
        <div className="music-line line2"></div>
        <div className="music-line line8"></div>
        <div className="music-line line6"></div>
        <div className="music-line line9"></div>
        <div className="music-line line5"></div>
        <div className="music-line line7"></div>
      </div>
    );
}

export default Graph;