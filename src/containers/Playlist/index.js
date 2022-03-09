import React from 'react';
import Song from 'components/Song'
import { colors } from 'assets/global/tokens';
import MUSICS from 'components/Song/constants';
import { randomProperty } from 'utils';

const Playlist = () => {

  return(
    <main>
      {MUSICS.map((music) => {
        const color = randomProperty(colors);
        return <Song music={music} color={color} />
      })}
    </main>
  );  
}

export default Playlist;