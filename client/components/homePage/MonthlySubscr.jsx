import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';

const MonthlySubscr = (props) => {

  return (
    <div>
      <p> </p>
      <p> </p>
      <h3 className="cc-homePage-rightMainCol-titles">
        Monthly Subscription
      </h3>
      <p> </p>
      <p className="cc-homePage-rightMainCol-text">
        Lorem ipsum give us money every month!  Did you know you can sign up to receive books each month?
      </p>
      <p> </p>
      <p className="cc-homePage-rightMainCol-text">
        Our subscription plans allow you to get a new papercut every month in the mail, and there are levels for every budget!
      </p>
      <p> </p>
      <Button
        className="cc-MonthlySubsc-Button"
        variant="dark"
        margin="5px"
        padding="5px">
        Start Free Trial
      </Button>{'   '}
      <Button
        className="cc-MonthlySubsc-Button"
        variant="dark"
        margin="5px"
        padding="5px">
        Compare Plans
      </Button>
      </div>
  )

}

export default MonthlySubscr;