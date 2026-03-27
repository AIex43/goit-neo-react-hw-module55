import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images, onImageClick }) {
  return (
    <ul>
      {images.map(img => (
        <li key={img.id}>
          <ImageCard image={img} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}