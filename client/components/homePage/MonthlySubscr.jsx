import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';

const MonthlySubscr = (props) => {

  return (
    <div>
      <h3 className="cc-medTitles-left">
        Monthly Subscription
      </h3>
      <p> </p>
      <p className="cc-homePage-smallText">
        Lorem ipsum give us money every month!  Did you know you can sign up to receive books each month?
      </p>
      <p className="cc-homePage-smallText">
        Our subscription plans allow you to get a new papercut every month in the mail, and there are levels for every budget!
      </p>
      <Button
        className="cc-MonthlySubsc-Button"
        variant="dark"
        margin="5px"
        padding="5px"
        block
        href='/subscriptions'>
        See Subscription Tiers
      </Button>{'   '}
      </div>
  )

}

export default MonthlySubscr;