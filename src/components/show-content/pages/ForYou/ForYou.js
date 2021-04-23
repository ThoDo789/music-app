import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { AiFillHeart} from "@react-icons/all-files/ai/AiFillHeart";

import { BsThreeDots } from "@react-icons/all-files/bs/BsThreeDots";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { getImage, getLike } from "../../../../redux/actions/action";
import "./foryou.css";

function ForYou(props) {
  const dispatch = useDispatch();
  const { data, image } = useSelector(state => state.data);
  console.log(data);
  const handleListenMusic = key => {
    const image = data.find(value => value.id === key);
    console.log(image)
    dispatch(getImage(image));
  };
  const handleLike = id => {
    console.log(id);
    dispatch(getLike(id));
  };

  return (
    <Container>
      <Row>
        <Col xs="12">
          <h3 className="for-you__title">Releases for you</h3>
        </Col>
        <Col xs="12" className="foryou__wraper">
          <Row>
            <Col xs="5">
              <div className="for-you__img">
                {image ? (
                  <img
                    src={`../../../asset/imgs/song${image.imageSong}.jpg`}
                    alt="avarta"
                  />
                ) : (
                  <img src="../../../asset/imgs/song1.jpg" alt="avarta" />
                )}
              </div>
            </Col>
            <Col xs="7" className="foryou__wraper">
              <Row>
                {data.map((value, key) => (
                  <Col xs="12" className="for-you__wrap" key={key}>
                    <div className="for-you__left">
                      <div className="for-you__details-index">{key + 1}</div>
                      <div
                        className="for-you__details-like active-like"
                        onClick={() => handleLike(value.id)}
                      >
                        {value.liked === true ? (
                          <AiFillHeart className="icon-liked"/>
                        ) : (
                          <AiOutlineHeart />
                        )}
                      </div>
                      <div
                        className="for-you__details-details"
                        onClick={() => handleListenMusic(value.id)}
                      >
                        <h5 className="for-you__details-name">
                          {value.nameSong}
                        </h5>
                        <p className="for-you__details-artist">
                          {value.author}
                        </p>
                      </div>
                    </div>
                    <div className="for-you__right">
                      <div className="for-you__menu">
                        <div className="for-you__icon-menu">
                          <BsThreeDots />
                        </div>
                        <ul className="for-you__menu-list"></ul>
                      </div>
                      <div className="for-you__time">2:13</div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs="12">
          <h3 className="for-you__title">Recently played</h3>
        </Col>
        <Col xs="12">
          <div className="list-song">
            <div className="item-list">
              <img alt="list img" className="list-song__img" />
              <div className="for-you__details-details">
                <h5 className="for-you__details-name">thosod</h5>
                <p className="for-you__details-artist">Maxsew</p>
              </div>
            </div>
            <div className="item-list">
              <img
                src="http://placeimg.com/640/480"
                alt="list img"
                className="list-song__img"
              />
              <div className="for-you__details-details">
                <h5 className="for-you__details-name">thosod</h5>
                <p className="for-you__details-artist">Maxsew</p>
              </div>
            </div>
            <div className="item-list">
              <img
                src="http://placeimg.com/640/480"
                alt="list img"
                className="list-song__img"
              />
              <div className="for-you__details-details">
                <h5 className="for-you__details-name">thosod</h5>
                <p className="for-you__details-artist">Maxsew</p>
              </div>
            </div>
            <div className="item-list">
              <img
                src="http://placeimg.com/640/480"
                alt="list img"
                className="list-song__img"
              />
              <div className="for-you__details-details">
                <h5 className="for-you__details-name">thosod</h5>
                <p className="for-you__details-artist">Maxsew</p>
              </div>
            </div>
            <div className="item-list">
              <img
                src="http://placeimg.com/640/480"
                alt="list img"
                className="list-song__img"
              />
              <div className="for-you__details-details">
                <h5 className="for-you__details-name">thosod</h5>
                <p className="for-you__details-artist">Maxsew</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ForYou;
