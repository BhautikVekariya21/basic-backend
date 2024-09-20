import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Fetching countries...'); // Log fetching action
    axios.get('/api/countries') 
      .then((response) => {
        console.log('Response received:', response.data); // Log the response data
        setCountries(response.data);
      })
      .catch((error) => {
        console.log('An error has occurred:', error); // Log error details
        setError('Failed to load countries.');
      });
  }, []); 

  return (
    <>
      <h1>Testing Phase</h1>
      {error && <p>{error}</p>}
      {countries.length > 0 ? (
        countries.map((country) => (
          <div key={country.rank}>
            <h3>{country.name}</h3>
            <p>{country.description}</p>
          </div>
        ))
      ) : (
        <p>Loading countries...</p>
      )}
    </>
  );
}

export default App;
