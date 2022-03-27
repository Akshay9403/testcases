/// <reference types="cypress"/>


describe('verify search function with enter keyboard', () => {
    beforeEach(function () {
        cy.visit('http://zero.webappsecurity.com/')
    })
    it('verify search function with enter keyboard', () => {

        cy.get('input[id="searchTerm"]').type('hindi{enter}')
        cy.get('h2').should('be.visible').and('have.text', 'Search Results:')
    })
    it('navigation bar test', () => {//imp
        cy.get('ul[id="pages-nav"]').children().should('have.length', 3)
        let text = ['Home', 'Online Banking', 'Feedback']
        let url = ['index.html', 'online-banking.html', 'feedback.html']
        text.forEach(function (el, index) {
            cy.contains(el).click()
            cy.url().should('contain', url[index])

        })
    })//all text first define in fixture-example.json-text put then call in case
    it('verify feedback form', () => {
        cy.fixture('example').then((asp) => {
            cy.get('li[id="feedback"]').click()
            cy.get('#name').type(asp.name)
            cy.get('#email').type(asp.email)
            cy.get('#subject').type(asp.subject)
            cy.get('#comment').type(asp.comment)
            cy.get('input[type="submit"]').click()
            cy.get('h3[id="feedback-title"]').should('have.text', 'Feedback')
            cy.get('h3[id="feedback-title"]').should('be.visible')
        })
    })
    //OR both id and fixture file key name are same 
    it('verify feedback form 2 method', () => {
        cy.fixture('example').then((asp1) => {
            cy.get('li[id="feedback"]').click()
            for (let key in asp1) {
                cy.get(`#${key}`).type(asp1[key])
            }
            cy.get('input[type="submit"]').click()
            cy.get('h3[id="feedback-title"]').should('have.text', 'Feedback')
            cy.get('h3[id="feedback-title"]').should('be.visible')
            
        })

    })
    it('verify login function',()=>{
        cy.get('#signin_button').click()
        cy.get('#user_login').type('username')
        cy.get('#user_password').type('password')
        cy.get('#user_remember_me').check()
        cy.get('input[type="submit"]').click()
        cy.get('.offset2 > :nth-child(1)').should('have.text','Cash Accounts')

    })
    it.only('verify login function using custom cammand ',()=>{
       cy.login('username','password')
       cy.url().should('contain','bank/account-summary.html')
    })

})