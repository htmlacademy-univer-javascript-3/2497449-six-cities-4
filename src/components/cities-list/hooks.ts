import { useEffect } from 'react';
import { useAppOutletContext } from '../../components/page-layout/hooks';
import { FullOffer } from '../../types/offers';
import {
  fetchNearbyAction,
  fetchOfferAction,
  fetchReviewsAction,
  useAppDispatch
} from '../../store';

export function useOfferData(id: string) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOfferAction(id));
    dispatch(fetchReviewsAction(id));
    dispatch(fetchNearbyAction(id));
  }, [dispatch, id]);
}

export function usePageInfo(offer: FullOffer | null) {
  const { setPageInfo } = useAppOutletContext();

  useEffect(() => {
    setPageInfo({
      title: offer?.title || '',
      description: offer?.description || '',
    });
  }, [offer?.description, offer?.title, setPageInfo]);
}
