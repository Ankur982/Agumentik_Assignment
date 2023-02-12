import { combineReducers, legacy_createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"





const rootReducer = combineReducers({
    
});




export const store = legacy_createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

