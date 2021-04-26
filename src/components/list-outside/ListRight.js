import { BsThreeDots } from "@react-icons/all-files/bs/BsThreeDots";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import { getImage } from "../../redux/actions/action";
import "./listRight.css";
function ListRight(props) {
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.data);
  const LikeSong = data.filter(song => song.liked === true);
 
 const getTime= (index)=> {
    if(index<LikeSong.length){
        const timeCurrent = new Date()
       const time = new Date(LikeSong[index].UpdateAt)
       const min = timeCurrent.getMinutes() - time.getMinutes()
       if(min<1){
           return `just now`
       }
       else {
        return `${min} minutes`
       }
   
   }
 }
 
 


  const handleListenMusic = key => {
    const image = data.find(value => value.id === key);

    dispatch(getImage(image));
  };
 

  return (
    <Col xs="2">
      <Row>
        <Col xs="12">
          <h3 className="for-you__title">Favorite Songs Recently</h3>
        </Col>
        <Col xs="12" className="foryou__wraper right">
          <Row>
            <Col xs="12" className="foryou__wraper right">
              <Row>
                {LikeSong.map((value, key) => (
                  <Col xs="12" className="for-you__wrap" key={key}>
                    <div className="for-you__left">
                   <img class="music-img "src={`../../../asset/imgs/song${value.imageSong}.jpg`} alt="img"/>

                      <div
                        className="for-you__details-details"
                        onClick={() => handleListenMusic(value.id)}
                      >
                        <h5 className="for-you__details-name">
                          {value.nameSong}
                        </h5>
                        <p className="for-you__details-artist">
                         <span> {value.author}</span>
                         
                         {value.UpdateAt &&<span className="like-time">{getTime(key)}</span>}
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
    </Col>
  );
}

export default ListRight;
