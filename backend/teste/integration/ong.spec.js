const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback()
    await connection.migrate.latest()
  });

  afterAll(async () =>{
    await connection.destroy()
  });

  it('shoul be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "Ong teste",
        email: "teste@gmail.com",
        whatsapp: "71993658854",
        city: "Salvador",
        uf: "BA"
      });

      expect(reponse.body).toHaveProperty('id');
      expect(response.body.id).toHaveLength(8);
  });
})