import {
    createActionCreators,
    createReducerFunction,
    ImmerReducer
} from "immer-reducer";

import { Types } from "constants/Calendar";

import moment, { Moment } from "moment";

export interface CalendarState {
    type: Types;
    date: Moment;
}

const initialState: CalendarState = {
    type: Types.MONTH,
    date: moment()
};

class CalendarReducer extends ImmerReducer<CalendarState> {
    setType(type: Types) {
        this.draftState.type = type;
    }

    setDate(date: Moment) {
        this.draftState.date = date;
    }
}

export default createReducerFunction(CalendarReducer, initialState);
export const CalendarAction = createActionCreators(CalendarReducer);
