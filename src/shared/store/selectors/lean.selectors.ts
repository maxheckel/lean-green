import {createSelector} from '@ngrx/store';
import {LeanState} from '../reducers/lean.reducers';
import {AppState} from '../reducers/root';
import {GreenState} from '../reducers/green.reducers';


export const selectFeature = (state: AppState) => state.lean;

export const getLeanOptions = createSelector(
  selectFeature,
  (state: LeanState) => state.options
);


export const getCurrentCategory = createSelector(
  selectFeature,
  (state: LeanState) => state.category
);

export const getLeanFood = createSelector(
  selectFeature,
  (state: LeanState) => state.selectedOption
);
