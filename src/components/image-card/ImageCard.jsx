import css from "./ImageCard.module.css";

const ImageCard = ({
  smallImg,
  altDescription,
  regularImg,
  id,
  setSelectedImg,
  openModal,
}) => {
  const handleOnClick = evt => {
    const selectedImg = evt.target;
    setSelectedImg(selectedImg);
    openModal();
  };

  return (
    <div className={css.thumb}>
      <a href="#id" className={css.galleryLinkImage} onClick={handleOnClick}>
        <img
          id={id}
          src={smallImg}
          alt={altDescription}
          data-regular={regularImg}
        />
      </a>
    </div>
  );
};

export default ImageCard;
