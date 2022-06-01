import { useEffect, useState } from "react";
import { getRandomImageUrl } from "../../../utils/ImageHelper";
import Button from "../Button";

function Card(props) {
  const { title, description, buttonText, url, onDelete } = props;
  const [imageUrl, setImageUrl] = useState(url || null);

  useEffect(() => {
    if (!url) {
      updateImage();
    }
  }, []);

  const updateImage = () => {
    setImageUrl(getRandomImageUrl());
  };

  return (
    <div className="card bg-white rounded-xl p-6">
      <div className="card__header">
        <div className="card__title font-bold text-xl">{title}</div>
        <div className="card__description">{description}</div>
      </div>
      <div className="imageContainer my-4">
        <img src={imageUrl} alt="Random Lorem Picsum" />
      </div>
      <div className="card__actions flex flex-row justify-between -mx-2">
        <Button
          className="w-full mx-2 bg-red-500"
          variant="danger"
          onClick={onDelete}
        >
          Delete
        </Button>
        <Button className="w-full mx-2 bg-blue-500" onClick={updateImage}>
          Refresh
        </Button>
      </div>
    </div>
  );
}

export default Card;
