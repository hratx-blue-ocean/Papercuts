const stripe = require('stripe')(
  'sk_test_51IHxGGEZ5KuRE6lkchkRwIdE2NXn8cNPCtp0tYd2V2ZSGlYMaMPdcgbamUoT7EPSO5O1bIuuQDJRkNnJqWcHum7W00NRsbMvR9'
);
const router = require('express').Router();

router.post('/', async (req, res) => {
  console.log('we made it');
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Stubborn Attachments',
            images: ['https://i.imgur.com/EHyR2nP.png'],
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `http://localhost:3000/checkout/success`,
    cancel_url: `http://localhost:3000/checkout/cancel`,
  });
  res.json({ id: session.id });
});

module.exports = router;
