import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart";
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { BiSkipNext } from "@react-icons/all-files/bi/BiSkipNext";
import { BiSkipPrevious } from "@react-icons/all-files/bi/BiSkipPrevious";
import { BiVolumeFull } from "@react-icons/all-files/bi/BiVolumeFull";
import { BsPause } from "@react-icons/all-files/bs/BsPause";
import { BsPlay } from "@react-icons/all-files/bs/BsPlay";
import { HiOutlineDotsCircleHorizontal } from "@react-icons/all-files/hi/HiOutlineDotsCircleHorizontal";
import { MdReplay } from "@react-icons/all-files/md/MdReplay";
import { TiArrowShuffle } from "@react-icons/all-files/ti/TiArrowShuffle";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import TimeSlider from "react-input-slider";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import {
  getDuration,
  getLike,
  isLoop,
  isRandom,
  nextSong,
  prevSong,
  setPlay
} from "../../redux/actions/action";
import useRandom from "../customs/customRandom";
import "./event.css";
import { styleRange } from "./timeStyle";

function Event(props) {
  const audioRef = useRef();
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentVolum, setVolum] = useState(50);

  const [isLoadedFirst, setLoadedIsFirst] = useState(false);

  const { data, statePlay, index, isRandomIndex, isLoopSong } = useSelector(
    state => state.data
  );

  const dispatch = useDispatch();

  const random = useRandom(data.length, index);

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
    dispatch(getDuration(audioRef.current.duration));
    //first time load Data => ko play
    if (isLoadedFirst) {
      setLoadedIsFirst(false);
    } else {
      audioRef.current.play();
      console.log("dd");
    }
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
      audioRef.current.play();
    }
  };

  const handlePrev = index => {
    if (data) {
      !isRandomIndex
        ? index > 0
          ? (index -= 1)
          : (index = 0)
        : (index = random);
    }
    if (statePlay === !true) {
      dispatch(setPlay(!statePlay));
    }
    dispatch(prevSong(index));
  };

  useEffect(() => {
    //componentDidMount here

    if (data.length > 0) {
      dispatch(nextSong(0));

      setLoadedIsFirst(true);
    }

    return () => {
      //componentWillUnmount here.
    };
  }, [data, dispatch]); //componentDidUpdateHere

  const handleNext = index => {
    if (!isRandomIndex) {
      if (index < data.length - 1) {
        index += 1;
      } else {
        index = 0;
      }
    } else {
      index = random;
    }
    if (statePlay === !true) {
      dispatch(setPlay(!statePlay));
    }

    dispatch(nextSong(index));
  };

  const handleSliderVolum = ({ x }) => {
    audioRef.current.volume = x / 100;

    setVolum(x);
  };

  const handleShuffle = () => {
    dispatch(isRandom());
  };
  const handleLoop = () => {
    dispatch(isLoop());
  };

  const handleEnded = index => {
    if (!isRandomIndex) {
      if (index < data.length - 1) {
        index += 1;
      } else {
        index = 0;
      }
    } else {
      index = random;
    }
    if (statePlay === !true) {
      dispatch(setPlay(!statePlay));
    }
    dispatch(nextSong(index));
  };

  const handleLike = async (id, index) => {
    console.log(id);
    dispatch(getLike(id));

    try {
      const res = await axios.put(
        `http://localhost:5000/songs/${data[index].id}`,
        {
          id: data[index].id,
          artist: data[index].artist,
          author: data[index].author,
          category: data[index].category,
          desc: data[index].decs,
          imageSong: data[index].imageSong,
          liked: data[index].liked,
          music: data[index].music,
          nameSong: data[index].nameSong,
          playlist: data[index].playlist,
          years: data[index].years
        }
      );
      await console.log(res.data.body);
    } catch (err) {
      console.error();
    }
  };
  return (
    <Col>
      <Row className="music-play-wrap">
        <Col className="music-play">
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

              <div className="event-music" sm="12" md="12">
                <button
                  className={
                    isRandomIndex
                      ? "event-music__handle"
                      : "event-music__handle disable-event"
                  }
                  onClick={handleShuffle}
                >
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
                <button
                  className="event-music__handle"
                  onClick={() => handleNext(index)}
                >
                  <BiSkipNext />
                </button>
                <button
                  className={
                    !isLoopSong
                      ? "event-music__handle disable-event"
                      : "event-music__handle"
                  }
                  onClick={() => handleLoop(index)}
                >
                  <MdReplay />
                </button>

                <audio
                  className="audio-music"
                  ref={audioRef}
                  src={`../../../asset/songs/song${data[index].imageSong}.mp3`}
                  onLoadedData={handleLoadedData}
                  onTimeUpdate={() =>
                    setCurrentTime(audioRef.current.currentTime)
                  }
                  onEnded={() => handleEnded(index)}
                  loop={isLoopSong ? true : false}
                ></audio>
              </div>

              <div className="music-right">
                
              </div>
              <div className="like-action">
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
                </div>
                <div
                  className="for-you__details-like active-like"
                  onClick={() => handleLike(data[index].id, index)}
                >
                  {data[index].liked === true ? (
                    <AiFillHeart className="icon-liked" />
                  ) : (
                    <AiOutlineHeart />
                  )}
                </div>
                <div className="for-you__details-like active-like">
                  <HiOutlineDotsCircleHorizontal />
                </div>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Col>
  );
}

export default Event;
