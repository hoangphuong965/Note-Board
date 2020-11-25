import { createStore, combineReducers } from "redux";
import textReducer from "../_reducer/text";

// convert object to string and store in localStorage
function saveToLocalStorage(state) {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
        console.warn(e);
    }
}

// load string from localStarage and convert back in to an Object
// invalid output must be undefined
function loadFromLocalStorage() {
    try {
        const serialisedState = localStorage.getItem("persistantState");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

const store = createStore(
    combineReducers({
        textReducer: textReducer,
    }),
    loadFromLocalStorage()
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;

