import {createAction, props} from '@ngrx/store';
import {Green, GreenCategory} from '../../models/green.model';
import {Lean} from '../../models/lean.model';

export const setGreenCategory = createAction(
  '[Green] set green category',
  props<{category: GreenCategory}>()
)

export const setGreenOption = createAction(
  '[Green] set green option',
  props<{green: Green}>()
);

export const randomizeGreen = createAction(
  '[Green] Randomize',
  props()
);

export const resetGreen = createAction(
  '[Green] Reset',
  props()
);
