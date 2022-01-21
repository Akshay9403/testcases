describe('to verify the drop down ',()=>{
    it('verify the drop down',()=>{
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdowm-menu-1').select('python')//.should('have.text',"Python")--error
        cy.get('#dropdowm-menu-1').select('Python').should('have.value','python')
        cy.get('#dropdowm-menu-1').select('sql')
    })
    // imp
    it('verify multiple drop down ',()=>{
        let salectval=['python','testng','css']
        cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
        cy.get('.section-title').first().children().each(function(el,index){
           cy.wrap(el).select(salectval[index]).should('have.value',(salectval[index]))
        })
    })
    // desable fun
    it('verify fun of disable',()=>{
        cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
        cy.get('input[value="cabbage"]').should('be.disabled')
        cy.get('input[value="lettuce"]').should('not.be.disabled')
    })
    //url
    it.only('verify fun of url',()=>{
        cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
        cy.url().should('include','Checkboxes')
        cy.url().should('include','Dropdown')
        cy.url().should('contain','Dropdown')
    })  
    //title
    it.only('verify fun of title',()=>{
        cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
        cy.title().should('include','WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)')
        
    })   

})