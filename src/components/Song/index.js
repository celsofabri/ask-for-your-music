import React from 'react';
import Button from 'components/Form/Button';
import { StyledWrapper } from 'assets/global/styled';
import {
  StyledSong,
  StyledSongInfo,
  StyledSongAuthor,
  StyledSongName,
  StyledSongMessage,
  StyledSongActions
} from './styled';

const Song = ({ music, color }) => {

  console.log('music', music);
  
  const { author, name, message } = music;

  return (
    <StyledSong color={color}>
      <StyledWrapper>
        <StyledSongInfo>
          <StyledSongAuthor>{ author }</StyledSongAuthor>
          <StyledSongName>{ name }</StyledSongName>
          <StyledSongMessage>
            {message}
          </StyledSongMessage>
        </StyledSongInfo>
        <StyledSongActions>
          <Button>Tocar</Button>
          <Button>Deletar</Button>
        </StyledSongActions>
      </StyledWrapper>
    </StyledSong>
  )
}

export default Song;