import {Actions} from "../../utils/consts";

export const deleteClock = (payload) => ({
    type: Actions.DELETE_CLOCK,
    payload: payload
});

export const addClock = (payload) => ({
    type: Actions.ADD_CLOCK,
    payload: payload
});

export const updateClock = (payload) => ({
    type: Actions.UPDATE_CLOCK,
    payload: payload
});
