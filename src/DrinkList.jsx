import React from 'react';
import { CardDeck } from 'react-bootstrap';
import Drink from './Drink.jsx'

const DrinkList = ({ drinks }) => {

  return (
    <div>DrinkList
      <CardDeck>
        {drinks.map((drink, index) => {
          return (
            <Drink drink={drink} key={index} />
          )
        })}
      </CardDeck>
    </div>
  )
}

export default DrinkList;