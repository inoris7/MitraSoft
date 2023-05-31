import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_USER, FETCH_USER_POSTS, setUser, setUserPosts } from "../store/userReducer";

const fetchUserFromServer = (num) => axios.get(`https://jsonplaceholder.typicode.com/users/${num}`);
const fetchUserPostsFromServer = (num) => axios.get(`https://jsonplaceholder.typicode.com/users/${num}/posts`);

function* fetchUserWorker({payload}) {
    const data = yield call(fetchUserFromServer, payload);    
    yield put(setUser(data));
}

function* fetchUserPostsWorker({payload}) {
    const data = yield call(fetchUserPostsFromServer, payload);    
    yield put(setUserPosts(data));
}

export function* userWatcher() {
    yield takeEvery(FETCH_USER, fetchUserWorker);
    yield takeEvery(FETCH_USER_POSTS, fetchUserPostsWorker);
}