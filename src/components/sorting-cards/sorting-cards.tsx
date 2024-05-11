import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {sortTypeSelect} from '../../store/action.ts';
import { SORT_TYPES } from '../../const.ts';

function CardsSorting() {
  const [isOpen, setIsOpen] = useState(false);
  const selectedSortType = useAppSelector((state) => state.sortType);
  const dispatch = useAppDispatch();
  const handleSortTypeChange = (sortType: string) => {
    dispatch(sortTypeSelect(sortType));
  };
  return (
    <form className="places__sorting" action="#" method="get" onClick={() => setIsOpen(!isOpen)}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {selectedSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
        {Object.entries(SORT_TYPES).map(([key, sortType]) => (
          <li key={key}
            className={`places__option ${selectedSortType === sortType ? 'places__option--active' : ''}`}
            onClick={() => handleSortTypeChange(sortType)}
            tabIndex={0}
          >
            {sortType}
          </li>))}
      </ul>
    </form>
  );
}

export default CardsSorting;
