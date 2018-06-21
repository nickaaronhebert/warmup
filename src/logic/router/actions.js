const ROOT = 'ROUTER';

export const RESOLVE_ROUTE = `${ROOT}/RESOLVE_ROUTE`;

export const NAVIGATE_TO_ROUTE = `${ROOT}/NAVIGATE_TO_ROUTE`;

export const SET_PARAMETERS = `${ROOT}/SET_PARAMETERS`;


export function resolveRoute(payload) {
  return {
    type: RESOLVE_ROUTE,
    payload: payload
  }
}

export function navigateToRoute(payload) {
  return {
    type: NAVIGATE_TO_ROUTE,
    payload: payload
  }
}

export function setParameters(payload) {
  return {
    type: SET_PARAMETERS,
    payload: payload
  }
}

