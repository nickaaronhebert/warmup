const ROOT = 'STAGES';

export const FETCH = `${ROOT}/FETCH`;
export const FETCH_SUCCESS = `${ROOT}/FETCH_SUCCESS`;
export const FETCH_ERROR = `${ROOT}/FETCH_ERROR`;

export const SAVE = `${ROOT}/SAVE`;
export const SAVE_SUCCESS = `${ROOT}/SAVE_SUCCESS`;
export const SAVE_ERROR = `${ROOT}/SAVE_ERROR`;

export const DELETE = `${ROOT}/DELETE`;
export const DELETE_SUCCESS = `${ROOT}/DELETE_SUCCESS`;
export const DELETE_ERROR = `${ROOT}/DELETE_ERROR`;

export function fetch(payload) {
  return {
    type: FETCH,
    payload: payload,
    authCall: true
  }
}

export function save(payload) {
  return {
    type: SAVE,
    payload: payload,
    authCall: true
  }
}

export function destroy(payload) {
  return {
    type: DELETE,
    payload: payload,
    authCall: true
  }
}
