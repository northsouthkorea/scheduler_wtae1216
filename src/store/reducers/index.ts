import { combineReducers } from "redux";
import MainReducer, { MainState } from 'store/reducers/MainReducer';

export default combineReducers({
    MainReducer
});

export interface StoreState {
    MainReducer: MainState
}