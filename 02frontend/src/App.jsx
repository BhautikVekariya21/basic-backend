import { useEffect, useState } from 'react'; // Import React hooks for managing state and side effects
import axios from 'axios'; // Import axios for making HTTP requests
import './App.css'; // Importing CSS for styling the component

function App() {
  const [countries, setCountries] = useState([]); // State to store the list of countries
  const [error, setError] = useState(null); // State to handle any errors during data fetching

  useEffect(() => {
    console.log('Fetching countries...'); // Log fetching action to help with debugging

    // Make a GET request to the API to fetch countries
    axios.get('/api/countries') 
      .then((response) => {
        console.log('Response received:', response.data); // Log the response data for debugging
        setCountries(response.data); // Update the state with the fetched country data
      })
      .catch((error) => {
        console.log('An error has occurred:', error); // Log error details to help identify the issue
        setError('Failed to load countries.'); // Set the error message in case the request fails
      });
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <>
      <h1>Testing Phase</h1> {/* Heading of the application */}
      
      {/* Display the error message if one exists */}
      {error && <p>{error}</p>}

      {/* Conditionally render the list of countries or a loading message */}
      {countries.length > 0 ? (
        countries.map((country) => (
          <div key={country.rank}> {/* Use a unique key for each country, assuming 'rank' is unique */}
            <h3>{country.name}</h3> {/* Display the country's name */}
            <p>{country.description}</p> {/* Display the country's description */}
          </div>
        ))
      ) : (
        <p>Loading countries...</p> {/* Show a loading message while countries are being fetched */}
      )}
    </>
  );
}

export default App;
