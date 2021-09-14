import React from "react";
import "../../styles/login.css";

export const LoginScreen = () => {
  return (
    <>
      <div className='login-box animate__animated animate__fadeInLeftBig'>
        <form>
          <h1 className='text-light'>Login</h1>
          <img
            className='rounded-circle border border-light'
            style={{
              width: "135px",
              height: "135px",
            }}
            src='https://1.bp.blogspot.com/-RQ5sNNldtK4/XwBPyEscXMI/AAAAAAAASPM/RNesXb8357AOJxf1_bMg7A21rovFKYBYQCLcBGAsYHQ/s1600/Policia%2BLocal.%2BDibujo.jpg'
            alt='Img de perfil'
          />

          <input type='text' placeholder='nombre@correo.com' name='nombre' />
          <input type='password' placeholder='contraseña' name='password' />

          <button className='btn'>Iniciar Sesión</button>
        </form>
      </div>
    </>
  );
};
