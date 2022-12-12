import PropTypes from 'prop-types';
import { GalleryImg, PhotoCard } from './ImageGalleryItem.styled';


function ImageGalleryItem({ image, tags, onModal, largeImageURL }) {
  return (
    <>
      <PhotoCard>
        <GalleryImg src={image} alt={tags} onClick={() => onModal(largeImageURL)} />
      </PhotoCard>
    </>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.string,
  tags: PropTypes.string,
  onModal: PropTypes.func,
  largeImage: PropTypes.string,
};

export default ImageGalleryItem;
