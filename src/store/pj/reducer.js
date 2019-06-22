import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import {makeError} from "../store";

export const initialState = Immutable({channel: ''});

/**
 * Reduces the standard flux action for zone action types into the store.
 * @param state the state.
 * @param action the action.
 * @returns {*} the new state.
 */
const reduce = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.SEND_COMMAND:
            return Immutable.without(state, 'keyError');
        case types.SEND_COMMAND_FAIL:
            return Immutable.set(state, {keyError: makeError(action)});
        default:
            return state;
    }
};

// selector functions
const errors = state => {
    return {
        key: state.keyError
    };
};
export const getErrors = errors;

export default reduce;