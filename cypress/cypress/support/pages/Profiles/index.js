// ações de interações com a pagina
// ações
// acessar login
// preencher login

const el = require('./elements').ELEMENTS;

class Profiles {
    clicarNoBotaoLogout(){
        cy.get(el.signOut).click();
    }

    clicarNoBotaoDeNovosCasos(){
        cy.get(el.new).click();
    }

    clicarNoBotaoDeExcluirUmCasos(){
        cy.route('DELETE', '**/incidents/*').as('deleteIncident');

        cy.get(el.delete).click();
    }

    validarExclusaoDeCAsoComSucesso(){
        cy.wait('@deleteIncident').then((xhr) => {
            expect(xhr.status).be.eq(200);
            expect(xhr.response.body).has.property('msg').equal('Incident was successfully deleted');
        })
    }
}

export default new Profiles();