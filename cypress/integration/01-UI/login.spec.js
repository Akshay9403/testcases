describe('verify with login functionality',()=>{
    it('test login with valid credential',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[id="txtUsername"]').type('Admin')
        cy.get('input[id="txtPassword"]').type('admin123')
        cy.get('input[type="submit"]').click()
        cy.get('#branding').should('be.visible')

    })
    it('test login with invalid credential',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[id="txtUsername"]').type('Admin')
        cy.get('input[id="txtPassword"]').type('admin12355')
        cy.get('input[type="submit"]').click()
        cy.get('#spanMessage').should('be.visible')

    })
})