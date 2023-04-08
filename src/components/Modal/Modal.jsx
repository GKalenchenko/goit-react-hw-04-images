import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal');

// export class Modal extends Component {
//   componentDidMount() {
//     this.handleKeyDown();
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = () => {
//     window.addEventListener('keydown', e => {
//       if (e.code === 'Escape') {
//         this.props.setLargeImage(null);
//       }
//     });
//   };

//   modalHidden = () => {
//     this.props.setLargeImage(null);
//   };

//   render() {
//     const { largeImage, alt } = this.props;
//     return createPortal(
//       <Overlay onClick={this.modalHidden}>
//         <ModalWindow>
//           <img src={largeImage} alt={alt} />
//         </ModalWindow>
//       </Overlay>,
//       modal
//     );
//   }
// }

export const Modal = ({ setLargeImage, largeImage, alt }) => {
  useEffect(() => {
    const handleKeyDown = () => {
      window.addEventListener('keydown', e => {
        if (e.code === 'Escape') {
          setLargeImage(null);
        }
      });
    };
    handleKeyDown();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setLargeImage]);

  const modalHidden = () => {
    setLargeImage(null);
  };

  return createPortal(
    <Overlay onClick={modalHidden}>
      <ModalWindow>
        <img src={largeImage} alt={alt} />
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  setLargeImage: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
