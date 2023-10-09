import React from 'react';

const AuthContext = React.createContext({
  formIsValid: false,
  setFormIsValid: () => {},
});

export default AuthContext;