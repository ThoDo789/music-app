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
import { getLike } from "../../redux/actions/action";



function Event(props) {
  const audioRef = useRef();
  const [isPlay, setPlay] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [index, setIndex] = useState(0);
  const [listMusic, setListMusic] = useState(null);
  const [currrentSong,setCurrentSong] = useState(null);
 var { data,image } = useSelector(state => state.data);
const dispatch =useDispatch()

   




  const handleShuffle = () => {};
  const handleLike = id => {
    console.log(id);
    dispatch(getLike(id));
  };
  return (
    <Col xs="12" className="music-handle">
    {image && <div className="music-left">
        <img
          className="music-img"
            src={`../../../asset/imgs/song${image.imageSong || "1"}.jpg`}
          alt="img"
        />
        <div className="music-info">
          <p className="music-name">{image.nameSong || "namesong"}</p>
          <div className="music-artist">{image.artist||"athor"}</div>
        </div>
      </div>}
      <div className="event-music">
        <button className="event-music__handle" onClick={handleShuffle}>
          <TiArrowShuffle />
        </button>
        <button className="event-music__handle">
          <BiSkipPrevious />
        </button>
        <button className="event-music__handle">
          <BsPlay />
        </button>
        <button className="event-music__handle">
          <BiSkipNext />
        </button>
        <button className="event-music__handle">
          <MdReplay />
        </button>
        <audio
          className="audio-music"
          src="../../../asset/songs/song1.mp3"
        ></audio>
      </div>
      {image && <div className="music-right">
        <div className="music-volum">
          <div className="music-volum__icon">
            <BiVolumeFull />
          </div>
          <input type="range" min="1" max="100" className="music-range" />
          <div className="for-you__details-like active-like" 
           onClick={() => handleLike(image.id)}
          >
          { image.liked === true ?
           (<AiFillHeart className="icon-liked"/>) 
           : (<AiOutlineHeart />)}
          </div>
          <div className="for-you__details-like active-like">
            {" "}
            <HiOutlineDotsCircleHorizontal />
          </div>
        </div>
      </div>}
    </Col>
  );
}

export default Event;
