import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart";
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { BsThreeDots } from "@react-icons/all-files/bs/BsThreeDots";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";


import "./foryou.css";

import Graph from "./Graph";
import ListForyou from "./ListForyou";
import SongSlider from "./SongSlider";
function ForYou(props) {
  
  const { data, image, index, showLine, statePlay } = useSelector(
    state => state.data
  );

  
 
 
  return (
    <Container>
      <Row>
        <Col xs="12">
          <h3 className="for-you__title">Releases for you</h3>
        </Col>
        <Col xs="12" className="foryou__wraper">
          <Row >
            <Col xs="5">
              <div className="for-you__img">
                {image && (
                  <img
                    src={`../../../asset/imgs/song${image.imageSong}.jpg`}
                    alt="avarta"
                  />
                )}

               <Graph/>
              </div>
            </Col>
            <Col xs="7" className="foryou__wraper">
             <ListForyou/>
            </Col>
          </Row>
        </Col>
        <Col xs="12">
          <h3 className="for-you__title">Recently played</h3>
        </Col>
          <SongSlider/>
      </Row>
    </Container>
  );
}

export default ForYou;
