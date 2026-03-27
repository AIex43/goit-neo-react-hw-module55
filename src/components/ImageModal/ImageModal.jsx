import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onClose, image }) {
  if (!image) return null;

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <img src={image.urls.regular} alt={image.alt_description} />
      <p>{image.user.name}</p>
    </Modal>
  );
}