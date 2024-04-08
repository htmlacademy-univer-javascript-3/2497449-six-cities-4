import { Offer } from '../../types/offers';
import { Link } from 'react-router-dom';

type CardProps = {
  offer: Offer;
  onCardMouseOver(id:number): void;
  isMainScreen: boolean;
};

enum AddClasses {
  ArticlePropertyAdClass = 'near-places__card place-card',
  ArticleMainAdClass = 'cities__card place-card',
  ImageWrapperPropertyAdClass = 'near-places__image-wrapper place-card__image-wrapper',
  ImageWrapperMainAdClass = 'cities__image-wrapper place-card__image-wrapper',
}


export default function Card({ offer, onCardMouseOver, isMainScreen }: CardProps): JSX.Element {
  const {id, img, isPremium, price, title, type, isFavorite, rating} = offer;

  return (
    <article className={isMainScreen ? AddClasses.ArticleMainAdClass : AddClasses.ArticlePropertyAdClass}
      id ={offer.id.toString()}
      onMouseOver={(evt)=> {
        const target = evt.currentTarget as HTMLElement;
        onCardMouseOver(+target.id);
      }}
    >
      {isMainScreen &&
        <div className="place-card__mark">
          <span>{isPremium ? 'Premium' : ''}</span>
        </div>}
      <div className={isMainScreen ? AddClasses.ImageWrapperMainAdClass : AddClasses.ImageWrapperPropertyAdClass}>
        <a href="#">
          <img className="place-card__image" src={img} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${(rating / 5) * 100}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`} state={offer}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
