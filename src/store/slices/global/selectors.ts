import { CitiesNames, NameSpace, SortingType } from '../../../const';
import { State } from '../../../types/state';

export const getSelectedSortType = (state: State): SortingType =>
  state[NameSpace.App].selectedSortType;
export const getSelectedCity = (state: State): CitiesNames =>
  state[NameSpace.App].selectedCity;
export const getError = (state: State): string | null =>
  state[NameSpace.App].error;
