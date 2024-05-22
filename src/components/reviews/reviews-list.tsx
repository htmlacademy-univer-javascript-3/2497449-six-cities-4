import ReviewItem from './review-item';
import { Review } from '../../types/reviews';

type ReviewListProps = {
    reviews: Review[];
}

export default function ReviewsList({ reviews }: ReviewListProps) {
  return (
    <ul className="reviews__list">
      {reviews
        .slice()
        .sort((reviewA, reviewB) => {
          const dateA = new Date(reviewA.date).getTime();
          const dateB = new Date(reviewB.date).getTime();

          return dateB - dateA;
        })
        .slice(0, 10)
        .map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
    </ul>
  );
}
