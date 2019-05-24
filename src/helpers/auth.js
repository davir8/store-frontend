export const isLogaded = () => {
  const authData = JSON.parse(localStorage.getItem('@ProductStorageToken'));

  if (authData === null) {
    return false;
  }
  return true;
};

export const getUser = () => {
  const { user } = JSON.parse(localStorage.getItem('@ProductStorageToken'));

  return user;
};

export const getToken = () => {
  const { token } = JSON.parse(localStorage.getItem('@ProductStorageToken'));

  return token;
};

export const logout = () => {
  localStorage.removeItem('@ProductStorageToken');
};

export const saveUserData = ({ user, token }) => {
  localStorage.setItem('@ProductStorageToken', JSON.stringify({ user, token }));
};
