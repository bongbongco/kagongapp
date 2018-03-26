import { combineReducers, applyMiddleware, createStore } from "redux";
import { persistStore, persistCombineReducer } from "redux-persist";
import storage from "redux-persist/es/storage";
import thunk from "redux-thunk";

const middlewares = [thunk];

const persistConfig = {
    key: "root",
    storage,

}

const reducer = persistCombineReducer(persistConfig, {
    user
});

const configureStore = () => {
    let store = createStore(reducer, applyMiddleware(...middlewares));
    let persistor = persistStore(store);
    return { store, persistor };
};

export default configureStore;