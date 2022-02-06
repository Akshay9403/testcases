// class person{
//     fullname="akshay pardeshi"
//     age=25
//     rollnu=351
//     displayname(){
//         console.log(this.fullname)
//     }
// }



// let asp=new person()
import{homePage} from '../../../support/page/home'

describe('verify all test sinaria of home page',()=>{
     let asp = new homePage()
    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })
    it('verify login ',()=>{
           asp.login('Admin','admin123')
    })
    it('verify logo ',()=>{
        asp.validLogo()
    })
    it('verify forget pass ',()=>{
        asp.validForgetPass()
    })
    it('verify social media  ',()=>{
        asp.validSocialMedia()
    })
})