const request = require('supertest')('http://localhost:3000/bookclub');
const expect = require('chai').expect;

describe('GET /bookclub/all', () => {
  it('should returns all the bookclubs', async () => {
    const response = await request.get('/all');

    expect(response.status).to.eql(200);
    expect(response.body.length).greaterThan(0);
  });
});

describe('GET bookclub by its id', () => {
  it('should return one bookclub with the same id', async () => {
    const response = await request.get('/602bff381017a68f02009b0e');

    expect(response.status).to.eql(200);
    expect(response.body._id.length).to.greaterThan(0);
    expect(response.body._id).to.equal('602bff381017a68f02009b0e');
  });
});

describe('Get bookclub by its name', () => {
  it('should return one bookclub with the name provided', async () => {
    const response = await request
      .get('/')
      .send({
        name: 'Game of Thrones Book Club'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/);

    expect(response.status).to.eql(200);
    expect(response.body.name).to.eql('Game of Thrones Book Club');
  });
});

describe('Get all comments from a boolclub', () => {
  it('should return all comments from a bookclub', async () => {
    const response = await request.get('/comment/602bff381017a68f02009b0e');

    expect(response.status).to.eql(200);
    expect(response.body.length).greaterThan(0);
  });
});

describe('Post user join a booyclub by its id', () => {
  it('user should be a memeber of the bookclub', async () => {
    const response = await request
      .post('/join/602bff381017a68f02009b0e')
      .send({
        userId: '602eace0314a03826d2b400f'
      })
      .set('Accept', 'application/json');

    expect(response.status).to.equal(201);
    expect(response.body).to.equal('successfully added.');
  });
});

describe('Delete user from the bookclub by its userId', () => {
  it('user should leave the bookclub', async () => {
    const response = await request
      .delete('/leave/602bff381017a68f02009b0e')
      .send({
        userId: '602be49226e7f146247321c8'
      })
      .set('Accept', 'application/json');

    expect(response.status).to.eql(202);
  });
});

describe('Post questionnaire', () => {
  it('should have a questionaire stored', async () => {
    const response = await request
      .post('/questionnaire/602bff381017a68f02009b0e')
      .send({
        answer_1: '10',
        answer_2: 'Yes',
        answer_3: 'my favorite event so far was the black history related.',
        answer_4: 'my favorite part of this book is..',
        answer_5: 'I wanna ask the author..',
        answer_6: 'I have a advice that ..'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/);

    expect(response.status).to.eql(201);
    expect(response.body.answer_1).to.eql('10');
  });
});
