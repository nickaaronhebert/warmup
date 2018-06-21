export default function (state={
	currentUser: null,
	sessionToken: null,
  authenticated: false,
  invite: {}
}, action) {
 let stateCopy = {...state};
 switch (action.type) {
 	case 'SESSION_GET_ACTIVATE_STATUS_SUCCESS':
 		stateCopy.invite = action.payload;
 		return stateCopy;
	default:
     return {...stateCopy};
 }
}