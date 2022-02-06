describe('verify intercept function',()=>{
    it('get intercept',()=>{
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('getcomment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('button[class="network-btn btn btn-primary"]').click()
        cy.wait('@getcomment').then(function({request,response}){
            cy.log(response)
            cy.log(request)
            expect(request.headers.referer).to.eq("https://example.cypress.io/")
            expect(response.statusCode).to.eq(200)
        })
        cy.get('.network-comment').should('contain','laudantium enim quasi')
    })
})

