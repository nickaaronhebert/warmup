import { call, put, takeLatest } from 'redux-saga/effects';
import sessionAPI from './api';
import * as routerActions from '../router/actions';
import { notification } from 'antd';


function* sessionLoginSaga(action) {
    try {
        const response = yield call(sessionAPI.login, action.payload.mail, action.payload.pass);
        if (response.user) {
            let redirectRoute;
            switch(response.user.role) {
                case 'vendor':
                case 'vendorAdmin':
                    redirectRoute = '/vendor/dashboard';
                    break;
                case 'organization':
                case 'organizationAdmin':
                    redirectRoute = '/organization/dashboard'
                    break;
                case 'superAdmin':
                    redirectRoute = '/dash/dashboard';
                    break;
            }
            yield put(routerActions.navigateToRoute( { to: redirectRoute, replace: false} ));
        }
        else {
            notification['warning']({
                message: 'Log in failed',
                description: 'Please try again',
            });
        }
    }
    catch(e) {
        yield put({
            type: 'SESSION_LOGIN_ERROR',
            payload: e
        });
    }
}

function* sessionRegisterSaga(action) {
    try {
        const response = yield call(sessionAPI.register, action.payload.email, action.payload.firstname, action.payload.lastname, action.payload.password, action.payload.confirm);
        yield put({
            type: 'SESSION_REGISTER_SUCCESS',
            payload: response
        });
    }
    catch(e) {
        yield put({
            type: 'SESSION_REGISTER_ERROR',
            payload: e
        });
    }
}

function* sessionLogoutSaga(action) {
    try {
        const check = yield call(sessionAPI.logout);
        if(check)
        {
            yield put({
                type: 'SESSION_LOGOUT_SUCCESS'
            });
        }
        else
        {
            throw new Error('Sum Ting Wong! :( !!!!');
        }
    }
    catch(e) {
        yield put({
            type: 'SESSION_LOGOUT_ERROR',
            payload: e
        });
    }
}

function* confirmUserEmailSaga(action) {
    try {
        const check = yield call(sessionAPI.confirmUserEmail, action.payload);
        if(check)
        {
            yield put({
                type: 'CONFIRM_USER_EMAIL_SUCCESS'
            });
        }
        else
        {
            throw new Error('Sum Ting Wong! :( !!!!');
        }
    }
    catch(e) {
        yield put({
            type: 'SESSION_LOGOUT_ERROR',
            payload: e
        });
    }
}

function* getActivateStatus(action) {
    try {
        const response = yield call(sessionAPI.getActivateStatus, action.payload.signupCode, action.payload.sid );
        if (response.message === "User already active") {
            notification['success']({
                message: 'Your account is already active.',
                description: 'Please login.',
            });
            yield put(routerActions.navigateToRoute( { to: '/login', replace: false} ));
        }
        yield put({
            type: 'SESSION_GET_ACTIVATE_STATUS_SUCCESS',
            payload: response
        });
    }
    catch(e) {
        yield put({
            type: 'SESSION_GET_ACTIVATE_STATUS_ERROR',
            payload: e
        });
    }
}

function* validateVendor(action) {
    try {
        const response = yield call(sessionAPI.validate, action.payload);
        if (response.user.status == 'active') {
            notification['success']({
                message: 'Your account is active.',
                description: 'Please login.',
            });
            yield put(routerActions.navigateToRoute( { to: '/login', replace: false} ));
            
        }
        yield put({
            type: 'VALIDATE_VENDOR_SUCCESS',
            payload: response
        });
    }
    catch(e) {
        yield put({
            type: 'VALIDATE_VENDOR_ERROR',
            payload: e
        });
    }
}

function* sessionSagas() {
    yield takeLatest('SESSION_LOGIN', sessionLoginSaga);
    yield takeLatest('SESSION_REGISTER', sessionRegisterSaga);
    yield takeLatest('SESSION_LOGOUT', sessionLogoutSaga);
    yield takeLatest('CONFIRM_USER_EMAIL', confirmUserEmailSaga);
    yield takeLatest('GET_ACTIVATE_STATUS', getActivateStatus);
    yield takeLatest('VALIDATE_VENDOR', validateVendor);
}

export default sessionSagas;