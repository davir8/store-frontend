export const TOKEN_KEY = '@ProductStorage-Token';

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const login = ({ user, token }) => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify({ user, token }));
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const getUser = () => {
  const { user } = JSON.parse(localStorage.getItem(TOKEN_KEY));
  return user;
};

export const getToken = () => {
  const { token } = JSON.parse(localStorage.getItem(TOKEN_KEY));
  return token;
};
