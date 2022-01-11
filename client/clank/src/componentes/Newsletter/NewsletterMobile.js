import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ContextoDB } from "../Contextos/ContextoDB";
import SubscribersList from "./SubscribersList";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export default function NewsletterMobile() {
  const [subscribersDB, dispatch] = useContext(ContextoDB); //POST
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [subscribers, setSubscribers] = useState([]); //GET

  useEffect(() => {
    const obtenerItems = async () => {
      const result = await axios(`/api/items`);
      setSubscribers(result.data);
    };
    obtenerItems();
  }, [subscribersDB]);

  const validationSchema = yup.object().shape({
    name: yup.string().required("Your name is required"),
    lastname: yup.string().required("Your last name is required"),
    email: yup.string().email().required("Your Email is required"),
    address: yup.string().optional(),
    phone: yup.number().optional(),
  });

  //Se hace el post a la BD con los datos que se ingresan en los input
  const submit = (e) => {
    e.preventDefault();
    dispatch({ type: "AGREGAR_SUB", payload: { nombre, email } }); //Este dispatch no está haciendo nada más que actualizar, sólo es una dependencia para que useeffect tenga en cuenta para cuándo volver a renderear (quedó de una implementación anterior y funciona).
    axios.post("/api/items", { nombre, apellido, email });
    axios.post("/send", { nombre, apellido, email });
    //después de hacer el post se pasan strings vacíos para dejar limpios los inputs
    setNombre("");
    setApellido("");
    setEmail("");
  };

  const {
    // control,
    handleSubmit,
    // errors,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <div className="news-container-m">
      <div className="tits-container titulos-m">
        <h2>
          Subscribe to our newsletter and get a 20% discount on all our products
        </h2>
        <p>
          By subscribing to our newsletter you will not only get weekly updates
          about all our titles but huge discounts on several products aswell.
        </p>
      </div>
      <div className="form-container-m">
        <form onSubmit={handleSubmit(submit)}>
          <h2>Newsletter</h2>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </label>
          <label htmlFor="lastname">
            Lastname
            <input
              type="text"
              name="lastname"
              placeholder="Your Last Name"
              required
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </label>
          <label htmlFor="mail">
            Email
            <input
              type="email"
              name="mail"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="address">
            Address
            <input
              type="text"
              name="address"
              placeholder="Your address (optional)"
            />
          </label>
          <label htmlFor="phone">
            Phone Number
            <input
              type="tel"
              name="phone"
              placeholder="Your number (optional)"
            />
          </label>
          <button className="nav-item registro">Subscribe</button>
        </form>
      </div>
      <SubscribersList subscribers={subscribers} />
    </div>
  );
}
