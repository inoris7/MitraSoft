import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_USER, FETCH_USER_POSTS, setUser, setUserPosts } from "../store/userReducer";

const fetchUserFromServer = (num) => axios.get(`https://jsonplaceholder.typicode.com/users/${num}`);
const fetchUserPostsFromServer = (num) => axios.get(`https://jsonplaceholder.typicode.com/users/${num}/posts`);

function* fetchUserWorker({payload}) {
    try {
        const data = yield call(fetchUserFromServer, payload);    
        yield put(setUser(data));
    } catch {
        throw new Error('Error fetching User frrom server')
    }
}

function* fetchUserPostsWorker({payload}) {
    try {
        const data = yield call(fetchUserPostsFromServer, payload);    
        yield put(setUserPosts(data));
    } catch {
        throw new Error('Error fetching User posts frrom server')
    }
}

export function* userWatcher() {
    yield takeEvery(FETCH_USER, fetchUserWorker);
    yield takeEvery(FETCH_USER_POSTS, fetchUserPostsWorker);
}