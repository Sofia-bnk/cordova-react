import axios from "axios";
import React, { useState, useEffect } from "react";

function Countries() {
  const [Countries, setCountries] = useState([]);

  useEffect(fetchCountries, []);

  function fetchCountries() {
    (async () => {
      setCountries((await axios("https://restcountries.eu/rest/v2/all")).data);
    })();
  }

  return (
    <div>
      {Countries.map((country) => (
        <div key={country.name}>{country.name}</div>
      ))}
    </div>
  );
}

export default Countries;
