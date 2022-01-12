import React, { useContext, useRef, useState } from "react";
import NavLogo from "../Navbar/NavLogo";
import { Link } from "react-router-dom";
import ratchet from "../../imagenes/ratcheta.jpg";
import Footer from "../Footer/Footer";
import { ContextoModales } from "../Contextos/ContextoModales";
import ModalInvalid from "../Modales/ModalInvalid";

export default function SignUp() {
  const [mostrarModal, setMostrarModal] = useContext(ContextoModales);
  const [mensajeError, setMensajeError] = useState("");
  const [signUp, setSignUp] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPass = passwordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB6sxQsX9btnk2vpThGiRgTwOLcjZzegWE",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPass,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        setSignUp(!signUp);
        setMostrarModal(!mostrarModal);
      } else {
        res.json().then((data) => {
          console.log(data);
          if (data.error.message.includes("WEAK_PASSWORD")) {
            setMensajeError(
              "Insecure password. It should, at least, contain 6 characters"
            );
            setMostrarModal(!mostrarModal);
          } else if (data.error.message.includes("EMAIL_EXISTS")) {
            setMensajeError("This email was already registered");
            setMostrarModal(!mostrarModal);
          }
        });
      }
    });
  };
  return (
    <div>
      <header className="nav-login">
        <NavLogo />
        <Link to="/login">
          <button className="nav-item registro">Login</button>
        </Link>
      </header>
      <div className="login-form-container">
        <img src={ratchet} alt="Imagen login" />
        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <label htmlFor="nombre">
            Name
            <input
              type="text"
              id="nombre"
              required
              placeholder="Name and last name"
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              required
              ref={emailInputRef}
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              id="password"
              placeholder="Your password"
              ref={passwordInputRef}
              required
            />
          </label>
          <label htmlFor="c-password">
            Confirm password
            <input
              type="password"
              id="c-password"
              placeholder="Confirm your password"
            />
          </label>
          <button className="nav-item registro">Sign Up</button>
          <p className="sign-up">
            Or{" "}
            <Link to="/login">
              <span>log in</span>
            </Link>{" "}
            to enter with your account
          </p>
        </form>
      </div>
      <ModalInvalid message={mensajeError} signup={signUp} />
      <Footer />
    </div>
  );
}
