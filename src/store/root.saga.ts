import { all } from 'redux-saga/effects';
import somethingSaga from "./storeName/storeName.sagas";

export default function* rootSaga() {
    yield all([somethingSaga()]);
}
