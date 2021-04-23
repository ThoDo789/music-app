import React, { useEffect, useRef, useState } from "react";
import { Col } from "reactstrap";
import { TiArrowShuffle } from "@react-icons/all-files/ti/TiArrowShuffle";
import { BsPause } from "@react-icons/all-files/bs/BsPause";
import { BiSkipNext } from "@react-icons/all-files/bi/BiSkipNext";
import { BsPlay } from "@react-icons/all-files/bs/BsPlay";
import { BiSkipPrevious } from "@react-icons/all-files/bi/BiSkipPrevious";
import { BiVolumeFull } from "@react-icons/all-files/bi/BiVolumeFull";
import { BiVolumeMute } from "@react-icons/all-files/bi/BiVolumeMute";
import { MdReplay } from "@react-icons/all-files/md/MdReplay";
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart";
import { HiOutlineDotsCircleHorizontal } from "@react-icons/all-files/hi/HiOutlineDotsCircleHorizontal";
import "./event.css";
import { useDispatch, useSelector } from "react-redux";
import { getLike, nextSong, prevSong, setPlay,isRandom } from "../../redux/actions/action";
import TimeSlider from "react-input-slider";

function Event(props) {
  const audioRef = useRef();
  // const [isPlay, setPlay] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentVolum, setVolum] = useState(50);
  // const [index, setIndex] = useState(0);
  const [listMusic, setListMusic] = useState(null);
  const [currrentSong, setCurrentSong] = useState(null);
  const { data, image, statePlay, index,isRandomIndex } = useSelector(state => state.data);

 
console.log(isRandomIndex)
  const dispatch = useDispatch();

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
    if (!statePlay) audioRef.current.play();
  };

  const handlePausePlayClick = () => {
    if (statePlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    dispatch(setPlay(!statePlay));
  };

  const handleTimeSliderChange = ({ x }) => {
    audioRef.current.currentTime = x;
    setCurrentTime(x);

    if (statePlay) {
      setPlay(true);
      audioRef.current.play();
    }
  };

  const handlePrev = index => {
    if (data) {
      if (index > 0) {
        index -= 1;
      } else {
        index = 0;
      }

      dispatch(prevSong(index));
    }
  };
  
const handleNext=(index)=>{
    if(index<data.length){
      index+=1
    }else{
      index=data.length
    }
    dispatch(nextSong(index))
}
  const handleSliderVolum = ({ x }) => {
    audioRef.current.volume = x / 100;

    setVolum(x);
  };

  const styleRange = {
    track: {
      backgroundColor: "#e3e3e3",
      height: "4px"
    },
    active: {
      backgroundColor: "blueviolet",
      height: "2px"
    },
    thumb: {
      marginTop: "-3px",
      width: "10px",
      height: "10px",
      backgroundColor: "blueviolet",
      borderRadius: "50%"
    }
  };
  const handleShuffle = () => {
    dispatch(isRandom())
      
  };
  const handleLike = id => {
    console.log(id);
    dispatch(getLike(id));
  };
  return (
    <Col xs="12" className="music-play">
      <TimeSlider
        className="range-music"
        axis="x"
        xmax={duration}
        x={currentTime}
        onChange={handleTimeSliderChange}
        styles={styleRange}
      />

      {data[index] && (
        <div className="music-handle">
          <div className="music-left">
            <img
              className="music-img"
              src={`../../../asset/imgs/song${data[index].imageSong}.jpg`}
              alt="img"
            />
            <div className="music-info">
              <p className="music-name">{data[index].nameSong}</p>
              <div className="music-artist">{data[index].artist}</div>
            </div>
          </div>

          <div className="event-music">
            <button className="event-music__handle" onClick={handleShuffle}>
              <TiArrowShuffle />
            </button>
            <button
              className="event-music__handle"
              onClick={() => handlePrev(index)}
            >
              <BiSkipPrevious />
            </button>
            <button
              className="event-music__handle"
              onClick={handlePausePlayClick}
            >
              {!statePlay ? <BsPlay /> : <BsPause />}
            </button>
            <button className="event-music__handle" onClick={()=>handleNext(index)}>
              <BiSkipNext />
            </button>
            <button className="event-music__handle">
              <MdReplay />
            </button>
            <audio
              className="audio-music"
              // src="../../../asset/songs/song1.mp3"
              ref={audioRef}
              // autoPlay={audioRef.play}
              autoPlay
              src={`../../../asset/songs/song${data[index].imageSong}.mp3`}
              onLoadedData={handleLoadedData}
              onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
              onEnded={() => setPlay(false)}
            ></audio>
          </div>

          <div className="music-right">
            <div className="music-volum">
              <div className="music-volum__icon">
                <BiVolumeFull />
              </div>
              <TimeSlider
                axis="x"
                onChange={handleSliderVolum}
                xmax="100"
                x={currentVolum}
                styles={styleRange}
              />

              <div
                className="for-you__details-like active-like"
                onClick={() => handleLike(data[index].id)}
              >
                {data[index].liked === true ? (
                  <AiFillHeart className="icon-liked" />
                ) : (
                  <AiOutlineHeart />
                )}
              </div>
              <div className="for-you__details-like active-like">
                {" "}
                <HiOutlineDotsCircleHorizontal />
              </div>
            </div>
          </div>
        </div>
      )}
    </Col>
  );
}

export default Event;
