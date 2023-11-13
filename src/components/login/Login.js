import React, { useState } from "react";

const Login = ({ onIsValidChange }) => {
  const [username, setUsername] = useState("");
  const [isValid, setIsValid] = useState(false);

  const changeUsernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const userRegisterHandler = () => {
    if (username.toLowerCase().includes("o")) {
      alert(
        "No puedes ingresar, ¡intenta con un usuario que no contenga la letra O!"
      );
      setIsValid(false);
    } else if (username.length === 0) {
      alert("Usuario inválido para registrarse");
      setIsValid(false);
    } else {
      alert("Ingresado correctamente");
      setIsValid(true);
      onIsValidChange(true)
    }
    
  };
  
  return (
    <div>
      <input
        onChange={changeUsernameHandler}
        placeholder="Ingrese su usuario"
      />
      <button onClick={userRegisterHandler}>Registrarse</button>
      <div>
        <p>{username}</p>
      </div>
    </div>
  );
};

export default Login;
