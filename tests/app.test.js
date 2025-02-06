const request = require('supertest');

describe('GET /', () => {
  let server;

  beforeEach(() => {
    // 
    process.env.PORT = 8080;
    server = require('../index');
  });

  afterEach(() => {
    server.close(); //
  });

  it('responds to /', (done) => {
    request(server)
      .get('/')
      .expect(200, done);
  });
});
