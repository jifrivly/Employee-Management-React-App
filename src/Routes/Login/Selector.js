import { createSelector } from 'reselect';

function getLoginPageReducer(state) {
    return state.Login.login;
}
function mergeReducer(login) {
    return {
        ...login
    };
}

export const SelectState = createSelector(
    [getLoginPageReducer],
    mergeReducer
);