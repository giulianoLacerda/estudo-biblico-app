import { combineReducers } from 'redux';
import accessReducer from './accessReducer';

export default combineReducers({ 
    accessReducer: accessReducer
});