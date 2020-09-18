import * as fromActions from '../actions/green.actions';
import {Green, GreenCategory} from '../../models/green.model';
import {Action, createReducer, on} from '@ngrx/store';
import {getGreenByCategory} from '../../services/green.service';

export interface GreenState {
  category: GreenCategory;
  options: Green[];
  selectedOption: Green;
}

export const initialState: GreenState = {
  category: undefined,
  options: [],
  selectedOption: undefined
};


const greenReducer = createReducer(
  initialState,
  on(fromActions.setGreenCategory, (state, {category}) => {
    const options = getGreenByCategory(category);
    return {category, options, selectedOption: options[Math.floor(Math.random() * options.length)]};
  }),
  on(fromActions.setGreenOption, (state, {green}) => ({...state, selectedOption: green})),
  on(fromActions.randomizeGreen, (state) => {
    return {...state, selectedOption: state.options[Math.floor(Math.random() * state.options.length)]};
  }),
  on(fromActions.resetGreen, (state) => initialState)
);

export function reducer(state: GreenState | undefined, action: Action) {
  return greenReducer(state, action);
}
