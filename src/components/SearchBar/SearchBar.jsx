import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';

import {
  SearchWrapper,
  SearchButton,
  SearchForm,
  SearchInput,
} from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  return (
    <SearchWrapper className="searchbar">
      <SearchForm className="form" onSubmit={onSubmit}>
        <SearchButton type="submit" className="button">
          <FcSearch />
        </SearchButton>

        <SearchInput
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchWrapper>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
