import { call, put, takeLatest, all } from 'redux-saga/effects';
import sessionAPI from './api';
import * as actions from './actions';

import qs from 'qs';
import { push } from 'react-router-redux';

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* resolveRoute(action) {
    try {
      const {
        payload: {
          location,
          match,
          routeId,
        },
      } = action;

      const { params } = match;
      const { search = '' } = location;
      const queryParams = qs.parse(search.slice(1, search.length));
      switch (routeId) {
        default:
            break;

      }
    }
    catch(err) {
    }
    
}

function* navigateToRoute(action) {
  try {
    const {
      payload: {
        to,
        replace,
      },
    } = action;
    if (replace) {
      yield put(push('/')); 
      yield put(push(to));
       
    }
    else {
      yield put(push(to));
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
}

function* sagas() {
    yield takeLatest(actions.RESOLVE_ROUTE, resolveRoute);
    yield takeLatest(actions.NAVIGATE_TO_ROUTE, navigateToRoute);
}

export default sagas;
