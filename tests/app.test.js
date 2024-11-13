const request = require('supertest');

describe('GET /', () => {
  let server;

  beforeEach(() => {
    // Указываем порт через переменную окружения перед загрузкой сервера
    process.env.PORT = 8080;
    server = require('../index');
  });

  afterEach(() => {
    server.close(); // Закрываем сервер после каждого теста
  });

  it('responds to /', (done) => {
    request(server)
      .get('/')
      .expect(200, done);
  });
});
