import { Review } from '../../types/reviews';


type ReviewProps = {
  review: Review;
};

function formatDateString(dateString: string): string {
  const dateObj = new Date(dateString);
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const monthIndex = dateObj.getMonth();
  const monthName = monthNames[monthIndex];
  const year = dateObj.getFullYear();

  return `${monthName} ${year}`;
}

export default function ReviewItem({ review }: ReviewProps): JSX.Element {
  const {autor, rating, text, date, id} = review;
  const dateString = formatDateString(date);
  return (
    <li className ="reviews__item" key = {id}>
      <div className ="reviews__user user">
        <div className ="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={autor.autorAvatar} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className ="reviews__user-name">
          {autor.name}
        </span>
      </div>
      <div className ="reviews__info">
        <div className ="reviews__rating rating">
          <div className ="reviews__stars rating__stars">
            <span style={{width: `${(rating / 5) * 100}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className ="reviews__time" dateTime={date}>{dateString}</time>
      </div>
    </li>
  );
}
