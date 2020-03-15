import {createStore, combineReducers,applyMiddleware} from "redux"
import CountReducer from "./component/Count.reducer"
import { compose } from "redux"
import thunk from "redux-thunk"

const reducer = combineReducers(
    {CountReducer}
)

export const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    
    )

)