import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./AuthForm.css";
import SmallButton from "../shared/SmallButton";

const cx = classNames.bind(styles);

const AuthForm = ({
  kind,
  onChangeInput,
  username,
  password,
  onLogin,
  onRegister,
  error,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChangeInput({ name, value });
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      switch (kind) {
        case "register":
          onRegister();
          return;
        case "login":
          onLogin();
          return;
        default:
          return;
      }
    }
  };
  return (
    <div className={cx("auth-form")}>
      <div className={cx("title")}>{kind.toUpperCase()}</div>
      <div className={cx("error")}>
        {error.triggered && (
          <div className={cx("message")}>{error.message}</div>
        )}
      </div>
      <div className={cx("line-wrapper")}>
        <div className={cx("input-title")}>username</div>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className={cx("line-wrapper")}>
        <div className={cx("input-title")}>password</div>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      <SmallButton
        onClick={kind === "register" ? onRegister : onLogin}
        className={cx("auth-button")}
      >
        {kind.toUpperCase()}
      </SmallButton>
      {kind === "register" ? (
        <Link to={`/auth/login`} className={cx("description")}>
          if you already have account...
        </Link>
      ) : (
        <Link to={`/auth/register`} className={cx("description")}>
          if you don't have an account...
        </Link>
      )}
    </div>
  );
};

export default AuthForm;
