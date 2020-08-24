import React, { useState } from "react";
import { withNamespaces } from 'react-i18next';
import { connect } from "react-redux";
import { signup, signin, resetPassword } from "../store/actions/auth";
import useForm from "../utils/useForm";
import validate from "../utils/validateLoginForm";
import Spinner from "./Spinner";

const mt_form = {
  marginTop: '100px',
  marginBottom: '20px'
}
const Login = ({
  signup,
  signin,
  resetPassword,
  authMsg,
  history,
  loading, t
}) => {
  const [newUser, /* setNewUser */] = useState(false);
  const [reset, SetReset] = useState(false);
  const [credentials, handleChange, handleSubmit, errors] = useForm(
    login,
    validate,
    reset
  );

  function login( ) {
    if (newUser) {
      // signup
      signup(credentials.email, credentials.password);
    } else {
      if (reset) {
        // reset password
        resetPassword(credentials.email);
      } else {
        // signin
        signin(credentials.email, credentials.password, () =>
          history.push("/")
        );
      }
    }
  }
  return (
    <div className="row justify-content-center align-items-center" style={mt_form}>
    <div className="login" >
      <h2>
        {reset ? (t('auth:reset_pass')) : newUser ? "Create an account" : (t('auth:sign_in'))}
      </h2>
      {authMsg && <p className="auth-message">{authMsg}</p>}
      <form onSubmit={handleSubmit} noValidate>
        {/* Email */}
        <div className="input-group">
          <label htmlFor="email">{t('auth:email')}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={credentials.email}
            placeholder={t('auth:your_email')}
            onChange={handleChange}
            className={
              (errors.emailIsEmpty || errors.emailFormatInvalid) &&
              "input-error"
            }
          />
          {errors.emailIsEmpty && <small>{errors.emailIsEmpty}</small>}
          {errors.emailFormatInvalid && (
            <small>{errors.emailFormatInvalid}</small>
          )}
        </div>

        {/* PASSWORD */}
        {!reset && (
          <div className="input-group">
            <label htmlFor="password">{t('auth:password')}</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              placeholder={t('auth:your_pass')}
              onChange={handleChange}
              className={
                (errors.passIsStrong || errors.passIsEmpty) && "input-error"
              }
            />
            {errors.passIsStrong && <small>{errors.passIsStrong}</small>}
            {errors.passIsEmpty && <small>{errors.passIsEmpty}</small>}
          </div>
        )}

        {/* BUTTONS */}
        <div>
          <button type="submit" className="btn-login">
            {loading ? (
              <Spinner />
            ) : reset ? (
              t('auth:button_reset_pass')
            ) : newUser ? (
              "Create account"
            ) : (
              t('auth:button_signin')
            )}
          </button>
          {!newUser && !reset && (
            <button onClick={() => SetReset(true)} className="btn-link">
              {t('auth:forget_pass')}
            </button>
          )}
          {reset && (
            <button onClick={() => SetReset(false)} className="btn-link">
              {t('auth:back_to_signin')}
            </button>
          )}
        </div>
      </form>
      <footer className="login-footer">
        <p>
          {newUser ? "Already have an account?" : (t('auth:no_account'))}
        </p>
        <button
         /*  onClick={() => {
            setNewUser(!newUser);
            if (reset) SetReset(false);
          }} */
          className="btn-switch"
        >
          {newUser ? "Sign in" : (t('auth:button_new_account'))}
        </button>
      </footer>
    </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    authMsg: state.authReducer.authMsg,
    loading: state.apiStatusReducer.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signup: (email, password) => dispatch(signup(email, password)),
    signin: (email, password, callback) =>
      dispatch(signin(email, password, callback)),
    resetPassword: email => dispatch(resetPassword(email))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNamespaces()(Login));
