
import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart";
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { BsThreeDots } from "@react-icons/all-files/bs/BsThreeDots";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Col, Container, Row } from "reactstrap";
import { getImage } from "../../../../redux/actions/action";
import "./library.css";


function Library(props) {
    const dispatch = useDispatch();
  const { data, image,index } = useSelector(state => state.data);
 
const history = useHistory()

console.log(index)
  const handleListenMusic = key => {

    const image = data.find(value => value.id === key);
   
    dispatch(getImage(image));
    window.scroll(0,0)

    history.push("/")
  };


  return (
    <Container>
      <Row>
        <Col xs="12">
          <h3 className="for-you__title">Library
          </h3>
        </Col>
    
            
            <Col lg="5" sm="12" md="12" className="foryou__wraper cus .col-12-ipad-pro">
         
              
                {data.map((value, key) => (
                  <Col xs="12" className="for-you__wrap" key={key}>
                    <div className="for-you__left">
                      <div className="for-you__details-index">{key + 1}</div>
                      <div
                        className="for-you__details-like active-like"
                        // onClick={() => handleLike(value.id)}
                      >
                        
                        
                        {value.liked === true ? (
                          <AiFillHeart className="icon-liked" />
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
                    
                    </div>
                  </Col>
                ))}

        
            </Col>
            <Col xs="7" className="img-library">
              <div className="for-you__img lib">
                {image && (
                  <img
                    src={`../../../asset/imgs/song${image.imageSong}.jpg`}
                    alt="avarta"
                  />
                ) }
              </div>
            </Col>
          </Row>
     
    </Container>
  );
}



export default Library;