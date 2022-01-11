import React, { useContext, useRef, useState } from 'react'
import NavLogo from '../Navbar/NavLogo'
import { Link } from "react-router-dom";
import ModalPassword from '../Modales/ModalPassword';
import AuthContext from '../Contextos/ContextoLogin';
import { ContextoModales } from '../Contextos/ContextoModales';
import FooterMobile from '../Footer/FooterMobile';

export default function PerfilMobile() {
  const authContxt = useContext(AuthContext);
  const logoutHandler = () => {
    authContxt.logout();
  }
  const [mostrarModal, setMostrarModal] = useContext(ContextoModales);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const passwordInputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredPass = passwordInputRef.current.value;

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyB6sxQsX9btnk2vpThGiRgTwOLcjZzegWE',
    {
      method:"POST",
      body:JSON.stringify({
        idToken:authContxt.token,
        password:enteredPass,
        returnSecureToken:false,
      }),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res => {
      if(res.ok){
        setSuccess(!success);
        setMostrarModal(!mostrarModal)
      } else {
        res.json().then(data => {
          if(data.error.message.includes('WEAK_PASSWORD')){
            setMessage('Insecure password. It should, at least, contain 6 characters')
            setMostrarModal(!mostrarModal)
          }
        })
      }
    })
  }

  return (
    <div>
      <header className="nav-login">
        <NavLogo />
        <Link to="/">
          <button onClick={logoutHandler} className="nav-item registro">Log Out</button>
        </Link>
      </header>
      <div className="login-form-container-m">
      {/* <img src={ratchet} alt="Imagen login" /> */}
      <form onSubmit={handleSubmit}>
          <h2>Change password</h2>
          <label htmlFor="password">
          New password
             <input type="password" id="password" placeholder='Password' required ref={passwordInputRef} />
          </label>
          <button className="nav-item registro">Change password</button>
        </form>
      </div>
      <ModalPassword message={message} changePassword={success} />
      <FooterMobile />
    </div>
  )
}
