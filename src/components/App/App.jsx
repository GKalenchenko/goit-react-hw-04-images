import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useState } from 'react';
import { Wrapper } from './App.styled';

export const App = () => {
  const [inputValue, setInputValue] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    setInputValue(e.target[1].value);
  };

  return (
    <Wrapper>
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery inputValue={inputValue}>
        <ImageGalleryItem />
      </ImageGallery>
    </Wrapper>
  );
};
