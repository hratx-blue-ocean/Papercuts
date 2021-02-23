const assert = require('assert');
const should = require('should');
const request = require('supertest');
let requestD = request('http://localhost:3000');

describe('Friend Section', () => {
  let testUserId = {
    userId: '602aea49180a1d22643e561c'
  };

  before(async () => {
    await requestD
      .delete('/user/allfriends')
      .send(testUserId)
      .expect('Content-Type', /json/)
      .expect(200);
  });

  describe('', () => {
    it('User should have no friends', async () => {
      await requestD
        .post('/user/friends')
        .send(testUserId)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
          res.body.should.eql([]);
        });
    });

    it('User should be able to add friends', async () => {
      let dummyData = {
        userId: '602aea49180a1d22643e561c',
        friendId: '60272dc32b562508c4a69a4a'
      };

      await requestD
        .post('/user/friend')
        .send(dummyData)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
          res.body.should.eql({ msg: 'Friend added' });
        });
    });

    it('User should have friends', async () => {
      await requestD
        .post('/user/friends')
        .send(testUserId)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
          res.body.should.eql([
            {
              _id: '60272dc32b562508c4a69a4a',
              email: 'userA@test.com'
            }
          ]);
        });
    });
  });
});

describe('Payment Section', () => {
  let testUserId = {
    userId: '602aea49180a1d22643e561c'
  };

  before(async () => {
    await requestD
      .delete('/user/payment')
      .send(testUserId)
      .expect('Content-Type', /json/)
      .expect(200);
  });

  describe('', () => {
    it('User should have no payment info', async () => {
      await requestD
        .get('/user/payment')
        .send(testUserId)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
          res.body.should.eql({
            payment: null
          });
        });
    });

    it('User should be able to add payment info', async () => {
      let dummyData = {
        userId: '602aea49180a1d22643e561c',
        cardNumber: 123456,
        cardHolder: 'Matthew',
        cardCVC: 343,
        cardExpiredDate: 'cardExpiredDateLol'
      };

      await requestD
        .post('/user/payment')
        .send(dummyData)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
          res.body.should.eql({
            msg: 'Payment added'
          });
        });
    });

    it('User should see new payment info', async () => {
      await requestD
        .get('/user/payment')
        .send(testUserId)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
          res.body.payment.cardNumber.should.eql(123456);
        });
    });

    it.skip('User should see updated payment info', async () => {
      let dummyData = {
        userId: '602aea49180a1d22643e561c',
        paymentID: '602aa3dac32f8d208c55cef2',
        cardNumber: 123456,
        cardHolder: 'Matthew Ming',
        cardCVC: 343,
        cardExpiredDate: 'cardExpiredDateLol'
      };
      await requestD
        .get('/user/payment')
        .send(testUserId)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
          res.body.payment.cardNumber.should.eql(123456);
        });
    });

    it.skip('User should see updated payment info', async () => {
      await requestD
        .get('/user/payment')
        .send(testUserId)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
          res.body.payment.cardNumber.should.eql(123456);
        });
    });
  });
});
