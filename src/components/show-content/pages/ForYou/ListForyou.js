import { AiFillHeart } from '@react-icons/all-files/ai/AiFillHeart';
import { AiOutlineHeart } from '@react-icons/all-files/ai/AiOutlineHeart';
import { BsThreeDots } from '@react-icons/all-files/bs/BsThreeDots';
import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col } from 'reactstrap';
import { getImage, getLike } from '../../../../redux/actions/action';

function ListForyou(props) {
    const dispatch = useDispatch();
    const { data, index } = useSelector(
      state => state.data
    );
    const handleListenMusic = key => {
        const image = data.find(value => value.id === key);
   
        dispatch(getImage(image));
        window.scroll(0,0)
      };
    
      const handleLike = async (id, data) => {
       console.log(data)
        dispatch(getLike(id));
          // try {
          //   const indexId = await data.filter(value => value.id === id);
          //   console.log(indexId[0].id)
          //   const res = await axios.put(
          //     `http://localhost:5000/songs/${indexId[0].id}`,
          //     {
          //       id: indexId[0].id,
          //       artist: indexId[0].artist,
          //       author: indexId[0].author,
          //       category: indexId[0].category,
          //       desc: indexId[0].decs,
          //       imageSong: indexId[0].imageSong,
          //       liked:indexId[0].liked,
          //       music: indexId[0].music,
          //       nameSong: indexId[0].nameSong,
          //       playlist:indexId[0].playlist,
          //       years: indexId[0].years
          //     }
          //   );
          //   await console.log(res.data.body);
          // } catch (err) {
          //   console.error("eeeor");
          // }
      
       
      };
    
    return (
      <Col lg="7" sm="12" md="12" className="foryou__wraper overflow-s">
                {data.map((value, key) => (
                  <div className="for-you__wrap col-12" key={key}>
                    <div className="for-you__left">
                      <div className="for-you__details-index">{key + 1}</div>

                      {data[index] && (
                        <div
                          className="for-you__details-like active-like"
                          onClick={() => handleLike(value.id, index,key,value)}
                        >
                          {value.liked === true ? (
                            <AiFillHeart className="icon-liked" />
                          ) : (
                            <AiOutlineHeart />
                          )}
                        </div>
                      )}

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
                          <div className="add-album">
                            <span className="add-text"> + Add Album</span>
                          </div>
                        </div>
                        <ul className="for-you__menu-list"></ul>
                      </div>
                    </div>
                  </div>
                ))}
              </Col> 
    );
}

export default ListForyou;