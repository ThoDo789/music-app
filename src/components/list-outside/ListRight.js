import { BsThreeDots } from "@react-icons/all-files/bs/BsThreeDots";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import { getImage } from "../../redux/actions/action";
import "./listRight.css";
import Moment from 'react-moment';
import { useHistory } from "react-router";

function ListRight(props) {
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.data);
  const LikeSong = data.filter(song => song.liked === true);
 const history = useHistory()




  const handleListenMusic = key => {
    const image = data.find(value => value.id === key);

    dispatch(getImage(image));
    window.scroll(0,0)
    history.push("/")

  };
 

  return (
    <Col lg="2" md="12" sm="12" className="col-12-ipad-pro">
      <Row>
        <Col xs="12">
          <h3 className="for-you__title">Favorite Songs Recently</h3>
        </Col>
       
            <Col xs="12" className="foryou__wraper right">
              {/* <Row> */}
                {LikeSong.map((value, key) => (
                  <div  className="for-you__wrap col-12" key={key}>
                    <div className="for-you__left">
                   <img className="music-img "src={`../../../asset/imgs/song${value.imageSong}.jpg`} alt="img"/>

                      <div
                        className="for-you__details-details"
                        onClick={() => handleListenMusic(value.id)}
                      >
                        <h5 className="for-you__details-name">
                          {value.nameSong}
                        </h5>
                        <p className="for-you__details-artist">
                         <span> {value.author}</span>
                         
                         {value.UpdateAt &&<span className="like-time"> <Moment fromNow>{new Date(value.UpdateAt)}</Moment></span>}
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
                   
                    </div>
                  </div>
                ))}
             
            </Col>
          </Row>
        </Col>
  
  );
}

export default ListRight;
