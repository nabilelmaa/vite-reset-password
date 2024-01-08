import React, { useState, useEffect } from "react";
import { MdOutlineLockReset } from "react-icons/md";
import { FaPhone, FaUser } from "react-icons/fa";

const App = () => {
  const [phone, setPhone] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [displayMessage, setDisplayMessage] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {}, []);

  const handleSubmit = () => {
    if (phone) {
      setLoading(true);
      setTimeout(() => {
        setDisplayMessage(true);
        setLoading(false);
        console.log("Phone number submitted:", phone);
      }, 2000); // Simulating a 2-second delay
    }
  };

  const displayPhoneNumber = () => {
    if (phone && phone.length >= 2) {
      const lastTwoDigits = phone.slice(-2);
      const hideNumbers = "•".repeat(phone.length - 2);
      return `${hideNumbers}${lastTwoDigits}`;
    }
    return null;
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event?.target.value);
  };

  return (
    <div className="max-w-screen-sm justify-center mx-auto mt-12 p-4 bg-gray-100 rounded-lg shadow-md">
    <p className="flex items-center font-semibold text-gray-700">
      <MdOutlineLockReset className="mr-2" />
      Reset Your Password
    </p>
  
    <div className="mt-6 flex flex-col">
      <div className="flex items-center mb-4">
        <FaUser className="mr-2" />
        <input
          placeholder="Your name"
          value={name}
          onChange={handleNameChange}
          className="h-10 sm:h-8 pl-2 bg-white rounded-sm ml-2"
        />
      </div>
  
      <div className="flex items-center mb-4">
        <FaPhone className="mr-2" />
        <input
          placeholder="Your phone"
          value={phone}
          onChange={handlePhoneChange}
          className="h-10 sm:h-8 pl-2 bg-white rounded-sm ml-2"
        />
      </div>
  
      <button
        onClick={handleSubmit}
        className="p-2 ml-4 sm:ml-16 w-24 border rounded-md bg-gray-300 hover:border-indigo-600 text-base transition duration-450"
      >
        {loading ? (
          <span className="loading loading-dots loading-md"></span>
        ) : (
          "Confirm"
        )}
      </button>
    </div>
  
    <div className="mt-4">
      {displayMessage ? (
        <>
          <p className="text-gray-600">
            <span className="font-semibold">{name}</span>, when it's time to reset
            your password, we will send instructions to{" "}
            <span className="text-blue-500">{displayPhoneNumber()}.</span>
          </p>
          <h1 className="text-green-500">Have a good one!</h1>
        </>
      ) : (
        <p className="text-red-500">No input provided.</p>
      )}
    </div>
  </div>
  

  );
};

export default App;
