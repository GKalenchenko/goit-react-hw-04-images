import PropTypes from 'prop-types';
import { Input, Title } from './SearchFilter.styled';

export const SearchFilter = ({ onChange }) => {
  return (
    <>
      <Title>Find contacts by name</Title>
      <Input onChange={onChange} placeholder="Find contact"></Input>
    </>
  );
};

SearchFilter.propTypes = {
  onChange: PropTypes.func,
};
