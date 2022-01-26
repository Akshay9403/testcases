describe('to verify api function', () => {
    it('to verify list of user GET', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2'
        }).then(function (response) {
            //cy.log(response)
            expect(response.status).to.eq(200)// chai assertion eq()
        })
    })
    it('to verify post req creat', () => {
        cy.request({
            method: "post",// small and capital latter not pro
            url: "https://reqres.in/api/users",//"",'' are not problem
            body: {
                "name": "akshay",
                "job": "tester"// is also called payload
            }//body-- payload
        }).then(function (response) {
            expect(response.status).to.equal(201)
        })
    })
    it('to verify put req update', () => {
        cy.request({
            method: "put",
            url: "https://reqres.in/api/users",
            body: {
                "name": "akshaypardeshi",
                "job": "become tester engineer"
            }
        }).then(function(asp){
            expect(asp.status).to.eq(200)
        })

    })
    it.only('to verify delete req', () => {
        cy.request({
            method: "delete",
            url: "https://reqres.in/api/users",
        }).then(function(asp){
            expect(asp.status).to.eq(204)
        })

    })
})