import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import Search from './Search.jsx';
import DrinkCarousel from './DrinkCarousel';
import DrinkList from './DrinkList';
import sampleData from './sampleData.js'

const App = () => {
  const [search, setSearch] = useState('');
  const [randomDrinks, setRandomDrinks] = useState(sampleData);
  const [searchedDrinks, setSearchedDrinks] = useState(sampleData);
  const [enterButton, setEnterButton] = useState(false);

  useEffect(() => {
    axios.all([
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php'),
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php'),
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    ])
      .then(axios.spread((data1, data2, data3) => {
        setRandomDrinks([data1.data.drinks[0], data2.data.drinks[0], data3.data.drinks[0]]);
      }));
  }, []);

  useEffect(() => {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => setSearchedDrinks(res.data.drinks));
  },[search]);

  if (enterButton) {
    return (
      <div className="App">
        <div className="App-body">
          <img src="./pour_judgement_gif.gif" alt="" width="500" height="500"/>
          <DrinkCarousel drinks={randomDrinks} />
          <Search setSearch={setSearch} />
          <DrinkList drinks={searchedDrinks} />

        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="App-body">
        <img src="./pour_judgement_gif.gif" alt="" width="500" height="500"/>
        <Button variant="info" size="lg" onClick={() => setEnterButton(true)} block>Enter</Button>
      </div>
    </div>
  );

}

export default App;
