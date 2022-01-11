import React, { useContext, useRef, useState } from "react";
import NavLogo from "../Navbar/NavLogo";
import { Link } from "react-router-dom";
import ratchet from "../../imagenes/fondo.jpg";
import Footer from "../Footer/Footer";
import ModalLogin from "../Modales/ModalLogin";
import { ContextoModales } from "../Contextos/ContextoModales";
import AuthContext from "../Contextos/ContextoLogin";

export default function Login() {
  const authContxt = useContext(AuthContext);
  const [mostrarModal, setMostrarModal] = useContext(ContextoModales);
  const [login, setLogin] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPass = passwordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB6sxQsX9btnk2vpThGiRgTwOLcjZzegWE",
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
    )
      .then((res) => {
        if (res.ok) {
          return res.json().then((data) => {
            console.log(data)
            const expirationTime = new Date(
              new Date().getTime() + +data.expiresIn * 1000
            );
            authContxt.login(data.idToken, expirationTime.toISOString());
            setLogin(!login);
          });
          // setMostrarModal(!mostrarModal);;
        }
        // res.json().then((data) => {
        //   const expirationTime = new Date(
        //     new Date().getTime() + +data.expiresIn * 1000
        //   );
        //   authContxt.login(data.idToken, expirationTime.toISOString());
        // });
        // setLogin(!login);
        // setMostrarModal(!mostrarModal);
        else {
          return res.json().then((data) => {
            console.log(data);
            if (data.error.message.includes("EMAIL_NOT_FOUND")) {
              setLoginMessage("The email you entered is not registered yet.");
              // setLogin(!login)
              setMostrarModal(!mostrarModal);
            } else if (data.error.message.includes("INVALID_PASSWORD")) {
              setLoginMessage("Wrong password, please try again.");
              // setLogin(!login)
              setMostrarModal(!mostrarModal);
            }
          });
        }
      })
      
  };
  return (
    <div>
      <header className="nav-login">
        <NavLogo />
        <Link to="/signup">
          <button className="nav-item registro">Sign Up</button>
        </Link>
      </header>
      <div className="login-form-container">
        <img src={ratchet} alt="Imagen login" />
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
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
              placeholder="Password"
              required
              ref={passwordInputRef}
            />
          </label>
          <button className="nav-item registro">Log In</button>
          <p className="sign-up">
            Or{" "}
            <Link to="/signup">
              <span>sign up</span>
            </Link>{" "}
            to create new account
          </p>
        </form>
      </div>
      <ModalLogin message={loginMessage} login={login} />
      <Footer />
    </div>
  );
}
