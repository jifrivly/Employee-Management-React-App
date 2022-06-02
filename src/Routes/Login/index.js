import { connect } from 'react-redux';

import Login from './Login';

import { signIn } from '../../Redux/Actions';

import { SelectState } from './Selector';

function mapStateToProps(state) {
  return { ...SelectState(state) };
}

function mapDispatchToProps(dispatch) {
  return {
    signIn: (params) => {
      dispatch(signIn(params));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
