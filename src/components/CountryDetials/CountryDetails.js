import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import './CountryDetails.css';
const CountryDetails = () => {
  const { countryName } = useParams();
  const [countryInfo, setCountryInfo] = useState([]);
  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountryInfo(data[0]));
  }, []);
  console.log(countryInfo);
  const {
    name,
    capital,
    area,
    population,
    flag,
    region,
    language,
  } = countryInfo;
  return (
    <Container>
      <div className="country__details">
        <div className="img">
          <img src={flag} alt={name} />
        </div>
        <h3>Country Name : {name}</h3>
        <h4>Capital : {capital}</h4>
        <h4>
          Area : {area} m<sup>2</sup>
        </h4>
        <h5>Population : {population}</h5>
      </div>
    </Container>
  );
};

export default CountryDetails;
