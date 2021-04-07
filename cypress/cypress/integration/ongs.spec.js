/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/register')
    })

describe('Ongs', () => {
    it('devem poder realizar um cadastro', () => {
        // cy.get - busca um elemento
        // .type - insere um texto - Nome da Ong Fake = Dogs queridos
        cy.get('[data-cy=name]').type('Dogs queridos');
        cy.get('[data-cy=email]').type('dogs@gmail.com.br');
        cy.get('[data-cy=whatsapp]').type('1199999999');
        cy.get('[data-cy=city]').type('São Paulo');
        cy.get('[data-cy=uf]').type('SP');

        // routing - onde a aplicação está se conectando com requisições HTTP
        // start server com cy.server()
        // criar uma rota com cy.route()
        // atribuir rota a uma lias
        // esperar com cy.wait e fazer uma validação

        cy.server();
        cy.route('POST', '**/ongs').as('postOng');

        cy.get('[data-cy=submit]').click();

        cy.wait('@postOng').then((xhr) => {
            expect(xhr.status).be.eq(200);
            expect(xhr.response.body).has.property('id');
            expect(xhr.response.body.id).is.not.null;
        })
    })
  })
})

describe('Login Ong', () => {

    it('deve poder realizar um login no sistema', () => {

        // const createdOngId = Cypress.env('createdOngId');
        // cy.log(createdOngId);

        cy.visit('http://localhost:3000')
        cy.get('[data-cy=idLogon]').type(Cypress.env('createdOngId'));
        cy.get('[data-cy=submit]').click();
    })
})