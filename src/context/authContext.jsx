import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  username: null,
});

export default AuthContext;