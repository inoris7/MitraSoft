import axios from "axios";
import { put, takeEvery,call } from "redux-saga/effects";
import { FETCH_COMMENTS, setComments } from "../store/commentsReducer";

const fetchCommentsFromServer = (num) => axios.get(`https://jsonplaceholder.typicode.com/posts/${num}/comments`);

function* fetchCommentsWorker({payload}) {
    const data = yield call(fetchCommentsFromServer, payload);    
    yield put(setComments(data));
}

export function* commentsWatcher() {
    yield takeEvery(FETCH_COMMENTS, fetchCommentsWorker);
}