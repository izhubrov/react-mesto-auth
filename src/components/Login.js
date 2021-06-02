import React from "react";
import AuthForm from "./AuthForm";
import CssLoader from "./CssLoader.js";

function Login({ onLogin, isLoading }) {
  
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin({email, password});
  }

  return (
    <>
    <CssLoader isLoading={isLoading} />
    {!isLoading && 
    <AuthForm
      title="Вход"
      name="login"
      buttonSubmitText="Войти"
      onSubmit={handleSubmit}
      setEmail={setEmail}
      setPassword={setPassword}
      email={email}
      password={password}
    />
    }
    </>
  );
}

export default Login;
