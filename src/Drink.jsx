import React from 'react';
import { Card } from 'react-bootstrap';

const Drink = ({ drink }) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={drink.strDrinkThumb} />
        <Card.Body>
          <Card.Title>{drink.strDrink}</Card.Title>
          <Card.Text>
            {drink.strInstructions}
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