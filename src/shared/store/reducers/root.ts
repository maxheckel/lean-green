import * as fromGreen from './green.reducers';
import * as fromLean from './lean.reducers';

export interface AppState {
  green: any;
  lean: any;
}
export const reducers: AppState = {
  green: fromGreen.reducer,
  lean: fromLean.reducer
};
