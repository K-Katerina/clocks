import {Actions} from "../../utils/consts";

const removeClocks = (clocks, index) => [...clocks.slice(0, index), ...clocks.slice(index + 1)];

const addClock = (clocks, timezone) => [...clocks, timezone];

const updateClock = (clocks, item) => [...clocks.slice(0, item.index), {timezone: item.timezone}, ...clocks.slice(item.index + 1)];

const reducer = (state, action) => {
    switch (action.type) {
        case Actions.ADD_CLOCK:
            return {
                ...state,
                clocks: addClock(state.clocks, action.payload)
            };
        case Actions.UPDATE_CLOCK:
            return {
                ...state,
                clocks: updateClock(state.clocks, action.payload)
            };
        case Actions.DELETE_CLOCK:
            return {
                ...state,
                clocks: removeClocks(state.clocks, action.payload)
            };
        default:
            return state;
    }
};

export default reducer;
