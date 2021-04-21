import React from 'react';
import { Col } from 'reactstrap';
import{TiArrowShuffle} from "@react-icons/all-files/ti/TiArrowShuffle";
import{BsPause} from "@react-icons/all-files/bs/BsPause";
import{BiSkipNext} from "@react-icons/all-files/bi/BiSkipNext";
import{BsPlay} from "@react-icons/all-files/bs/BsPlay";
import{BiSkipPrevious} from "@react-icons/all-files/bi/BiSkipPrevious";
import{BiVolumeFull} from "@react-icons/all-files/bi/BiVolumeFull";
import{BiVolumeMute} from "@react-icons/all-files/bi/BiVolumeMute";
import{MdReplay} from "@react-icons/all-files/md/MdReplay";
import{AiOutlineHeart} from "@react-icons/all-files/ai/AiOutlineHeart";
import{HiOutlineDotsCircleHorizontal} from "@react-icons/all-files/hi/HiOutlineDotsCircleHorizontal";
import "./event.css";
function Event(props) {
    return (
        <Col xs="12" className="music-handle" >
            <div className="music-left">
                <img className="music-img" src="https://picsum.photos/seed/picsum/200/300" alt="img"/>
                <div className="music-info">
                <p className="music-name">tgho</p>
                <div className="music-artist">thoodof</div>
                </div>
               

            </div>
            <div className="event-music">
                <button className="event-music__handle"><TiArrowShuffle/></button>
                <button className="event-music__handle"><BiSkipPrevious/></button>
                <button className="event-music__handle"><BsPlay/></button>
                <button className="event-music__handle"><BiSkipNext/></button>
                <button className="event-music__handle"><MdReplay/></button>
               
            </div>
            <div className="music-right">
                <div className="music-volum">
                    <div className="music-volum__icon"><BiVolumeFull/></div>
                    <input type="range" min="1" max="100" className="music-range"/>  
                    <div class="for-you__details-like active-like"> <AiOutlineHeart/></div> 
                    <div class="for-you__details-like active-like"> <HiOutlineDotsCircleHorizontal/></div> 
                </div>   

            </div>
        </Col>
    );
}

export default Event;