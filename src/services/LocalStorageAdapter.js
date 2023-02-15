export const LocalStorageAdapter = {
  get token() {
    return localStorage.getItem('token');
  },
  set token(value) {
    return localStorage.setItem('token', value);
  },
  deleteToken() {
    localStorage.removeItem('token');
  },
};
