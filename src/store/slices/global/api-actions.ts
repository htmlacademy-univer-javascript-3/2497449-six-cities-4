import { createAsyncThunk } from '@reduxjs/toolkit';
import { TIMEOUT_SHOW_ERROR } from '../../../const';
import { setError } from './global-data';
import { store } from '../..';

export const clearErrorAction = createAsyncThunk('clearError', () => {
  setTimeout(() => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
});
