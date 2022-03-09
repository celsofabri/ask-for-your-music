import React, { useContext, useEffect } from 'react';
import { Context } from 'context';
import Song from 'components/Song'
import { colors } from 'assets/global/tokens';
import { randomProperty } from 'utils';
import { set } from 'react-hook-form';
// import MUSICS from 'components/Song/constants';

const Playlist = () => {
  const { state, setState } = useContext(Context);
  const { playlist } = state;
  const storage = JSON.parse(localStorage.getItem('playlist'));

  useEffect(() => {
    if (storage.length > 0) {
      setState((prevState) => ({
        ...prevState,
        playlist: storage
      }))
    }
  }, [])

  
  
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