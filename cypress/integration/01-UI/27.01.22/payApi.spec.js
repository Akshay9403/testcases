describe('verify paypal reqest', () => {
    let token = ""
    it('first get token ', () => {
        cy.request({
            method: "POST",
            url: "https://api-m.sandbox.paypal.com/v1/oauth2/token",
            headers: {
                Authorization: "Basic QWIydjJ5UV9nTkJpS2VTQnRYWEh6SjJpQWZqX2NaS3ZwMnplb1VUeEd0bjI4eWVzWEhJS2NNdDNGOURfeHpEU1daTDljdTQ1aEJhOFh0NHE6RUlqYjd3M3o3VDdsRUJTb3hLbWg3RFJrSEVkdkhpU0xWSlItMkJETTg2bjE3aURfazhHR0Y3YmZVM2RkSGdCRElwc0pUMGpjM3AyRmJYX04="
            },
            body: {
                grant_type: "client_credentials"
            },
            form: true
        }).then(function (response) {
            //cy.log(response)// get object
            token = response.body.access_token
        })
    })
    it('veify post re', () => {
        cy.request({
            method: "POST",
            url: "https://api-m.sandbox.paypal.com/v2/checkout/orders",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: {

                "intent": "CAPTURE",
                "purchase_units": [
                    {
                        "amount": {
                            "currency_code": "USD",
                            "value": "100.00"
                        }
                    }
                ]

            }
        }).then(function(el){
            //cy.log(el)
            expect(el.status).to.equal(201)
        })
    })
})