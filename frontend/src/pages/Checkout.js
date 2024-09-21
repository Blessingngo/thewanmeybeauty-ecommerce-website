import React, { useState } from "react";

const Checkout = () => {
  const [billingInfo, setBillingInfo] = useState({ name: "", address: "" });

  const handleOrder = () => {
    // Process order logic here
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <form onSubmit={handleOrder}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={billingInfo.name}
            onChange={(e) => setBillingInfo({ ...billingInfo, name: e.target.value })}
          />
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            value={billingInfo.address}
            onChange={(e) => setBillingInfo({ ...billingInfo, address: e.target.value })}
          />
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
