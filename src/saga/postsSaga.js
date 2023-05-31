import axios from 'axios';
import {put, takeEvery, call} from 'redux-saga/effects'
import { FETCH_POSTS, setPosts } from '../store/postsReducer';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const fetchPostsFromServer = () => axios.get('https://jsonplaceholder.typicode.com/posts');

function* fetchPostsWorker() {
    yield delay(500);
    const data = yield call(fetchPostsFromServer);    
    yield put(setPosts(data)); 
}

export function* postsWatcher() {
    yield takeEvery(FETCH_POSTS, fetchPostsWorker);
}