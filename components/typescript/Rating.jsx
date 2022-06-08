export default function Rating(props) {
  const { rating, maxRating } = props;

  return (
    <span>
      {rating} / {maxRating}
    </span>
  );
}
