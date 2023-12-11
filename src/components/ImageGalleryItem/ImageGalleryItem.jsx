import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ item, onModalOpen }) => {
  return (
    <li className={css.imageGalleryItem} key={item.id}>
      <img
        className={css.imageGalleryItem_image}
        src={item.webformatURL}
        alt={item.tags}
        onClick={() => onModalOpen(item.largeImageURL)}
      />
    </li>
  );
};
