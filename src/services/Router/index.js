import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Playlist from 'containers/Playlist';
import AskForYourSong from 'containers/AskForYourSong';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Playlist />} />
        <Route exact path="/ask-for-your-song" element={<AskForYourSong />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
