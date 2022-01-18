import { call, put, takeEvery } from 'redux-saga/effects';
import {getSomething, getSomethingFailure, getSomethingSuccess} from './storeName.slice';
import { PayloadAction } from '@reduxjs/toolkit';
import { API } from '../../services/axios';

function* getSomethingAction(action: PayloadAction<any>) {
    try {
        const data: {} = yield call(() =>
            API.get(`/${action.payload.type}`, {
                params: {
                    firstParam: 'param',
                },
            })
        );
        yield put(getSomethingSuccess(data));
    } catch (error) {
        yield put(getSomethingFailure(error));
    }
}

function* somethingSaga() {
    yield takeEvery(getSomething, getSomethingAction);
}

export default somethingSaga;