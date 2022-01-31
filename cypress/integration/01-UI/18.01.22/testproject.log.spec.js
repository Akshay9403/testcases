describe('to verify test project log in log out fun',()=>{
    it.only('verify log in with currect pass',()=>{
        cy.visit('https://auth.testproject.io/auth/realms/TP/protocol/openid-connect/auth?client_id=tp.app&redirect_uri=https%3A%2F%2Fapp.testproject.io%2Fcallback.html&response_type=id_token%20token&scope=openid%20profile&state=49fa63f19c0e41cda610027287434dcd&nonce=b5879bc014bc46dfa271ae6c98a9b6c8')
        cy.get('#username').type('akshaypardeshi47@gmail.com')
        cy.get('#password').type('Akshay@9403')
        cy.get('#tp-sign-in').click()
        cy.wait(10000)
        //cy.title('div[class="my-projects-label"]').should.equal('be.visible')
        cy.title().should('eq',"TestProject")
    })


    it('verify log in with currect pass',()=>{
        cy.visit('https://auth.testproject.io/auth/realms/TP/protocol/openid-connect/auth?client_id=tp.app&redirect_uri=https%3A%2F%2Fapp.testproject.io%2Fcallback.html&response_type=id_token%20token&scope=openid%20profile&state=49fa63f19c0e41cda610027287434dcd&nonce=b5879bc014bc46dfa271ae6c98a9b6c8')
        cy.get('#username').type('akshaypardeshi47@gmail.com')
        cy.get('#password').type('aakshay@9403')
        cy.get('#tp-sign-in').click()
        cy.get('#tp-message-error').should('be.visible')
       
    })
})