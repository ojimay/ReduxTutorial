'use strict';

const initialStateId = ""
export function id(state = initialStateId, action) {
    console.log(action);
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'UPDATE_ID':
            newState = action.payload.id;
            break;
        default:
            return state;
    }
    console.log(newState)
    return newState;
};

const initialStateName = ""
export function name(state = initialStateName, action) {
    console.log(action);
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'UPDATE_NAME':
            newState = action.payload.name;
            break;
        default:
            return state;
    }
    return newState;
};
