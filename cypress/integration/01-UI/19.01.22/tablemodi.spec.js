describe('to verify tabale element', () => {
    function caltab(id,expectedVal){
        let sum = 0
        cy.get(`#${id}`).find('tbody').children().each(function (el, index) {
            if (index != 0) {
                sum = sum + Number(el.children().last().text())
            }
        }).then(() => {
            expect(sum).to.eq(expectedVal)
        })
    }
    beforeEach(function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    })
    it('to calculate sum of table', () => {
    
        caltab('t01',159)
    })
    it('to cal sum of second table', () => {
        
        caltab('t02',163)
    })
})