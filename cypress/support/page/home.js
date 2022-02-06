export class homePage{
   element={
          userName:"#txtUsername",
          userPass:"#txtPassword",
          button:"#btnLogin",
          forgetPassText:"#forgotPasswordLink",
          logo:"#divLogo > img",
          socialMedia:"#social-icons"

   }
    login(userName,userPass){
        cy.get(this.element.userName).type(userName)
        cy.get(this.element.userPass).type(userPass)
        cy.get(this.element.button).click()
        cy.url().should('include','dashboard')
    }

    validLogo(){
        cy.get(this.element.logo).should('be.visible')
    }
    validForgetPass(){
        cy.get(this.element.forgetPassText).should('be.visible')
        cy.get(this.element.forgetPassText).find('a').click()
        cy.url().should('include','requestPasswordResetCode')
    }

    validSocialMedia(){
        cy.get(this.element.socialMedia).children().should('have.length',4)
    }

   

}