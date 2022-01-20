describe('verify the read write operation',()=>{
    // it('verify write function',()=>{
    //     cy.writeFile('asp.txt','hey im akshay pardeshi')
    //     cy.writeFile('asp.txt','hey im test engineer')// overwrite problem then use append 
    // })
    // it('verify write function',()=>{
    //     cy.writeFile('asp.txt','hey im akshay pardeshi  \n')
    //     cy.writeFile('asp.txt','  hey im test engineer',{flag:'a+'})
    // })
    // it('verify right function',()=>{
    //     cy.readFile('asp.txt').should('exist')// check file is available or not
    //     cy.readFile('asp.txt').should('contain','test engineer')
    // })

    it('verify write function for creation of json file',()=>{
        cy.writeFile('cypress/fixtures/asp.json',{
            "fullname":"akshay pardeshi",
            "age":26,
            "address":"jalna"
        })
        
    })
    it.only('verify read function for creation of json file',()=>{
        cy.fixture('asp').then((response)=>{
           cy.log(response)
        })
    })
        

})