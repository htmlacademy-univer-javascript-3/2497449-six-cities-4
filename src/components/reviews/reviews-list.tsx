import ReviewItem from './review-item';
import { Review } from '../../types/reviews';

type ReviewListProps = {
    reviews: Review[];
}

export default function ReviewsList({ reviews }: ReviewListProps) {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review}/>
      ))}
    </ul>
  );
}
