import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import axios from 'axios';
import { Button } from 'components/Button/Button';
import { FlexWrapper, ImageList } from './ImageGallery.styled';
import { Loader } from 'components/Loader/Loader';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = 'key=32008820-29a82a4a3d033faa63b9c6371';
const API_IMG_TYPE = 'image_type=photo&orientation=horizontal';
const API_IMG_PER_PAGE = 'per_page=12';

export class ImageGallery extends Component {
  state = {
    isLoading: false,
    error: null,
    response: [],
    currentPage: 1,
  };

  async componentDidMount() {
    // this.setState({ isLoading: true });
    // try {
    //   const response = await axios.get(
    //     `${BASE_URL}?q=cat&page=${this.state.currentPage}&key=32008820-29a82a4a3d033faa63b9c6371&image_type=photo&orientation=horizontal&per_page=12'`
    //   );
    //   this.setState({ response: response.data.hits });
    // } catch (error) {
    //   this.setState({ error });
    // } finally {
    //   this.setState({ isLoading: false });
    // }
  }

  async componentDidUpdate(prevProps, { currentPage }) {
    if (this.props.inputValue !== prevProps.inputValue) {
      this.setState({ isLoading: true });
      this.setState({ currentPage: 1 });
      try {
        const response = await axios.get(
          `${BASE_URL}?q=${this.props.inputValue}&page=1&${API_KEY}&${API_IMG_TYPE}&${API_IMG_PER_PAGE}`
        );
        this.setState({ response: [...response.data.hits] });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }

    if (this.state.currentPage !== 1) {
      if (this.state.currentPage !== currentPage) {
        try {
          this.setState({ isLoading: true });
          const response = await axios.get(
            `${BASE_URL}?q=${this.props.inputValue}&page=${this.state.currentPage}&${API_KEY}&${API_IMG_TYPE}&${API_IMG_PER_PAGE}`
          );
          this.setState(prev => {
            return { response: [...prev.response, ...response.data.hits] };
          });
        } catch (error) {
          this.setState({ error });
        } finally {
          this.setState({ isLoading: false });
        }
      }
    }
  }

  onClick = () => {
    this.setState(prevState => {
      return { currentPage: prevState.currentPage + 1 };
    });
  };

  render() {
    const { isLoading, error, response } = this.state;

    return (
      <>
        {error && <p>Something went wrong please try again</p>}
        {response.length > 0 && (
          <ImageList className="gallery">
            <ImageGalleryItem images={response} />
          </ImageList>
        )}
        <FlexWrapper>
          {isLoading && <Loader />}
          {response.length > 0 && <Button onClick={this.onClick} />}
        </FlexWrapper>
      </>
    );
  }
}

ImageGallery.propTypes = {
  inputValue: PropTypes.string.isRequired,
};
