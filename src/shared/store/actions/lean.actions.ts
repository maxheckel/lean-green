import {createAction, props} from '@ngrx/store';
import {Lean, LeanCategory} from '../../models/lean.model';

export const setLeanCategory = createAction(
  '[Lean] set lean',
  props<{category: LeanCategory}>()
);

export const setLeanOption = createAction(
  '[Lean] set lean option',
  props<{lean: Lean}>()
);


export const randomizeLean = createAction(
  '[Lean] Randomize',
  props()
);

export const resetLean = createAction(
  '[Lean] Reset',
  props()
);
