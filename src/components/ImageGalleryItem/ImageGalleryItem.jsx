import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import { Component, useState } from 'react';
import { GalleryImage, GalleryItem } from './ImageGalleryItem.styled';

// export class ImageGalleryItem extends Component {
//   state = {
//     largeImage: null,
//     alt: null,
//   };

//   setModalImg = (url, alt) => {
//     this.setState({ largeImage: url });
//     this.setState({ alt });
//   };

//   render() {
//     const { largeImage, alt } = this.state;
//     const { images } = this.props;

//     return (
//       <>
//         {images.map(({ tags, webformatURL, largeImageURL }, idx) => {
//           return (
//             <GalleryItem
//               className="gallery-item"
//               key={idx}
//               onClick={() => {
//                 this.setModalImg(largeImageURL, tags);
//               }}
//             >
//               <GalleryImage src={webformatURL} alt={tags} />
//             </GalleryItem>
//           );
//         })}
//         {largeImage && (
//           <Modal
//             largeImage={largeImage}
//             setModal={this.setModalImg}
//             alt={alt}
//           />
//         )}
//       </>
//     );
//   }
// }

export const ImageGalleryItem = ({ images }) => {
  const [largeImage, setLargeImage] = useState(null);
  const [alt, setAlt] = useState(null);

  return (
    <>
      {images.map(({ tags, webformatURL, largeImageURL }, idx) => {
        return (
          <GalleryItem
            className="gallery-item"
            key={idx}
            onClick={() => {
              setLargeImage(largeImageURL);
              setAlt(tags);
            }}
          >
            <GalleryImage src={webformatURL} alt={tags} />
          </GalleryItem>
        );
      })}
      {largeImage && (
        <Modal
          largeImage={largeImage}
          setLargeImage={setLargeImage}
          alt={alt}
        />
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  response: PropTypes.arrayOf(PropTypes.object),
};
