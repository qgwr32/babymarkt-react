import { useEffect, useState } from "react";
import { getRandomImageUrl } from "../../../utils/ImageHelper";
import Button from "../Button";


interface CardProps {
  title: string,
  description: string,
  url?: string,
  onDelete: () => void;
}

function Card(props: CardProps) {
  const { title, description, url, onDelete } = props;
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
    <div className="p-6 bg-white card rounded-xl">
      <div className="card__header">
        <div className="text-xl font-bold card__title">{title}</div>
        <div className="card__description">{description}</div>
      </div>
      <div className="my-4 imageContainer">
        <img src={imageUrl || ''} alt="Random Lorem Picsum" />
      </div>
      <div className="flex flex-row justify-between -mx-2 card__actions">
        <Button
          className="w-full mx-2 bg-red-500"
          variant="dark"
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
