describe('verify fun of scroll Into View',()=>{
    it('verify fun of scroll in view',()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#datepicker').scrollIntoView()
    })
       // target="_blank" use for next tab open 
       // add atrribute,remove atrribute is jqureey functon
       // warche fun jar aplyala html ele war apply karayache asel tar invoke() fun use karatat
       //invoke(function,konsa atrr remove karne ahe)-retun html ele
    it('verify fun of drag n drop',()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click()
        cy.get('#draggable').trigger('mousedown',{which:1})
        cy.get('#droppable').trigger('mousemove')
        cy.get('#droppable').trigger('mouseup',{force:true})
        //{which:1,2,3}=1 is left button,2 is middle,3 is right button 
        cy.get('#droppable').find('p').find('b').should('have.text','Dropped!')
        
    })
    it.only('verify fun of scroll in view',()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click()
        cy.get('#double-click').dblclick()
        cy.get('#double-click').should('have.attr','class','div-double-click double')

    })
})