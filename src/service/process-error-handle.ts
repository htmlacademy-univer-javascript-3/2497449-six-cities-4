import { clearErrorAction } from '../store';
import { setError } from '../store';
import { store } from '../store';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());

};

