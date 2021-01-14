import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from './rootReducer';

export const ConfigureStore = () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
    return store;
}


