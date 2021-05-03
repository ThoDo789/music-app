import React from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import "./foryou.css";
import Graph from "./Graph";
import ListForyou from "./ListForyou";
import SongSlider from "./SongSlider";


function ForYou(props) {
  const {  image } = useSelector(
    state => state.data
  );

  return (
    <Container fluid>
      <Row>
        <Col xs="12">
          <h3 className="for-you__title">Releases for you</h3>
        </Col>

        <Col lg="5" sm="12" md="12" className="col-6-ipad-pro">
          <div className="for-you__img">
            {image && (
              <img
                src={`../../../asset/imgs/song${image.imageSong}.jpg`}
                alt="avarta"
              />
            )}

            <Graph />
            
          </div>
        </Col>

        <ListForyou />

        <Col xs="12">
          <h3 className="for-you__title">Recently played</h3>
        </Col>
        <SongSlider />
      </Row>
    </Container>
  );
}

export default ForYou;
