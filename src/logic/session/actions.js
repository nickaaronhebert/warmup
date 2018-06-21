export const SESSION_LOGOUT = 'SESSION_LOGOUT';

export const GET_ACTIVATE_STATUS = `GET_ACTIVATE_STATUS`;
export const GET_ACTIVATE_STATUS_SUCCESS = `GET_ACTIVATE_STATUS_SUCCESS`;
export const GET_ACTIVATE_STATUS_ERROR = `GET_ACTIVATE_STATUS_ERROR`;

export const VALIDATE_VENDOR = `VALIDATE_VENDOR`;
export const VALIDATE_VENDOR_SUCCESS = `VALIDATE_VENDOR_SUCCESS`;
export const VALIDATE_VENDOR_ERROR = `VALIDATE_VENDOR_ERROR`;

export function sessionLogin(payload) {
  return {
      type: 'SESSION_LOGIN',
      payload: payload
  };
}

export function sessionRegister(payload) {
  return {
    type: 'SESSION_REGISTER',
    payload: payload
  };
}

export function sessionLogout() {
  return {
    type: 'SESSION_LOGOUT'
  };
}

export function confirmUserEmail(payload) {
  return {
    type: 'CONFIRM_USER_EMAIL',
    payload: payload
  };
}

export function getActivateStatus(payload) {
  return {
    type: GET_ACTIVATE_STATUS,
    payload: payload
  };
}

export function validateVendor(payload) {
  return {
    type: VALIDATE_VENDOR,
    payload: payload
  };
}