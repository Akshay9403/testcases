describe('to verify tabale element', () => {
    it('to calculate sum of table', () => {
        let sum = 0
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t01').find('tbody').children().each(function (el, index) {
            if (index != 0) {
                sum = sum + Number(el.children().last().text())
            }


        }).then(() => {
            cy.log(sum)
            expect(sum).to.eq(159)
        })
    })
    it('to cal sum of second table', () => {
        let sum = 0
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t02').find('tbody').children().each(function (el, index) {
            if (index != 0) {
                sum = sum + Number(el.children().last().text())
            }
        }).then(()=>{
            cy.log(sum)
            expect(sum).to.eq(163)
        })
    })
})