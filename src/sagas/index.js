import { takeLatest, all } from 'redux-saga/effects';
import { Types as ListTypes } from '../store/actions/listAction';
import { getImageRequest } from './list';

export default function* rootSaga() {
    return yield all([
        takeLatest(ListTypes.ADD_PRODUCT, getImageRequest)
    ])
};