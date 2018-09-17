import * as actionType from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    counter: 0
}
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionType.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionType.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionType.SUBTRACT:
            return updateObject(state, {counter: state.counter - action.value});
    }
    return state;
}
export default counterReducer;