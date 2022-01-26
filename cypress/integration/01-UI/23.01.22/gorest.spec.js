describe('verify apis of gorest', () => {
    function generateemail() {
        let chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        let string = '';
        for (let ii = 0; ii < 15; ii++) {
            string += chars[Math.floor(Math.random() * chars.length)];
        }
        return string + '@gmail.com';
    }

    it('verify the user creat', () => {
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v1/users',
            headers: {
                Authorization: 'Bearer 561a4bc2ee69e966c6ea0cb14261c965c6481a21455f3f54a51e69a394da6a80',
            },
            body: {

                "name": "akshay pardeshi",
                "email": generateemail(),
                "gender": "male",
                "status": "inactive"
            }
        }).then(function (respo) {
            expect(respo.status).to.equal(201)
            expect(respo.body.data).to.have.property('id')
            return respo.body.data['id']
        }).then(function(id){
            cy.request({
                method:'GET',
                url:`https://gorest.co.in/public/v1/users/${id}`,
                headers: {
                    Authorization: 'Bearer 561a4bc2ee69e966c6ea0cb14261c965c6481a21455f3f54a51e69a394da6a80',
                }
            }).then(function(asp){
                cy.log(asp)
            })
        })

    })
})


