describe('verify intercept function', () => {
    it.skip('verify get request', () => {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('getRequest')
        cy.visit('https://example.cypress.io/commands/network-requests');
        cy.contains('Get Comment').click()
        cy.wait('@getRequest').then(({ response, request }) => {
            //cy.log(response.body.body)
            cy.get('.network-comment').then((el) => {
                expect(el.text()).to.equal(response.body.body)
            })
        })
    })

    it.skip('verify get request', () => {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('getRequest')
        cy.visit('https://example.cypress.io/commands/network-requests');
        cy.contains('Get Comment').click()
        cy.wait('@getRequest').then(({ response, request }) => {
            //cy.log(response)
            expect(response.statusCode).to.equal(200)
            cy.get('.network-comment').should('have.text', response.body.body)
        })
    })

    it.skip('verify stubbing', () => {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }, {
            body: {
                "postId": 1,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "akshaypardeshi@gmail.com",
                "body": "14151217"
            }
        }).as('getRequest')
        cy.visit('https://example.cypress.io/commands/network-requests');
        cy.contains('Get Comment').click()
        cy.wait('@getRequest').then(({ response, request }) => {
            //cy.log(response)
            cy.get('.network-comment').should('have.text', response.body.body)
        })
    })// mala prateck veles alag alg deta ke sath validate karana he to me fixture me save karke karunga

    it.skip('verify stubbing from feature folder', () => {

        cy.fixture('intercept').then((el1) => {
            //cy.log(el1)
            cy.intercept({
                method: "GET",
                url: "https://jsonplaceholder.cypress.io/comments/1"
            }, {
                body: el1[0] // only one element
            }).as('getRequest')
            cy.visit('https://example.cypress.io/commands/network-requests');
            cy.contains('Get Comment').click()
            cy.wait('@getRequest').then(({ response, request }) => {
                //cy.log(response)
                cy.get('.network-comment').should('have.text', response.body.body)
            })
        })


    })
    it('verify stubbing from feature folder', () => {

        cy.fixture('intercept').then((el1) => {
            //cy.log(el1)
            el1.forEach(element => {
                cy.intercept({
                    method: "GET",
                    url: "https://jsonplaceholder.cypress.io/comments/1"
                }, {
                    body: element
                }).as('getRequest')
                cy.visit('https://example.cypress.io/commands/network-requests');
                cy.contains('Get Comment').click()
                cy.wait('@getRequest').then(({ response, request }) => {
                    //cy.log(response)
                    cy.get('.network-comment').should('have.text', response.body.body)
                })

            });


        })


    })
    it('verify the post request', () => {
        cy.intercept({
            method: "POST",
            url: "https://jsonplaceholder.cypress.io/comments"
        }, {
            statusCode: 404
        }).as('postRequest')

        cy.visit('https://example.cypress.io/commands/network-requests');
        cy.contains('Post Comment').click()
        cy.wait('@postRequest').then(({response})=>{
            //cy.log(response)
            expect(response.statusCode).to.equal(404)
            expect(response.StatusCode).to.equal(201)
        })
    })// front end ne code lihala ahe ki 201 ala tar ch post succesfull hoan
    it.only('verify the post request', () => {
        cy.intercept({
            method: "POST",
            url: "https://jsonplaceholder.cypress.io/comments"
        }, {
            statusCode: 201
        }).as('postRequest')

        cy.visit('https://example.cypress.io/commands/network-requests');
        cy.contains('Post Comment').click()
        cy.wait('@postRequest').then(({response})=>{//{} is very imp --undefined error ginen
            //cy.log(response)
            expect(response.statusCode).to.equal(201)
            cy.get('.network-post-comment').should('be.visible')
        })
    })
    it.only('verify the post request', () => {
        cy.intercept({
            method: "POST",
            url: "https://jsonplaceholder.cypress.io/comments"
        }, {
            statusCode: 404
        }).as('postRequest')

        cy.visit('https://example.cypress.io/commands/network-requests');
        cy.contains('Post Comment').click()
        cy.wait('@postRequest').then(()=>{//{} is very imp --undefined error ginen
            //cy.log(response)
            //expect(response.statusCode).to.equal(404)
            cy.get('.network-post-comment').should('not.be.visible')
        })
    })
})


