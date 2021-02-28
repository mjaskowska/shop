import React, { useRef, useState } from "react";
import { useAuth } from "./contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const ChangePassword = () => {
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { updatePassword, currentUser } = useAuth();
  const [authError, setAuthError] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setAuthError("passwords do not match");
    }

    setAuthLoading(true);
    setAuthError("");

    const promise = updatePassword(passwordRef.current.value);

    promise
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setAuthError("Failet to update password. Try again.");
      })
      .finally(() => {
        setAuthLoading(false);
      });
  };

  return (
    <>
      <div className="register-container">
        <h2 className="login-title">Update password</h2>

        {authError && <p className="error-text">{authError}</p>}
        <form onSubmit={handleSubmit} className="form-container">
          <p className="email-text">Email: {currentUser.email}</p>
          <p style={{ marginBottom: "15px" }}>Email: useremail@email.com</p>
          <div className="form">
            <label>New Password</label>
            <input
              placeholder="Enter your password"
              required
              type="password"
              ref={passwordRef}
            ></input>
          </div>
          <div className="form">
            <label>Confirm New Password</label>
            <input
              placeholder="Repeat your password"
              required
              type="password"
              ref={confirmPasswordRef}
            ></input>
          </div>
          <button disabled={authLoading} type="submit" className="main-btn">
            Update password
          </button>
        </form>
      </div>
      <Link to="/profile">
        <button className="secondary-btn">Cancel</button>
      </Link>
    </>
  );
};

export default ChangePassword;
