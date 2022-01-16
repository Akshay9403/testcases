describe('transeverse methods in cyoress',()=>{
    // it('To get children of DOM elements, use the .children() command.',()=>{
    //     cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    //     cy.get('.traversal-drinks-list').children().should('have.length',5)
    // })
    // it.('To get a DOM element at a specific index, use the .eq() command',()=>{
    //     cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    //     cy.get('.traversal-drinks-list').children().eq(0).should('have.text','Coffee')
    // })
    it('To get the first DOM element within elements, use the .first() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().first().should('have.text','Coffee')
    })
    it('To get the last DOM element within elements, use the .last() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().last().should('have.text','Sugar')
    })
    it('To get all sibling DOM elements of elements, use the .siblings() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('li[id="coffee"]').siblings().should('have.length',4)
    })
    it('To get the next sibling DOM element within elements, use the .next() command',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('li[id="coffee"]').next().should('have.attr','id','tea')
    })
    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('li[id="coffee"]').nextAll().should('have.length',4)
    })
    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('li[id="coffee"]').nextUntil('li[id="sugar"]').should('have.length',3)
    })
    it('To get the previous sibling DOM element within elements, use the .prev() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('li[id="sugar"]').prev().should('have.text','Espresso')
    })
    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('li[id="sugar"]').prevAll().should('have.length',4)
    })
    it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command..',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('li[id="sugar"]').prevUntil('li[id="coffee"]').should('have.length',3)
    })
    it('To get parent DOM element of elements, use the .parent() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('li[id="coffee"]').parent().should('have.attr','class','traversal-drinks-list')
    })
    it('To get descendant DOM elements of the selector, use the .find() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('nav[aria-label="breadcrumb"]').find('ol').find('li').should('have.attr','class','breadcrumb-item')
    })
    it('To get descendant DOM elements of the selector, use the .find() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('nav[aria-label="breadcrumb"]').find('ol').find('li').filter('.active').should('have.text','Contact Us')
    })
    it('To get the closest ancestor DOM element, use the .closest() command..',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#sugar').closest('.traversal-drinks-list').should('have.attr','Class','traversal-drinks-list')
    })
  
    it('To remove DOM element(s) from the set of elements, use the .not() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().not('#coffee').should('have.length',4)
    })
    it('To get the closest ancestor DOM element, use the .closest() command..',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#sugar').closest('ul').should('have.attr','Class','traversal-drinks-list')
    })
    it('To get parent DOM element of elements, use the .parent() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('li[id="coffee"]').parent().should('have.attr','class','traversal-drinks-list')
    })
    it('To get parents DOM element of elements, use the .parents() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('li[id="coffee"]').parents().should('have.attr','class','traversal-drinks-list')
    })
    it.only('To get parent DOM element of elements, use the .parent() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('mark[class="traversal-mark"]').parent().should('contain','Lorem ipsum')
    })
    


    
})