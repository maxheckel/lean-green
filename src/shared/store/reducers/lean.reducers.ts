import * as fromActions from '../actions/lean.actions';
import {Lean, LeanCategory} from '../../models/lean.model';
import {Action, createReducer, on} from '@ngrx/store';
import {getLeanByCategory} from '../../services/lean.service';

export interface LeanState {
  category: LeanCategory;
  options: Lean[];
  selectedOption: Lean;
}

export const initialState: LeanState = {
  category: undefined,
  options: [],
  selectedOption: undefined
};


const leanReducer = createReducer(
  initialState,
  on(fromActions.setLeanCategory, (state, {category}) => {
    const options = getLeanByCategory(category);
    return {category, options, selectedOption: options[Math.floor(Math.random() * options.length)]};
  }),
  on(fromActions.setLeanOption, (state, {lean}) => ({...state, selectedOption: lean})),
  on(fromActions.randomizeLean, (state) => {
    return {...state, selectedOption: state.options[Math.floor(Math.random() * state.options.length)]};
  }),
  on(fromActions.resetLean, (state) => initialState)
);

export function reducer(state: LeanState | undefined, action: Action) {
  return leanReducer(state, action);
}
