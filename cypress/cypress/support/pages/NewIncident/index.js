// ações de interações com a pagina
// ações
// acessar login
// preencher login

const el = require('./elements').ELEMENTS;

class NewIncident {
    preencherCadastroDeCAso(){
        cy.get(el.title).type('Adoção');
        cy.get(el.description).type('Adoção de Animais');
        cy.get(el.value).type(200);

        cy.route('POST', '**/incidents').as('nemIncident');

        cy.get(el.submit).click();
    }

    validarCadastroDeCaso(){
        cy.wait('@nemIncident').then((xhr) => {
            expect(xhr.status).be.eq(200);
            expect(xhr.response.body).has.property('id');
            expect(xhr.response.body.id).is.not.null;
        })
    }
}

export default new NewIncident();