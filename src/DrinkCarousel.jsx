import React from 'react';
import { Carousel } from 'react-bootstrap';

const DrinkCarousel = ({ drinks }) => {

  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={drinks[0].strDrinkThumb}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{drinks[0].strDrink}</h3>
            <p>{drinks[0].strInstructions}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={drinks[1].strDrinkThumb}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>{drinks[1].strDrink}</h3>
            <p>{drinks[1].strInstructions}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={drinks[2].strDrinkThumb}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>{drinks[2].strDrink}</h3>
            <p>{drinks[2].strInstructions}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default DrinkCarousel;