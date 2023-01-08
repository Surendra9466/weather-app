import './App.css';
import { useState } from 'react';
import DisplayData from './components/DisplayData';
import Error from './components/Error';
import Card from './components/Card';
import { BsSearch } from "react-icons/bs";
import { TbCurrentLocation } from "react-icons/tb";
import useFetch from './components/useFetch';
import Loader from './components/Loader';
import France from './assets/image/FRANCE.PNG'

function App() {
  const [query, setQuery] = useState("France");
  const [input, setInput] = useState("");
  const [image, setImage] = useState(France);
  const { apiData, isLoading } = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=1dc861629d885f6ae8deb02ee6214529`);

  const countries = [
    { name: "France", color: "#706BD6" },
    { name: "Tunisia", color: "#72c6c7" },
    { name: "Qatar", color: "#D36B9E" },
    { name: "Japan", color: "#F6946D" }
  ];


  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleQuery() {
    setQuery(input)
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      if (e.target.value !== "") {
        handleQuery();
        setImage('https://wallpaperaccess.com/full/1540031.jpg');
      }
    }
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="App">
      {apiData && apiData?.cod === 200 ? <DisplayData apiData={apiData} image={image} /> : null}
      {apiData && (apiData?.cod === '404' || apiData?.cod === '400') ? <Error /> : null}
      <div className='card-container'>
        <div className='input-wrapper'>
          <div className='search-icon' onClick={handleQuery}><BsSearch /></div>
          <input className='search-box' placeholder='Search Location (Press Enter To See Result)' type="text" onChange={handleChange}
            onKeyPress={handleKeyPress} value={input} />
          <div className='location-icon'><TbCurrentLocation /></div>
        </div>
        <div className='card-wrapper'>
          {countries.map((country, index) => {
            return <Card key={index} name={country.name} color={country.color} setQuery={setQuery} setImage={setImage} />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;