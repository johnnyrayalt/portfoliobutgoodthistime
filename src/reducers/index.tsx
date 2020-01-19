import { combineReducers } from 'redux';

const createRootReducer = (reducer: any) => combineReducers({ reducer });

export default createRootReducer;
