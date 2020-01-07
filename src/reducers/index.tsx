import { EnthusiasmAction } from '../actions';
import { IStoreState } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';

const initIStoreState: IStoreState = {
  languageName: 'java',
  enthusiasmLevel: 1
};

// export function enthusiasm(state: IStoreState, action: EnthusiasmAction): IStoreState {
export function enthusiasm(state = initIStoreState, action: EnthusiasmAction): IStoreState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
  }
  return state;
}