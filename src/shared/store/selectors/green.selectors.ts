import {createSelector} from '@ngrx/store';
import {GreenState} from '../reducers/green.reducers';
import {AppState} from '../reducers/root';


export const selectFeature = (state: AppState) => state.green;

export const getGreenOptions = createSelector(
  selectFeature,
  (state: GreenState) => state.options
);

export const getCurrentCategory = createSelector(
  selectFeature,
  (state: GreenState) => state.category
);

export const getGreenFood = createSelector(
  selectFeature,
  (state: GreenState) => state.selectedOption
);
