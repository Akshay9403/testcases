// 22.01.22  promise eg
// let one=new Promise(function(resolve,reject){
//     let x=10
//     let y=11
//     if(x==y){
//         resolve('im akshay')
//     }
//     else{
//         reject('im engineer')
//     }
// }).then(function(abc){
//     console.log(abc)
// }).catch(function(xyz){
//     console.log(xyz)
// })//out--im engineer
// //---------------------
// let one=new Promise(function(resolve,reject){
//     let x=10
//     let y=10
//     if(x==y){
//         resolve('im akshay')
//     }
//     else{
//         reject('im engineer')
//     }
// }).then(function(abc){
//     console.log(abc)
// }).catch(function(xyz){
//     console.log(xyz)
// })//out--im akshay

// let one = new Promise(function (resolve, reject) {
//     let x = 10
//     let y = 10
//     if (x == y) {
//         resolve(' im akshay')
//     }
//     else {
//         reject('im engineer')
//     }
// })
// one.then(function (abc) {
//     console.log(abc)
//     return "pardeshi"
// }).then(function (a) {
//     console.log(a)
//     return 'punekar'
// }).then(function(b){
//     console.log(b)
// })

// let one = new Promise(function (resolve, reject) {
//     let x = 10
//     let y = 100
//     if (x == y) {
//         resolve(' im akshay')
//     }
//     else {
//         reject('im engineer')
//     }
// })
// one.catch(function (abc) {
//     console.log(abc)
//     return "pardeshi"
// }).then(function (a) {
//     console.log(a)
//     return 'punekar'
// }).then(function(b){
//     console.log(b)
// })

// call back hell function in js

describe('validate api post', () => {
    it('verify grt req and count number of user ', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2'
        }).then(function (response) {
            //cy.log(response)
            expect(response.body.per_page).to.equal(response.body.data.length)
            expect(response.body.per_page).to.equal(6)
        })
    })
    it('gel all object data with keys ', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2'
        }).then(function (response) {
            response.body.data.forEach(element => {
                expect(element).to.have.property('email')//single - all email get
                expect(element).to.have.property('id')
                expect(element).to.have.property('avatar')
                expect(element).to.have.property('last_name')
                expect(element).to.have.property('first_name')// it is lengthi process
            });
        })
    })
    it('gel all object data with keys ', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2'
        }).then(function (response) {
            response.body.data.forEach(element => {
                expect(element).to.have.all.keys('email', 'first_name', 'last_name', 'id', 'avatar')

            });
        })
    })
    it('single value compare  ', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2'
        }).then(function (response) {
            expect(response.body.data[0]['email']).to.equal('michael.lawson@reqres.in')
            expect(response.body.data[1]['email']).to.equal("lindsay.ferguson@reqres.in")
        })
    })
    it.only('response body for usercreate api ', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: {
                "name": "akshay",
                "job": "tester"
            }
        }).then(function (response) {
            expect(response.status).to.equal(201)
            expect(response.body).to.have.all.keys('id','name','job','createdAt')
            expect(response.duration).to.be.within(100,1000)
            expect(response.duration).is.above(100)
            //expect(response.duration).isAtLeast(100,1000)
            expect(response.duration).to.below(1000)
            //expect(response.duration).to.is.Number()

        })
    })
})