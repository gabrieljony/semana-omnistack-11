// ações de interações com a pagina

const el = require('./elements').ELEMENTS;

class Register {
    acessarCadastro(){
        cy.visit('http://localhost:3000/register');
    }

    preencherCadastro(){
        cy.get(el.name).type('Dogs queridos');
        cy.get(el.email).type('dogs@gmail.com.br');
        cy.get(el.whatsapp).type('1199999999');
        cy.get(el.city).type('São Paulo');
        cy.get(el.uf).type('SP');

        cy.server();
        cy.route('POST', '**/ongs').as('postOng');
        
        cy.get(el.submit).click();
    }

    validarCadastroDeOngComSucesso(){
        cy.wait('@postOng').then((xhr) => {
            expect(xhr.status).be.eq(200);
            expect(xhr.response.body).has.property('id');
            expect(xhr.response.body.id).is.not.null;
        })
    }
}

export default new Register();