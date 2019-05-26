export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};
