import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Button } from 'components/Button/Button';
import { FlexWrapper, ImageList } from './ImageGallery.styled';
import { Loader } from 'components/Loader/Loader';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = 'key=32008820-29a82a4a3d033faa63b9c6371';
const API_IMG_TYPE = 'image_type=photo&orientation=horizontal';
const API_IMG_PER_PAGE = 'per_page=12';

export const ImageGallery = ({ inputValue }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  const onClick = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (inputValue === '') return;
    if (currentPage === 1) return;

    const fetchData = async () => {
      console.log('Bye', Date.now());
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${BASE_URL}?q=${inputValue}&page=${currentPage}&${API_KEY}&${API_IMG_TYPE}&${API_IMG_PER_PAGE}`
        );
        setData(prevResponse => {
          return [...prevResponse, ...response.data.hits];
        });
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [inputValue, currentPage]);

  useEffect(() => {
    if (inputValue === '') return;

    const fetchData = async () => {
      console.log('Hi', Date.now());

      setIsLoading(true);
      try {
        const response = await axios.get(
          `${BASE_URL}?q=${inputValue}&page=1&${API_KEY}&${API_IMG_TYPE}&${API_IMG_PER_PAGE}`
        );
        setData(response.data.hits);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    setCurrentPage(1);
  }, [inputValue]);

  return (
    <>
      {error && <p>Something went wrong please try again</p>}
      {data.length > 0 && (
        <ImageList className="gallery">
          <ImageGalleryItem images={data} />
        </ImageList>
      )}
      <FlexWrapper>
        {isLoading ?? <Loader />}
        {data.length > 0 && <Button onClick={onClick} />}
      </FlexWrapper>
    </>
  );
};

ImageGallery.propTypes = {
  inputValue: PropTypes.string.isRequired,
};
