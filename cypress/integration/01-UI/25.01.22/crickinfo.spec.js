describe('verify crickinfo table sum', () => {
    it('verify sum of table', () => {
        let sum = 0
        cy.visit('https://www.espncricinfo.com/series/world-cup-super-league-2020-2022-23-1227837/afghanistan-vs-netherlands-3rd-odi-1295183/full-scorecard')
        cy.get('table[class="table batsman"]').first().find('tbody').find('.font-weight-bold').each(function (el) {
            //cy.log(el.text())
            sum = sum + Number(el.text())


        }).then(() => {
            expect(sum).to.eq(254)
        })
    })


    it.only('verify sum of table', () => {
        let sum = 0
        cy.visit('https://www.espncricinfo.com/series/world-cup-super-league-2020-2022-23-1227837/afghanistan-vs-netherlands-3rd-odi-1295183/full-scorecard')
        cy.get('table[class="table batsman"]').eq(1).find('tbody').find('.font-weight-bold').each(function (el) {
            //cy.log(el.text())
            sum = sum + Number(el.text())


        }).then(() => {
            expect(sum).to.eq(179)
        })
    })
})