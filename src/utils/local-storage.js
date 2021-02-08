import momentTz from "moment-timezone";
import {CLOCKS_STORAGE_KEY} from "./consts";

const initialState = {
    clocks: [{
        timezone: momentTz.tz.guess()
    }]
};

export const loadState = () => {
    try {
        return JSON.parse(localStorage.getItem(CLOCKS_STORAGE_KEY)) || initialState;
    } catch (err) {
        localStorage.removeItem(CLOCKS_STORAGE_KEY);
        return initialState;
    }
};

export const saveState = (state) => {
    localStorage.setItem(CLOCKS_STORAGE_KEY, JSON.stringify(state));
};
