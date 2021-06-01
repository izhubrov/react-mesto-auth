import React from "react";
import { Link, useLocation } from "react-router-dom";

function AuthForm({
  title,
  name,
  buttonSubmitText,
  children,
  onSubmit,
  buttonSubmitState,
}) {
  const location = useLocation();
  const isLocationSignUp = location.pathname === "/sign-up";

  return (
    <div className="auth page__container appear">
        <h2 className="title title_place_auth">{title}</h2>

        <form
          className="form"
          name={`form-edit-${name}`}
          onSubmit={onSubmit}
          noValidate
        >
          {children}
          
          {
            <button
            type="submit"
            className={`form__btn-submit form__btn-submit_type_auth ${!buttonSubmitState ? "form__btn-submit_inactive" : ""}`}
            disabled={!buttonSubmitState ? true : ""}
            >
            {buttonSubmitText}
          </button>
          }
          {isLocationSignUp && (
            <div className="form__auth-container">
              <p className="form__auth-text">Уже зарегистрированы?&nbsp;</p>
              <Link className="form__auth-link" to={"/sign-in"}>Войти</Link>
            </div>
          )}
        </form>
    </div>
  );
}

export default AuthForm;
