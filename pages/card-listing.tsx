import Hero from "../components/common/Hero";
import Card from "../components/ui/Card";
import { useState } from "react";
import { getRandomImageUrl } from "../utils/ImageHelper";
import Button from "../components/ui/Button";

const MAX_CARDS = 8;

const INITIAL_CARDS = [
  {
    id: 0,
    title: "Image Card",
    description: "Lorem Ipsum Dolor Sit Amet.",
    buttonText: "Refresh",
    imageUrl: getRandomImageUrl(),
  },
  {
    id: 1,
    title: "Image Card",
    description: "Lorem Ipsum Dolor Sit Amet.",
    buttonText: "Refresh",
    imageUrl: getRandomImageUrl(),
  },
  {
    id: 2,
    title: "Image Card",
    description: "Lorem Ipsum Dolor Sit Amet.",
    buttonText: "Refresh",
    imageUrl: getRandomImageUrl(),
  },
  {
    id: 3,
    title: "Image Card",
    description: "Lorem Ipsum Dolor Sit Amet.",
    buttonText: "Refresh",
    imageUrl: getRandomImageUrl(),
  },
];

function Cards() {
  const [cards, setCards] = useState(INITIAL_CARDS);

  const addCard = () => {
    if (cards.length === MAX_CARDS) {
      alert(`You can only add ${MAX_CARDS} cards.`);
      return;
    }

    setCards([
      ...cards,
      {
        id: cards.length,
        title: "Image Card",
        description: "Lorem Ipsum Dolor Sit Amet.",
        buttonText: "Refresh",
        imageUrl: getRandomImageUrl(),
      },
    ]);
  };

  const deleteCard = (cardId: number) => {
    const filteredCards = cards.filter((card) => card.id !== cardId);
    setCards(filteredCards);
  };

  return (
    <div className="pb-20">
      <Hero
        title="Click Counter"
        description="Click the button to count the clicks"
      />
      <div className="container mx-auto">
        <div className="py-6">
          {cards.length} {cards.length === 1 ? "image" : "images"} found
        </div>
        {cards.length > 0 ? (
          <div className="grid grid-cols-4 gap-6">
            {cards.map((card, idx) => (
              <Card
                key={card.id}
                title={`${card.title} ${idx + 1}`}
                description={card.description}
                onDelete={() => deleteCard(card.id)}
              />
            ))}
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-bold">No Cards</h1>
            <p>Lorem Ipsum Dolor Sit Amet.</p>
          </div>
        )}
        <div className="flex justify-end w-full mt-6">
          <Button className="bg-blue-500 w-fit" onClick={addCard}>
            Add Card
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
