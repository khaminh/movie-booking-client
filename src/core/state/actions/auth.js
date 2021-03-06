import { actionCreator } from '../../helpers';

const actions = {
  SIGN_IN: actionCreator('SIGN_IN'),
  CHECK_AUTHENTICATION: 'CHECK_AUTHENTICATION',
  SIGN_OUT: 'SIGN_OUT',
  REGISTER_USER: actionCreator('REGISTER_USER'),

  signInActions: (data = {}) => {
    return {
      type: actions.SIGN_IN.REQUEST,
      payload: data,
    };
  },

  registerAction: (data = {}) => {
    return {
      type: actions.REGISTER_USER.REQUEST,
      payload: data,
    };
  },

  signOutActions: () => ({
    type: actions.SIGN_OUT,
  }),

  checkAuthorization: (data) => ({
    type: actions.CHECK_AUTHENTICATION,
    payload: data,
  }),
};

export default actions;
