import styled from 'styled-components';

export const StyledSong = styled.article`
  display: block;
  width: 100%;
  padding: 16px;
  background-color: ${(props) => props.color ? props.color : '#666bad'};
`;

export const StyledSongInfo = styled.div`
`;

export const StyledSongAuthor = styled.h3`
`;

export const StyledSongName = styled.h4`
`;

export const StyledSongMessage = styled.div`
`;

export const StyledSongActions = styled.div`
`;