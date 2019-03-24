import { createActionCreators, createReducerFunction, ImmerReducer } from "immer-reducer";

export interface MainState {
    temp: string;
}

const initialState: MainState = {
    temp: null
};

class MainReducer extends ImmerReducer<MainState>  {
    setTemp(temp: string)    {
        this.draftState.temp = temp;
    }
}

export default createReducerFunction(MainReducer, initialState);
export const MainAction = createActionCreators(MainReducer);