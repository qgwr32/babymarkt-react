interface RatingProps {
  rating: number,
  maxRating: number
}

export default function Rating(props: RatingProps) {
  const { rating, maxRating } = props;

  return (
    <span>
      {rating} / {maxRating}
    </span>
  );
}
