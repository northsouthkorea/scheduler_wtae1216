import CalendarReducer, { CalendarState } from "store/reducers/CalendarReducer";
import HeaderReducer, { HeaderState } from "store/reducers/HeaderReducer";
import LeftPanelReducer, {
    LeftPanelState
} from "store/reducers/LeftPanelReducer";
import { combineReducers } from "redux";

export default combineReducers({
    CalendarReducer,
    HeaderReducer,
    LeftPanelReducer
});

export interface StoreState {
    CalendarReducer: CalendarState;
    HeaderReducer: HeaderState;
    LeftPanelReducer: LeftPanelState;
}
