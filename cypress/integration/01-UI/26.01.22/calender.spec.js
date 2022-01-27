// is similar as a class
//class is a user defined data type
// class person {
//     constructor(fullname,age,lastname){
//         this.fullname=fullname,
//         this.age=age,
//         this.lastname=lastname
//     }
//     display(){
//         console.log('hello')
//     }
// }
// let asp= new person('akshay',25,'pardeshi')
// console.log(asp)
describe('verify the calender fun', () => {
    it('calende fun', () => {
        cy.visit('https://webdriveruniversity.com/Datepicker/index.html')
        let cal = new Date();
        cy.get('.input-group-addon').click()
        cal.setDate(cal.getDate() + 500)// 5/11/2023 hi navin date set keli ya nusar case lihane aahe
        // find current date
        let year = cal.getFullYear()//2022
        let month = cal.getMonth()//0--index of jan is 0 and dece is 11
        let day = cal.getDate()//27
        let textMonth = cal.toLocaleString('default', { month: "long" })
        //console.log([year,month,day])//2022 0 27
        //console.log(textMonth)// covert month num into text ,long means long ,short mens short

        function getYear(){
            cy.get('.datepicker-switch').first().then(function (el) {
                //cy.log(el.text())
                if(!el.text().includes(year)){
                    cy.get('.next').eq(0).click()
                    getYear()
                }
            }).then(function(){
                cy.get('.datepicker-switch').first().then(function (el) {
                    //cy.log(el.text())
                    if(!el.text().includes(textMonth)){
                        cy.get('.next').eq(0).click()
                        getYear()
                    }
                })

            })

        }
        function gateDate(){
            cy.get('.day').contains(day).click()
        }
        getYear()
        gateDate()


    })
})