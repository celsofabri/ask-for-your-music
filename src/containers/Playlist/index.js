import React from 'react';
import Song from 'components/Song'
import MUSICS from 'components/Song/constants';

const Playlist = () => {

  return(
    <main>
      {MUSICS.map((music) => {
        return <Song music={music} />
      })}
    </main>
  );  
}

export default Playlist;