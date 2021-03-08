import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Country from './components/Country/Country';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import CountryDetails from './components/CountryDetials/CountryDetails';
function App() {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/all`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);

  const handleMoreInfo = (name) => {
    console.log('clicked', name);
  };
  // console.log(country);
  return (
    <div className="Header">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/all-country">
            <Container>
              <div className="grid">
                {country.map((country) => (
                  <Country
                    key={country.name}
                    handleMoreInfo={handleMoreInfo}
                    country={country}
                  />
                ))}
              </div>
            </Container>
          </Route>
          <Route path="/country/:countryName">
            <CountryDetails />
          </Route>
          <Route path="*">
            <h3>404 Page Not Found</h3>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h3>Hello</h3>
    </div>
  );
}
export default App;
