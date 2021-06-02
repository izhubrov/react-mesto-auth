import React from "react";
import AuthForm from "./AuthForm";

function Register({ onRegister }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister({email, password});
  }

  return (
    <AuthForm
      title="Регистрация"
      name="register"
      buttonSubmitText="Зарегистрироваться"
      onSubmit={handleSubmit}
      setEmail={setEmail}
      setPassword={setPassword}
      email={email}
      password={password}
    />
  );
}

export default Register;
