import { combineReducers } from 'redux';

const INITIAL_VALUE = {
  estado: 'qualquer coisa',
};

const reducer = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
  case 'SUBMIT': return { ...state, ...action.payload };
  case 'SUBMIT_PROFESSIONAL': return { ...state, ...action.payload };
  default: return state;
  }
};

const rootReducer = combineReducers({ reducer });

export default rootReducer;
