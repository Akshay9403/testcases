//alert 3 type  1]window.alert(),2]window.confirm(),3]window.prompt()
//alert can not show in cypress 
//whose alert cannot inspect then it is process of cypess 
//cy.on use for listien in windows alert

describe('verify alert fun', function () {
    it('alert fun one', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button1').click()
        cy.on('window:alert', (text) => {
            //cy.log(text)
            expect(text).to.eq('I am an alert box!')
        })

    })
    it('alert fun two', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button4').click()
        cy.on('window:confirm', (text) => {
            //cy.log(text)
            expect(text).to.eq('Press a button!')
            return true
        })
        cy.contains('You pressed OK!')
    })
    it('alert fun three', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button4').click()
        cy.on('window:confirm', (text) => {
            //cy.log(text)
            expect(text).to.eq('Press a button!')
            return false
        })
        cy.contains('You pressed Cancel!')
    })
    it('alert fun 4', () => {

        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button2').click()
        cy.get('.modal-title').should('have.text', 'It’s that Easy!!  Well I think it is.....')
        cy.contains('Close').click()
        cy.get('.modal-title').should('not.be.visible')
    })
    it('alert fun 5', () => {

        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button3').click()
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        
        cy.wait(10000)
        cy.get('#button1').click()
        cy.get('.modal-title').should('be.visible')
        cy.get('.modal-title').should('have.text','Well Done For Waiting....!!!')
        cy.get('.modal-footer > .btn').click()
        cy.get('.modal-title').should('not.be.visible')
    })

    it.only('verify alerts ',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.contains('Click for JS Alert').click()
        cy.on('window:alert',(str)=>{
            expect(str).to.eq('I am a JS Alert')
        })
        cy.get('#result').should('be.visible')


    })
    it.only('verify confirm click ok',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm',(str)=>{
            expect(str).to.eq('I am a JS Confirm')
            return true
        })
        cy.get('#result').should('be.visible')
        cy.get('#result').should('have.text','You clicked: Ok')
    })
    it.only('verify confirm click cancel',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm',(str)=>{
            expect(str).to.eq('I am a JS Confirm')
            return false
        })
        cy.get('#result').should('be.visible')
        cy.get('#result').should('have.text','You clicked: Cancel')
    })
    it.only('verify promt click ok',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        
        cy.window().then((el)=>{
            cy.stub(el,'prompt').returns('hello im new')
        })
        cy.contains('Click for JS Prompt').click()
        cy.get('#result').should('contain','hello im new')
    })
    it.only('verify promt click ok',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        
        cy.window().then((el)=>{
            cy.stub(el,'prompt').returns(true)
            cy.contains('Click for JS Prompt').click()
        })
        
        cy.get('#result').should('have.text','You entered: true')
    })
    it.only('verify promt click ok',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        
        cy.window().then((el)=>{
            cy.stub(el,'prompt').returns(false)
            cy.contains('Click for JS Prompt').click()
        })
        
        cy.get('#result').should('have.text','You entered: false')
    })
})