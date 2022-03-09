import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Input from 'components/Form/Input';
import Button from 'components/Form/Button';

const AskForYourSong = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const currentStorage = localStorage.getItem('playlist');
    const playlist = [];

    if (currentStorage !== null) {
      const playlistStorage = JSON.parse(currentStorage);
      playlistStorage.push(data);
      localStorage.setItem('playlist', JSON.stringify(playlistStorage));
    } else {
      playlist.push(data);
      localStorage.setItem('playlist', JSON.stringify(playlist));
    }
  };

  return(
    <React.Fragment>
      <Header />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input 
          type="text" 
          placeholder="Seu nome" 
          {...register('user')} 
        />
        <Input 
          type="text" 
          placeholder="Banda" 
          {...register('author')} 
        />
        <Input 
          type="text" 
          placeholder="Nome da Música" 
          {...register('name')} 
        />
        <Button 
          type="submit">
          Enviar
        </Button>
      </form>
      <Footer />
    </React.Fragment>
  );  
}

export default AskForYourSong;