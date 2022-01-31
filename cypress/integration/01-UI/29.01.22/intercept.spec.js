describe('verify the get request',()=>{
    it('verify get req',()=>{
        cy.request({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).then(function(res){
            let text = res.body.body
            return text
        }).then(function(text){
            cy.visit('https://example.cypress.io/commands/network-requests')
            cy.contains('Get Comment').click()
            cy.wait(3000)
            cy.get('.network-comment').then(function(ek){
            expect(ek.text()).to.equal(text)
                //cy.log(ek)
            })
        })
    })
})