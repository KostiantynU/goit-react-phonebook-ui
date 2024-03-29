export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectToken = state => state.auth.token;
export const selectIsErrorAuth = state => state.auth.isError;
export const selectIsErrorLogin = state => state.auth.isErrorLogin;
