describe('verify fun of check,radioButton',()=>{
    beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })

    it('verify fun of checkbox with one salect',()=>{
        cy.get('input[type="checkbox"]').first().check().should('be.checked')
        cy.wait(5000)
        cy.get('input[type="checkbox"]').first().uncheck().should('not.be.checked')//('be.not.checked')
        cy.wait(5000)
        cy.get('input[type="checkbox"]').eq(1).click().should('be.checked')
    })
    
    it('verify fun of checkbox with multiple salect',()=>{
        cy.get('input[type="checkbox"]').check(['option-1','option-2','option-3','option-4']).should('be.checked')
        cy.get('input[type="checkbox"]').uncheck(['option-1','option-2','option-3','option-4']).should('be.not.checked')
    })

    it('by default option 3 always check then uncheck it with click & uncheck',()=>{
        cy.get('input[value="option-3"]').click().should('be.not.checked')
        cy.get('input[type="checkbox"]').eq(2).uncheck().should('not.be.checked')
        
    })
    it.only('verify fun of radiobutton with click',()=>{
        cy.get('input[value="blue"]').click().should('be.checked')
        cy.get('input[value="green"]').click().should('be.checked')
        cy.get('input[value="yellow"]').check().should('be.checked')
        cy.get('input[value="green"]').should('not.be.checked')
    })
})