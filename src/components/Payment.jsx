import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const { state } = useLocation();
  const product = state?.product;
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  if (!product) {
    navigate("/");
    return null;
  }

  const submit = async (e) => {
    e.preventDefault();

    if (!phone) {
      setMessage("Please enter a phone number");
      return;
    }

    setMessage("Please wait as we Process...");

    try {
      const data = new FormData();
      data.append("phone", phone);
      data.append("amount", product.cost);

      const response = await axios.post(
        "https://Mwangi10.pythonanywhere.com/api/mpesa_payment",
        data
      );

      setMessage(response.data.message);
    } catch (error) {
      setMessage("Payment failed. Please try again.");
      console.error("Payment error:", error);
    }
  };

  return (
    <div className="row justify-content-center m-4">
      <div className="col-md-6 card shadow p-4">
        <form onSubmit={submit}>
          <h2 className="text-success">LIPA NA MPESA</h2>
          <h4>Paying for: {product.name}</h4>
          <p>Amount: {product.price}</p>

          {message && <div className="alert alert-info">{message}</div>}

          <input
            type="tel"
            placeholder="Enter Phone Number (254...) "
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <p className="text-start">
            Enter phone number to pay from (starts with 25412345678)
          </p>

          <button type="submit" className="btn btn-success mt-4 w-50">
            Pay Now 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
