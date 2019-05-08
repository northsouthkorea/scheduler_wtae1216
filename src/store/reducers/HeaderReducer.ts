import {
    createActionCreators,
    createReducerFunction,
    ImmerReducer
} from "immer-reducer";

export interface HeaderState {
    title: string;
}

const initialState: HeaderState = {
    title: "캘린더"
};

class HeaderReducer extends ImmerReducer<HeaderState> {
    setTitle(title: string) {
        this.draftState.title = title;
    }
}

export default createReducerFunction(HeaderReducer, initialState);
export const HeaderAction = createActionCreators(HeaderReducer);
