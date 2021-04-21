import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import "./foryou.css";
import { AiOutlineHeart, AiFillHeart} from "@react-icons/all-files/ai/AiOutlineHeart";
import { BsThreeDots } from "@react-icons/all-files/bs/BsThreeDots";
import axios from "axios";




function ForYou(props) {
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
                <img src="http://placeimg.com/640/480" alt="avarta" />
              </div>
            </Col>
            <Col xs="7" className="foryou__wraper">
                <Row>
                <Col xs="12" className="for-you__wrap">
              <div className="for-you__left">
                <div className="for-you__details-index">1</div>
                <div className="for-you__details-like active-like">
                  {" "}
                  <AiOutlineHeart />
                </div>
                <div className="for-you__details-details">
                  <h5 className="for-you__details-name">thosod</h5>
                  <p className="for-you__details-artist">Maxsew</p>
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
            <Col xs="12" className="for-you__wrap">
              <div className="for-you__left">
                <div className="for-you__details-index">1</div>
                <div className="for-you__details-like active-like">
                  {" "}
                  <AiOutlineHeart />
                </div>
                <div className="for-you__details-details">
                  <h5 className="for-you__details-name">thosod</h5>
                  <p className="for-you__details-artist">Maxsew</p>
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
            <Col xs="12" className="for-you__wrap">
              <div className="for-you__left">
                <div className="for-you__details-index">1</div>
                <div className="for-you__details-like active-like">
                  {" "}
                  <AiOutlineHeart />
                </div>
                <div className="for-you__details-details">
                  <h5 className="for-you__details-name">thosod</h5>
                  <p className="for-you__details-artist">Maxsew</p>
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
            <Col xs="12" className="for-you__wrap">
              <div className="for-you__left">
                <div className="for-you__details-index">1</div>
                <div className="for-you__details-like active-like">
                  {" "}
                  <AiOutlineHeart />
                </div>
                <div className="for-you__details-details">
                  <h5 className="for-you__details-name">thosod</h5>
                  <p className="for-you__details-artist">Maxsew</p>
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
            <Col xs="12" className="for-you__wrap">
              <div className="for-you__left">
                <div className="for-you__details-index">1</div>
                <div className="for-you__details-like active-like">
                  {" "}
                  <AiOutlineHeart />
                </div>
                <div className="for-you__details-details">
                  <h5 className="for-you__details-name">thosod</h5>
                  <p className="for-you__details-artist">Maxsew</p>
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
            <Col xs="12" className="for-you__wrap">
              <div className="for-you__left">
                <div className="for-you__details-index">1</div>
                <div className="for-you__details-like active-like">
                  {" "}
                  <AiOutlineHeart />
                </div>
                <div className="for-you__details-details">
                  <h5 className="for-you__details-name">thosod</h5>
                  <p className="for-you__details-artist">Maxsew</p>
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
            <Col xs="12" className="for-you__wrap">
              <div className="for-you__left">
                <div className="for-you__details-index">1</div>
                <div className="for-you__details-like active-like">
                  {" "}
                  <AiOutlineHeart />
                </div>
                <div className="for-you__details-details">
                  <h5 className="for-you__details-name">thosod</h5>
                  <p className="for-you__details-artist">Maxsew</p>
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
            <Col xs="12" className="for-you__wrap">
              <div className="for-you__left">
                <div className="for-you__details-index">1</div>
                <div className="for-you__details-like active-like">
                  {" "}
                  <AiOutlineHeart />
                </div>
                <div className="for-you__details-details">
                  <h5 className="for-you__details-name">thosod</h5>
                  <p className="for-you__details-artist">Maxsew</p>
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
            <Col xs="12" className="for-you__wrap">
              <div className="for-you__left">
                <div className="for-you__details-index">1</div>
                <div className="for-you__details-like active-like">
                  {" "}
                  <AiOutlineHeart />
                </div>
                <div className="for-you__details-details">
                  <h5 className="for-you__details-name">thosod</h5>
                  <p className="for-you__details-artist">Maxsew</p>
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
