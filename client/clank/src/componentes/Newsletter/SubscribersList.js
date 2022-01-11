import React from "react";

export default function SubscribersList({ subscribers, isLoading }) {
  return (
    <div className="list-container">
      <h2>List of New Subscribers</h2>
      {isLoading && <h2>Loading subscribers...</h2>}
      <ul>
        {subscribers?.slice(0, 5).map((sub) => (
          <li key={sub._id}>
            <h5>
              Name:{" "}
              <span style={{ color: "#B36C02" }}> {`${sub.nombre}`} </span>•
              Email:{" "}
              <span style={{ color: "#B36C02" }}> {`${sub.email}`} </span>
            </h5>
          </li>
        ))}
      </ul>
    </div>
  );
}
