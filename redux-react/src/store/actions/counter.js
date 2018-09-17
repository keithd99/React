import * as actionTypes from './actionTypes';

//Action Creator
export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
};

//example witha payload
export const add = (value) => {
    return {
        type: actionTypes.ADD,
        value: value
    }
};

export const subtract = (value) => {
    return {
        type: actionTypes.SUBTRACT,
        value: value
    }
};