export const LOGIN = "LOGIN/AUTH";
export const LOGOUT = "LOGOUT/AUTH";
//export const CREATE = "CREATE/AUTH";

export const onLogin = () => {
  return {
    type: LOGIN,
    payload: { auth: true },
  };
};

export const onLogout = () => {
  return {
    type: LOGOUT,
    payload: { auth: true },
  };
};
