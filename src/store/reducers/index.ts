import { combineReducers } from "redux";
import HeaderReducer, { HeaderState } from 'store/reducers/HeaderReducer';
import LeftPanelReducer, { LeftPanelState } from 'store/reducers/LeftPanelReducer';

export default combineReducers({
    HeaderReducer,
    LeftPanelReducer
});

export interface StoreState {
    HeaderReducer: HeaderState,
    LeftPanelReducer: LeftPanelState
}