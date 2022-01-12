import axios from "axios";
import React, { useState } from "react";
import SubscribersList from "./SubscribersList";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import ModalNewsletter from "../Modales/ModalNewsletter";
import { useSubscribers } from "./index";

export default function Newsletter() {
  const [update, setUpdate] = useState(false);
  const { newsSubscribers, isLoading } = useSubscribers(update);
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState("");

  const validationSchema = yup.object().shape({
    name: yup.string().required("Your name is required"),
    lastname: yup.string().required("Your last name is required"),
    email: yup.string().email().required("Your email is required"),
    address: yup.string().optional(),
  });

  const errorMessage =
    "This email is already registered, please try with a different one";

  const successMessage = "You've succesfully signed up to our newsletter";

  const submit = (data) => {
    const subsEmails = newsSubscribers.map((sub) => sub.email);
    if (subsEmails.includes(data.email)) {
      setModal(!modal);
      setMessage(errorMessage);
      return;
    }
    const res = axios.post("http://localhost:8080/api/items", { data });
    res
      .then(setModal(!modal), setMessage(successMessage), setUpdate(!update))
      .catch((error) => console.error(error));
    reset({ name: "", lastname: "", email: "", address: "", phone: "" });
  };

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <div className="news-container-m">
      <div className="tits-container-m">
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
          <label htmlFor="nombre">
            Name
            <input name="name" placeholder="Name" {...register("name")} />
          </label>
          <div className="error-message">
            <ErrorMessage errors={errors} name="name" />
          </div>
          <label htmlFor="apellido">
            Last Name
            <input
              name="lastname"
              placeholder="Last Name"
              {...register("lastname")}
            />
          </label>
          <div className="error-message">
            <ErrorMessage errors={errors} name="lastname" />
          </div>
          <label htmlFor="email">
            Email
            <input name="email" placeholder="Email" {...register("email")} />
          </label>
          <div className="error-message">
            <ErrorMessage errors={errors} name="email" />
          </div>
          <label htmlFor="address">
            Address
            <input
              name="address"
              placeholder="Address"
              {...register("address")}
              className="optional"
            />
          </label>
          <label htmlFor="phone">
            Phone Number
            <input name="phone" placeholder="Number" {...register("phone")} />
          </label>
          <button className="nav-item registro">Subscribe</button>
        </form>
      </div>
      <ModalNewsletter message={message} modal={modal} setModal={setModal} />
      <SubscribersList subscribers={newsSubscribers} isLoading={isLoading} />
    </div>
  );
}
