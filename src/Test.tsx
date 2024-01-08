// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Test = () => {
//   const [counteries, setCouteries] = useState<string>();

//   const FILTER_CYTIES = ["Rabat", "Meknes", "Ifrane", "Fes", "Casablanca"];
//   useEffect(() => {
//     axios
//       .get("https://restcouteries.com/v3.1")
//       .then((response) => {
//         setCouteries(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => console.error(error));
//   });
//   return <div>{counteries}</div>;
// };

// export default Test;
