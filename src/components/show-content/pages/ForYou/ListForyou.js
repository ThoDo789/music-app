import { AiFillHeart } from '@react-icons/all-files/ai/AiFillHeart';
import { AiOutlineHeart } from '@react-icons/all-files/ai/AiOutlineHeart';
import { BsThreeDots } from '@react-icons/all-files/bs/BsThreeDots';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col } from 'reactstrap';
import { addAlbum, getImage, getLike } from '../../../../redux/actions/action';

function ListForyou(props) {
    const dispatch = useDispatch();
    const { data, index,idLike } = useSelector(
      state => state.data
    );
    
    const {isAddRemove,dataPlayList,idAdd,dataShow} = useSelector(state=>state.playList)
  
    const handleListenMusic = key => {
        const image = data.find(value => value.id === key);
   
        dispatch(getImage(image));
        window.scroll(0,0)
      };
    
      useEffect(()=>{   
        if(data.length>0){
         
            console.log(idLike)
            
          try {
           
             axios.put(
              `http://localhost:5000/songs/${idLike.id}`,
              {
                id: idLike.id,
                artist: idLike.artist,
                author: idLike.author,
                category: idLike.category,
                desc: idLike.decs,
                imageSong: idLike.imageSong,
                liked:idLike.liked,
                music: idLike.music,
                nameSong: idLike.nameSong,
                playlist:idLike.playlist,
                years: idLike.years
              }
            );
           
          } catch (err) {
            console.log("eeeor");
          }
        
         }
      
      },[data,idLike])
       
      const handleLike =  (id) => {
     
          dispatch(getLike(id));
       console.log(id,2343)
      
      };
    

      const handleAdd=(id)=>{
            console.log(id,9798)
           
            dispatch(addAlbum(id))

        
              
      }
      useEffect(()=>{
        const item = data.find(value => value.id === idAdd);
       
        try{
          if(dataPlayList.length>0){
          
          
            if(isAddRemove<0){
             
              
              axios.post(`https://5fdf2d99eca1780017a3095c.mockapi.io/api/playList`,{item} )
  
            }else{
             try{
              console.log("sds")
              const idRemove = dataPlayList.findIndex(value => value.item.id === idAdd);
              console.log(idRemove)
              console.log(dataPlayList[idRemove])
              axios.delete(`https://5fdf2d99eca1780017a3095c.mockapi.io/api/playList/${dataPlayList[idRemove].id}`)
              console.log("remove success")
             }catch(err){
               console.log("err")
             }
             
            }
        }
       
        
      }catch(error){
        console.log("render fist")
      }

      },[dataPlayList,isAddRemove,idAdd,data])
    
    return (
      <Col lg="7" sm="12" md="12" className="foryou__wraper overflow-s col-6-ipad-pro">
                {data.map((value, key) => (
                  <div className="for-you__wrap col-12"  key={key}>
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
                            <span className="add-text" onClick={()=>handleAdd(value.id)}> + Add Album</span>
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