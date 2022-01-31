describe('verify intercept function',()=>{
    it('get intercept',()=>{
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('getcomment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('button[class="network-btn btn btn-primary"]').click()
        cy.wait('@getcomment').then(function(res){
            cy.log(res)
            expect(res.request.headers.referer).to.eq("https://example.cypress.io/")
            expect(res.response.statusCode).to.eq(200)
        })
        cy.get('.network-comment').should('contain','laudantium enim quasi')
    })

    it('post intercept',()=>{
        cy.intercept({
            method:"POST",
            url:"https://jsonplaceholder.cypress.io/comments"
        }).as('postcomment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Post Comment').click()
        cy.wait('@postcomment').then(function(res){
            cy.log(res)
            expect(res.response.statusCode).to.eq(201)
            cy.get('.network-post-comment').should('have.text','POST successful!')
        })
        
    })


    it.only('update intercept',()=>{
        cy.intercept({
            method:"OPTIONS",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('updatecomment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Update Comment').click()
        cy.wait('@updatecomment').then(function(res){
            cy.log(res)
            expect(res.response.statusCode).to.eq(204)
            
        })
        
    })
})

