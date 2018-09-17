import * as actionType from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
}

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(result => result.id !== action.resultElId);
    return updateObject(state, { results: updatedArray });
}

const storeResult = (state, action) => {
    return updateObject(state, {results: state.results.concat({ id: new Date(), value: action.result })});
}

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.STORE_RESULT: return storeResult(state, action);
            
        case actionType.DELETE_RESULT:
            // const newArray = [...state.results];
            // newArray.splice(id,1);
            return deleteResult(state,action);
    }
    return state;
}
export default resultReducer;