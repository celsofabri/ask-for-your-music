import React from 'react';
import Song from 'components/Song'
import { colors } from 'assets/global/tokens';
import { randomProperty } from 'utils';
// import MUSICS from 'components/Song/constants';

const Playlist = () => {

  const playlist = JSON.parse(localStorage.getItem('playlist'));

  return(
    <main>
      {playlist.map((music, index) => {
        const color = randomProperty(colors);
        return <Song key={index} music={music} color={color} />
      })}
    </main>
  );  
}

export default Playlist;