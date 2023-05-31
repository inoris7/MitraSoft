import { createStore, combineReducers, applyMiddleware} from "redux";
import { postsReducer } from "./postsReducer";
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from "../saga";
import { commentsReducer } from "./commentsReducer";
import { openedReducer } from "./openedReducer";
import { pageReducer } from "./pageReducer";
import { userReducer } from "./userReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    posts: postsReducer,
    comments: commentsReducer,
    opened: openedReducer,
    page: pageReducer,
    user: userReducer
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);