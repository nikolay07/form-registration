import { LOGIN, LOGOUT } from "./auth.actions";

const initialState = { auth: false };

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        auth: action.payload.auth,
      };
    case LOGOUT:
      return {
        ...state,
        auth: action.payload.auth,
      };

    default:
      return state;
  }
};
