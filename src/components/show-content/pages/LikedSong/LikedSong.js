
import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart";
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { BsThreeDots } from "@react-icons/all-files/bs/BsThreeDots";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { getImage } from "../../../../redux/actions/action";

function LikedSong(props) {
        
    const dispatch = useDispatch();
    const { data,index } = useSelector(state => state.data);
  const LikeSong = data.filter(song=>song.liked===true)
  console.log(LikeSong) 
  
  console.log(index)
    const handleListenMusic = key => {
  
      const image = data.find(value => value.id === key);
     
      dispatch(getImage(image));
    };

   
  
    return (
      <Container>
        <Row>
          <Col xs="12">
            <h3 className="for-you__title">Favorite songs</h3>
          </Col>
          <Col xs="12" className="foryou__wraper cus">
            <Row>
              
              <Col xs="12" className="foryou__wraper cus">
           
                <Row>
                  {LikeSong.map((value, key) => (
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
                        {/* <div className="for-you__time">2:13</div> */}
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
}

export default LikedSong;