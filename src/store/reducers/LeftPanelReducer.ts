import { createActionCreators, createReducerFunction, ImmerReducer } from "immer-reducer";

export interface LeftPanelState {
    show: boolean
}

const initialState: LeftPanelState = {
    show: false
};

class LeftPanelReducer extends ImmerReducer<LeftPanelState>  {
    toggleShow()   {
        this.draftState.show = !this.draftState.show;
    }
}

export default createReducerFunction(LeftPanelReducer, initialState);
export const LeftPanelAction = createActionCreators(LeftPanelReducer);