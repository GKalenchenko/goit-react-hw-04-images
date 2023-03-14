import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';

import { Overlay, ModalWindow } from './Modal.styled';

const modal = document.querySelector('#modal');

export class Modal extends Component {
  componentDidMount() {
    this.handleKeyDown();
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = () => {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.props.setModal(null);
      }
    });
  };

  modalHidden = () => {
    this.props.setModal(null);
  };

  render() {
    const { largeImage, alt } = this.props;
    return createPortal(
      <Overlay onClick={this.modalHidden}>
        <ModalWindow>
          <img src={largeImage} alt={alt} />
        </ModalWindow>
      </Overlay>,
      modal
    );
  }
}

Modal.propTypes = {
  setModal: PropTypes.func.isRequired,
};
