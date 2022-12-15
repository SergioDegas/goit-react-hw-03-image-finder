import PropTypes from 'prop-types';
import { GalleryImg, PhotoCard } from './ImageGalleryItem.styled';


function ImageGalleryItem({ image, tags, onModal, largeImageURL,}) {
  return (
    <>
      <PhotoCard >
        <GalleryImg src={image} alt={tags} onClick={() => onModal(largeImageURL)} />
      </PhotoCard>
    </>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
