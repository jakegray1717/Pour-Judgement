import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Search from './Search.jsx';
import DrinkCarousel from './DrinkCarousel';
import DrinkList from './DrinkList';
import sampleData from './sampleData.js'

const App = () => {
  const [search, setSearch] = useState('');
  const [buttonToggle, setButtonToggle] = useState(false);
  const [randomDrinks, setRandomDrinks] = useState(sampleData);
  const [searchedDrinks, setSearchedDrinks] = useState(sampleData);

  // useEffect(() => {
  //   axios.all([
  //     axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php'),
  //     axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php'),
  //     axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  //   ])
  //     .then(axios.spread((data1, data2, data3) => {
  //       setRandomDrinks([data1, data2, data3]);
  //     }));
  // });

  // useEffect(() => {
  //   axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
  //     .then((res) => setSearchedDrinks(res));
  // },[search]);

  return (
    <div className="App">
      <div className="App-body">
        <h1> Pour Judgement </h1>
        <Search setSearch={setSearch} setButtonToggle={setButtonToggle} buttonToggle={buttonToggle} />
        <DrinkCarousel drinks={randomDrinks} />
        <DrinkList drinks={searchedDrinks} />
      </div>
    </div>
  );
}

export default App;
