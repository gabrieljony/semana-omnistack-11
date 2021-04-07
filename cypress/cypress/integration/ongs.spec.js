/// <reference types="cypress" />

import Logon from '../support/pages/Logon'
import Register from '../support/pages/Register'
import Profiles from '../support/pages/Profiles'
import NewIncident from '../support/pages/NewIncident'

context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/register')
    })

    describe('Ongs', () => {
        it('devem poder realizar um cadastro', () => {
            // cy.get - busca um elemento
            // .type - insere um texto - Nome da Ong Fake = Dogs queridos
            // cy.get('[data-cy=name]').type('Dogs queridos');
            // cy.get('[data-cy=email]').type('dogs@gmail.com.br');
            // cy.get('[data-cy=whatsapp]').type('1199999999');
            // cy.get('[data-cy=city]').type('São Paulo');
            // cy.get('[data-cy=uf]').type('SP');

            // routing - onde a aplicação está se conectando com requisições HTTP
            // start server com cy.server()
            // criar uma rota com cy.route()
            // atribuir rota a uma lias
            // esperar com cy.wait e fazer uma validação

            // cy.server();
            // cy.route('POST', '**/ongs').as('postOng');

            // cy.get('[data-cy=submit]').click();

            // cy.wait('@postOng').then((xhr) => {
            //     expect(xhr.status).be.eq(200);
            //     expect(xhr.response.body).has.property('id');
            //     expect(xhr.response.body.id).is.not.null;
            // })

            Register.acessarCadastro();
            Register.preencherCadastro();
            Register.validarCadastroDeOngComSucesso();
        })
    })
})

describe('Login Ong', () => {

    it('deve poder realizar um login no sistema', () => {

        // const createdOngId = Cypress.env('createdOngId');
        // cy.log(createdOngId);

        // cy.visit('http://localhost:3000');
        // cy.get('[data-cy=idLogon]').type(Cypress.env('createdOngId'));
        // cy.get('[data-cy=submit]').click();

        Logon.acessarLogin();
        Logon.preencherLogin();
    });

    it('devem fazer logout', () => {
        // cy.visit('http://localhost:3000');
        // cy.get('[data-cy=idLogon]').type(Cypress.env('createdOngId'));
        // cy.get('[data-cy=submit]').click();

        // cy.visit('http://localhost:3000/profile', {
        //     onBeforeLoad: (browser) => {
        //         browser.localStorage.setItem('ongId', Cypress.env('createdOngId'))
        //         browser.localStorage.setItem('ongName', 'Teste Novo')
        //     }
        // });

        cy.login();
        // cy.get('[data-cy=signOut]').click();
        Profiles.clicarNoBotaoLogout();
    });

    it('devem poder cadastrar novos casos', () => {
        cy.login();
        Profiles.clicarNoBotaoDeNovosCasos();

        // cy.get('[data-cy=title]').type('Adoção');
        // cy.get('[data-cy=description]').type('Adoção de Animais');
        // cy.get('[data-cy=value]').type(200);

        // cy.route('POST', '**/incidents').as('nemIncident');

        // cy.get('[data-cy=submit]').click();

        // cy.wait('@nemIncident').then((xhr) => {
        //     expect(xhr.status).be.eq(200);
        //     expect(xhr.response.body).has.property('id');
        //     expect(xhr.response.body.id).is.not.null;
        // })

        NewIncident.preencherCadastroDeCAso();
        NewIncident.validarCadastroDeCaso();
    });

    it('devem poder excluir um caso', () => {
        cy.createNewIncident();
        cy.login();

        // cy.route('DELETE', '**/incidents/*').as('deleteIncident');

        // cy.get('[data-cy=delete] > svg').click();


        // cy.wait('@deleteIncident').then((xhr) => {
        //     expect(xhr.status).be.eq(200);
        //     expect(xhr.response.body).has.property('msg').equal('Incident was successfully deleted');
        // })

        Profiles.clicarNoBotaoDeExcluirUmCasos();
        Profiles.validarExclusaoDeCAsoComSucesso();
    });
})