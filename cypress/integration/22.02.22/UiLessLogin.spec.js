/// <reference types="Cypress"/>

describe('to verify ui less login function', () => {
       it('verify ui less login',()=>{
        cy.request({
            method:"POST",
            url:"https://api.realworld.io/api/users/login",
            body:{"user": {"email": "akshaypardeshi47@gmail.com", "password": "Akshay@9403"}}
        }).then(function(res){
            let token=res.body.user.token
            localStorage.setItem('jwt',token)

            cy.visit('http://react-redux.realworld.io/')
            cy.contains('akshay').should('be.visible')
        })
       })
    // beforeEach(function () {
    //     cy.getandSetToken()
    // })
    // it('ui less login using custom cammand', () => {

    //     cy.visit('http://react-redux.realworld.io/')
    //     //cy.contains('akshay').should('be.visible')
    // })
})
