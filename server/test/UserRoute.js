const assert = require('assert');
const should = require('should');
const request = require('supertest');
let requestD = request('http://localhost:3000');

describe('User route', () => {
  describe('Friends Sections', () => {
    it('Should be test', () => {
      let testData = {
        userId: '602987d27cc8de1408fc1537',
      };

      let expectedData = {
        payment: {
          _id: '602ae5f76ccd122f202bbab0',
          cardNumber: 123456,
          cardHolder: 'Matthew',
          cardExpiredDate: 'cardExpiredDateLol',
          __v: 0,
        },
      };

      requestD
        .get('/user/payment')
        .send(testData)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, { name: 'john' })
        .end((err, res) => {
          res.body.should.eql(expectedData);
        });
    });
  });
});
