// import React, { useState } from "react";

// function App() {
//   const handleIncrease = () => {};
//   const handleDecrease = () => {};
//   const handleReset = () => {};
//   return (
//     <div className="flex justify-center items-center">
//       <div>
//         <button onClick={handleIncrease} className="bg-green-600">Up</button>
//         <button onClick={handleDecrease}>Down</button>
//         <button onClick={handleReset}>Reset</button>
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const FILTER_CYTIES = ["Rabat", "Meknes", "Ifrane", "Fes", "Casablanca"];
// interface Country {
//   name: {
//     common: string;
//   };
//   capital: string;
// }
// interface CountryCardProps {
//   country: Country;
// }
// const CountryCard = ({ country }: CountryCardProps) => {
//   return (
//     <>
//       <p key={country.name.common}>{(country.name.common, country.capital)}</p>
//     </>
//   );
// };

// const Test = () => {
//   const [counteries, setCounteries] = useState<Country[]>([]);

//   // useEffect(() => {
//   //   axios
//   //     .get("https://restcouteries.com/v3.1")
//   //     .then((response) => {
//   //       setCouteries(response.data);
//   //       console.log(response.data);
//   //     })
//   //     .catch((error) => console.error(error));
//   // }, [counteries]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/");
//         const data = await response.json();
//         setCounteries(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="p-4">
//       <div>
//         {counteries.map((country) => {
//           return (
//             <p>
//               <CountryCard key={country.name.common} country={country} />
//             </p>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
// export default Test;

import React, { useState, useEffect } from "react";
import { MdOutlineLockReset } from "react-icons/md";
import { FaPhone, FaUser } from "react-icons/fa";

const App = () => {
  const [phone, setPhone] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [displayMessage, setDisplayMessage] = useState<boolean>(false);

  useEffect(() => {}, []);

  const handleSubmit = () => {
    if (phone) {
      setDisplayMessage(true);
      console.log("Phone number submitted:", phone);
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
    <div className="p-4">
      <p className="flex items-center font-semibold">
        <MdOutlineLockReset />
        Reset Your Password
      </p>
      <div className="mt-6 flex items-center">
        <FaUser />
        <input
          placeholder="Your name"
          value={name}
          onChange={handleNameChange}
          className="pl-2 border border-[#1a1a1a] rounded-sm mr-4"
        />
        <FaPhone />
        <input
          placeholder="Your phone"
          value={phone}
          onChange={handlePhoneChange}
          className="pl-2 border border-[#1a1a1a] rounded-sm mr-4"
        />
        <button
          onClick={handleSubmit}
          className="w-24 border rounded-md bg-[#1a1a1a] hover:border-indigo-600 text-base transition duration-450"
        >
          Confirm
        </button>
      </div>

      <div className="mt-4">
        {displayMessage ? (
          <>
            <p className="text-gray-400">
              <span className="font-semibold">{name}</span>, when it's time to
              reset your password, we will send instructions to{" "}
              <span className="text-blue-400"> {displayPhoneNumber()}. </span>
            </p>

            <h1 className="text-green-400">Have a good one!</h1>
          </>
        ) : (
          <p className="text-red-500">No input provided.</p>
        )}
      </div>
    </div>
  );
};

export default App;
