// import { connect, Dispatch } from 'react-redux';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Hello from '../components/Hello';
import * as actions from '../actions/';
import { IStoreState } from '../types/index';

// export function mapStateToProps({ enthusiasmLevel, languageName }: IStoreState) {
//   console.log(languageName + '--' + enthusiasmLevel);
  
//   return {
//     enthusiasmLevel,
//     name: languageName,
//   }
// }

export function mapStateToProps(enthusiasm: any) {
  console.log(enthusiasm);
  console.log(enthusiasm.enthusiasm);
  return {
    name: enthusiasm.languageName,
    enthusiasmLevel: enthusiasm.enthusiasmLevel
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Hello);
export default connect(
  (state: any) => {
    const { enthusiasm } = state;
    return {
      name: enthusiasm.languageName,
      enthusiasmLevel: enthusiasm.enthusiasmLevel
    }
  },
  mapDispatchToProps
)(Hello);