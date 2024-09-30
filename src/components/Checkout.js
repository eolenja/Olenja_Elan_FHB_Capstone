import React, { useState } from 'react';

const Checkout = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!fullName || !email || !address) {
      setError('All fields are required.');
      return;
    }


    console.log('Order submitted:', { fullName, email, address });
  
    setFullName('');
    setEmail('');
    setAddress('');
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-4">Checkout</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-keppel"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-keppel"
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-keppel"
          required
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-saffron text-onyx rounded hover:bg-keppel transition duration-200"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;

