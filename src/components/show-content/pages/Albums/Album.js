import React from 'react';
import { Masonry } from "masonic";
import { useSelector } from 'react-redux';
import ItemSong from './ItemSong';
import "./album.css"
let i = 0
function Album(props) {
   
    const items = Array.from(Array(20), () => {
        const randomPhoto = Math.floor(Math.random() * 20) + 1 
        const randomHeight = Math.floor(Math.random() * 5) + 2
        const randomWidth = Math.floor(Math.random() * 5) + 2
        const imgUrl = `https://picsum.photos/${randomWidth}00/${randomHeight}00?random=${randomPhoto}`
    
        return {
          id: i++,
          name: `Img-title-${i}`,
          src: imgUrl
        }
      })
    return (
        <main className={'container1'}>
        <div className={'masonic'}>
          <Masonry
            items={items}
            columnGutter={8} // Set khoảng cách giữa các column
            columnWidth={300} // Set chiều rộng tối thiểu là 300px
            overscanBy={5} // Giá trị để render trước khi scroll tới
            render={ItemSong} // Grid item của component
          />
        </div>
      </main>
    );
}

export default Album;