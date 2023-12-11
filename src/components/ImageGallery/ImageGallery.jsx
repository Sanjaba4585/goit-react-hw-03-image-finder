import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images, onModalOpen }) => {
  return (
    <ul className={css.gallery}>
      {images.length > 0 &&
        images.map(image => (
          <ImageGalleryItem
            key={image.id}
            item={image}
            onModalOpen={onModalOpen}
          />
        ))}
    </ul>
  );
};
