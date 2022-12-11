/// <reference types="cypress" />


const base__url = 'http://127.0.0.1:5500';
describe("Main page", () => {
    beforeEach(() => cy.visit(`${base__url}/index.html`))

    describe('clicar nos links do navBar', () => {
        beforeEach(() => cy.visit(`${base__url}/index.html`))

        it("clica no primeiro link deve levar ao main page", () => {
            cy.checkNavbar('[data-testid="index"]',`${base__url}/index.html`)
        })

        it("clica no segundo link deve levar a tela de catálogo", () => {
            cy.checkNavbar('[data-testid="catalogo"]',`${base__url}/catalogo.html`)
        })

        it("clica no terceiro link deve levar a tela de orçamento", () => {
            cy.checkNavbar('[data-testid="orcamento"]',`${base__url}/orcamento.html`)
        })

        it("clica no quarto link deve levar a tela de histórico", () => {
            cy.checkNavbar('[data-testid="historico"]',`${base__url}/historic.html`)
        })

        it("clica no primeiro link deve levar a tela de cadastro", () => {
            cy.checkNavbar('[data-testid="cadastro"]',`${base__url}/cadastro.html`)
        })
    })

    describe('clicar nas setas do slide', () => {
        it('clica na seta avançar', () => {
            cy.get('#btn-front > img').click()
        })
    })
})