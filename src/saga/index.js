import {all} from 'redux-saga/effects';
import { postsWatcher } from './postsSaga';
import { commentsWatcher } from './commentsSaga';
import { userWatcher } from './userSaga';

export function* rootWatcher() {
    yield all([postsWatcher(), commentsWatcher(), userWatcher()])
};