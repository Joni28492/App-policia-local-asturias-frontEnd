import React from "react";

export const RegisterScreen = () => {
  return (
    <>
      <div style={{ marginLeft: "325px" }}>
        <div className='register-box animate__animated animate__fadeInRightBig'>
          <form>
            <h1 className='text-light'>Register</h1>
            <img
              className='rounded-circle border border-light'
              style={{
                width: "135px",
                height: "135px",
              }}
              src='https://www.aytonavalmoral.es/wp-content/uploads/2021/05/policia-2.jpg'
              alt='Img de perfil'
            />

            <input type='text' placeholder='nombre@correo.com' name='nombre' />
            <input
              type='password'
              placeholder='contraseña'
              name='passwordUno'
            />
            <input type='email' placeholder='contraseña' name='passwordUno' />
            <input
              type='password'
              placeholder='repita contraseña'
              name='passwordDos'
            />

            <button className='btn'>Iniciar Sesión</button>
          </form>
        </div>
      </div>
    </>
  );
};
