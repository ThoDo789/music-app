import React from 'react';

function ItemSong({ data: { id, name, src } }) {
    return (
        <div className={'card'}>
        <img className={'img'} alt="kitty" src={src} />
        <span children={name} />
      </div>
    );
}

export default ItemSong;