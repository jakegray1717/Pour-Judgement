import React from 'react';
import { Card } from 'react-bootstrap';

const Drink = ({ drink }) => {
  const ingredientList = (drink) => {
    const list = [];
    let spot = 1;

    const findIngredients = (strIngr) => {
      if (drink[strIngr] === null) {
        return
      }
      list.push([drink[strIngr], ' - ' + drink[`strMeasure${spot}`]]);
      spot ++;
      findIngredients(`strIngredient${spot}`);
    }

    findIngredients("strIngredient1");

    return list;
  }

  const drinkIngredients = ingredientList(drink);

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={drink.strDrinkThumb} />
        <Card.Body>
          <Card.Title><b><u>{drink.strDrink}</u></b></Card.Title>
          <Card.Text>
            {drinkIngredients.map((ingredient, index) => {
              return (
                <span key={index}>{ingredient}<br></br></span>
              )
            })}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{drink.strCategory}</small>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default Drink;