import PropTypes from 'prop-types';
import { List, Title, Wrapper } from './ContactList.styled';

export const ContactList = ({ children }) => {
  return (
    <Wrapper>
      <Title>Contacts</Title>
      {children[0]}
      <List>{children[1]}</List>
    </Wrapper>
  );
};

ContactList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};
