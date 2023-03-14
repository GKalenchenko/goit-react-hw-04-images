import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { Component } from 'react';
import { Wrapper } from './App.styled';

export class App extends Component {
  state = {
    inputValue: '',
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ inputValue: e.target[1].value });
  };

  render() {
    return (
      <Wrapper>
        <SearchBar onSubmit={this.onSubmit} />
        <ImageGallery inputValue={this.state.inputValue}>
          <ImageGalleryItem />
        </ImageGallery>
      </Wrapper>
    );
  }
}
