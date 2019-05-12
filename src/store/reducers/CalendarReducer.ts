import {
    createActionCreators,
    createReducerFunction,
    ImmerReducer
} from "immer-reducer";

import moment, { Moment } from "moment";

import { ProcedureTypes, Types } from "constants/Calendar";

export interface CalendarState {
    type: Types;
    date: Moment;
    action: ProcedureTypes;
    lastChangeDate: Moment;
}

const initialState: CalendarState = {
    type: Types.MONTH,
    date: moment(),
    action: ProcedureTypes.CURRENT,
    lastChangeDate: moment()
};

class CalendarReducer extends ImmerReducer<CalendarState> {
    setType(type: Types) {
        this.draftState.type = type;
    }

    setDate(date: Moment) {
        const { lastChangeDate, date: originalDate } = this.draftState;
        const changeDate = moment();

        let action = ProcedureTypes.CURRENT;
        if (
            lastChangeDate === null ||
            changeDate.valueOf() - lastChangeDate.valueOf() > 300
        ) {
            if (date.valueOf() < originalDate.valueOf()) {
                action = ProcedureTypes.PREV;
            } else if (date.valueOf() > originalDate.valueOf()) {
                action = ProcedureTypes.NEXT;
            }
        }

        this.draftState.lastChangeDate = changeDate;
        this.draftState.action = action;
        this.draftState.date = date;
    }

    setAction(action: ProcedureTypes) {
        this.draftState.action = action;
    }
}

export default createReducerFunction(CalendarReducer, initialState);
export const CalendarAction = createActionCreators(CalendarReducer);
