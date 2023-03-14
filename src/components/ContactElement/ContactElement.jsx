import PropTypes from 'prop-types';
import { Button, Item, Name, Phone } from './ContactElement.styled';

export const ContactElement = ({ contacts, onClick }) => {
  return (
    <>
      {contacts.map(({ tel, name, id }) => (
        <Item key={id}>
          <Name>{name}:</Name> <Phone>{tel}</Phone>
          <Button type="button" onClick={() => onClick(name)}>
            Delete
          </Button>
        </Item>
      ))}
    </>
  );
};

ContactElement.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      tel: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func,
};
