import {loadState, saveState} from "../utils/local-storage";
import {createStore} from "redux";
import reducer from "./reducers/reducers";

export const initStore = () => {
    const persistedState = loadState();
    const store = createStore(
        reducer, persistedState
    );
    store.subscribe(() => saveState(store.getState()));
    return store;
}
