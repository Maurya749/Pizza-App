import React from 'react';

const PaymentButton = () => {
  const handlePayment = async () => {
    const response = await fetch('http://localhost:3001/create-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 500 }), // Example amount: 500 INR
    });

    const order = await response.json();

    const options = {
      key: 'YOUR_KEY_ID', // Replace with your public key
      amount: order.amount,
      currency: order.currency,
      name: 'Your Company Name',
      order_id: order.id,
      handler: (response) => {
        alert('Payment Successful!');
        console.log(response);
      },
      theme: { color: '#3399cc' },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return <button onClick={handlePayment}>Pay Now</button>;
};

export default PaymentButton;
