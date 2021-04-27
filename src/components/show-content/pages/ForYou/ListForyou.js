import { AiFillHeart } from '@react-icons/all-files/ai/AiFillHeart';
import { AiOutlineHeart } from '@react-icons/all-files/ai/AiOutlineHeart';
import { BsThreeDots } from '@react-icons/all-files/bs/BsThreeDots';
import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { getImage, getLike } from '../../../../redux/actions/action';

function ListForyou(props) {
    const dispatch = useDispatch();
    const { data, image, index, showLine, statePlay } = useSelector(
      state => state.data
    );
    const handleListenMusic = key => {
        const image = data.find(value => value.id === key);
    
        dispatch(getImage(image));
      };
    
      const handleLike = async (id, index) => {
        console.log(id);
        dispatch(getLike(id));
    
        try {
          const res = await axios.put(
            `http://localhost:5000/songs/${data[index].id}`,
            {
              id: data[index].id,
              artist: data[index].artist,
              author: data[index].author,
              category: data[index].category,
              desc: data[index].decs,
              imageSong: data[index].imageSong,
              liked: data[index].liked,
              music: data[index].music,
              nameSong: data[index].nameSong,
              playlist: data[index].playlist,
              years: data[index].years
            }
          );
          await console.log(res.data.body);
        } catch (err) {
          console.error("eeeor");
        }
      };
    
    return (
        <Row className="overflow-s">
                {data.map((value, key) => (
                  <Col xs="12" className="for-you__wrap" key={key}>
                    <div className="for-you__left">
                      <div className="for-you__details-index">{key + 1}</div>

                      {data[index] && (
                        <div
                          className="for-you__details-like active-like"
                          onClick={() => handleLike(data[key].id, index)}
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
                  </Col>
                ))}
              </Row> 
    );
}

export default ListForyou;