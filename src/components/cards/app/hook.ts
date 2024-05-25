import { useEffect } from 'react';

import { fetchFavoritesAction, getAuthCheckedStatus, useAppDispatch, useAppSelector } from '../../../store';


const useFetchFavorites = () => {
  const dispatch = useAppDispatch();
  const authCheckedStatus = useAppSelector(getAuthCheckedStatus);

  useEffect(() => {
    if (authCheckedStatus) {
      dispatch(fetchFavoritesAction());
    }
  }, [dispatch, authCheckedStatus]);
};

export { useFetchFavorites };
