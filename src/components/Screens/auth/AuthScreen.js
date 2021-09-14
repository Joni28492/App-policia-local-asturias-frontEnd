import React, { useState } from "react";
import { LoginScreen } from "./LoginScreen";
import { RegisterScreen } from "./RegisterScreen";

const initialStateAuth = true;

export const AuthScreen = () => {
  const [auth, setAuth] = useState(initialStateAuth);

  const handleAuth = () => {
    setAuth(!auth);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2em",
        }}
      >
        {!auth ? (
          <button className='btn text-light m-2' onClick={handleAuth}>
            Inicia Sesión
          </button>
        ) : (
          <button className='btn text-light m-2' onClick={handleAuth}>
            Aun no tienes cuenta
          </button>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {auth ? <LoginScreen /> : <RegisterScreen />}
      </div>
    </>
  );
};
