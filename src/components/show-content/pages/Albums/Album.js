import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart";
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { BsThreeDots } from "@react-icons/all-files/bs/BsThreeDots";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Container } from "reactstrap";
import { getImage, getLike, getPlaylist } from "../../../../redux/actions/action";

function Album(props) {
  const history = useHistory()
  const { data } = useSelector(state => state.data);

  const { dataPlayList} = useSelector(state => state.playList);


  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const baseUrl = "https://5fdf2d99eca1780017a3095c.mockapi.io/api/playList";
      async function fetchData() {
        const response = await axios(baseUrl);
        const data1 = response.data;
        console.log(data1)
        await dispatch(getPlaylist(data1));
      }
      fetchData();
    } catch (error) {
      console.log("error");
    }
  }, [dispatch]);
  useEffect(() => {
   
      
console.log(dataPlayList)
   
    
  }, [dataPlayList]);
 
 

  //   const handleListenMusic = key => {
     
  //     const image = dataPlayList.find(value => value.item.id === key);
     
  //     dispatch(getImage(image.item));
  //     window.scroll(0,0)

  //     history.push("/")
  //   };

  // //   const handleAdd=(id)=>{
  // //     console.log(id)
  // //     dispatch(addAlbum(id))

  // // }

  // const handleLike = async (id, data) => {
  //   console.log(data)
  //    dispatch(getLike(id));
  //   }

  return (
    <Container>
      {/* {dataPlayList.length > 0 &&
        dataPlayList.map((value, key) => (
          <div className="for-you__wrap col-12" key={key}>
            <div className="for-you__left">
              <div className="for-you__details-index">{key + 1}</div>

              <div className="for-you__details-like active-like"
               onClick={() => handleLike(value.item.id,key,value)}
              >
                {value.item.liked === true ? (
                  <AiFillHeart className="icon-liked" />
                ) : (
                  <AiOutlineHeart />
                )}
              </div>

              <div className="for-you__details-details"
               onClick={() => handleListenMusic(value.item.id)}
              >
                <h5 className="for-you__details-name">{value.item.nameSong}</h5>
                <p className="for-you__details-artist">{value.item.author}</p>
              </div>
            </div>

            <div className="for-you__right">
              <div className="for-you__menu">
                <div className="for-you__icon-menu">
                  <BsThreeDots />
                  <div className="add-album"></div>
                </div>
                <ul className="for-you__menu-list"></ul>
              </div>
            </div>
          </div>
        ))} */}
    </Container>
  );
}

export default Album;
