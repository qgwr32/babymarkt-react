import Rating from "./Rating";

interface ProductProps {
  name: string,
  price: number,
  rating: number,
  isAvailable: boolean,
  extraInfo?: string,
}

export default function Product(props: ProductProps) {
  const { name, price, rating, isAvailable, extraInfo } = props;

  return (
    <div className="flex flex-col gap-2">
      <p>Name: {name}</p>
      <p>Preis: {price}€</p>
      <p>
        Bewertung: <Rating rating={rating} maxRating={5} />
      </p>
      <p>Verfügbarkeit: {isAvailable ? "Auf Lager" : "Nicht verfügbar"}</p>
      {extraInfo && <p>Extra Info: {extraInfo}</p>}
    </div>
  );
}
