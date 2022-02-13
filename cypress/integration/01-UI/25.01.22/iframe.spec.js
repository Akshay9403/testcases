// eka html page madhe ajun ek html page called iframe

describe('verify iframe function',()=>{
    it('verify iframe fun with jquerry',()=>{
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function(x){
          let body= x.contents().find('body')// it is jqureyy method
          cy.wrap(body).as('simpleName')//converted into cypress method
          cy.get('@simpleName').find('.sub-heading').first().should('have.text','Who Are We?')
        })
    })


    it.only('verify iframe fun with javascipt',()=>{
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function(x){
          let body1=x['0'].contentDocument.body
          cy.wrap(body1).as('simple')
          cy.get('@simple').find('.sub-heading').first().should('have.text','Who Are We?')
        })
    })
})