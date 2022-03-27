// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';

// Cypress.Commands.add('login', (username, password) => {
//     cy.get('#signin_button').click()
//     cy.get('#user_login').type(username)
//     cy.get('#user_password').type(password)
//     cy.get('#user_remember_me').check()
//     cy.get('input[type="submit"]').click()
//     cy.get('.offset2 > :nth-child(1)').should('have.text', 'Cash Accounts')

// })

Cypress.Commands.add('getandSetToken', () => {
    Cypress.log({
        message: 'Request token and set in local stage',
        displayName: 'GetToken'
    })
    cy.request({
        method: "POST",
        url: 'https://api.realworld.io/api/users/login',
        body: {
            user:
            {
                email,
                password
            }
        }

    }).then(function (res) {
        const { token } = res.body.user
        localStorage.setItem('jwt', token)
    })
})