import { util } from "../../support/utilities"

describe('API Testing Demo', () => {

    let apiUrl = 'https://gorest.co.in/public/v2/users'
    let accessToken = 'Bearer 7712b6ebaedda0643bc39d9acbaa043a9d9c64a6d1b0cd89b26c51169ca86bf1'
    let globalData

    before('This is Before Hook', () => {
        cy.fixture('users_data.json').then(data => {
            globalData = data
        })
    })


    it('should validate post request - request variable', () => {
        const reqBody = {
            name: globalData.tid1.name,
            gender: globalData.tid1.gender,
            email: util.random_email(),
            status: globalData.tid1.status
        }

        cy.request({
            method: 'POST',
            url: apiUrl,
            headers: {
                'authorization': accessToken
            },
            body: reqBody
        }).then(res => {
            expect(res.status).to.equal(201)
            const userId = res.body.id;

            cy.request({
                method: 'GET',
                url: apiUrl + '/' + userId,
                headers: {
                    authorization: accessToken
                }
            })
        }).then(res => {
            expect(res.body.status).equal(reqBody.status)
            expect(res.body.gender).equal(reqBody.gender)
            expect(res.body.email).equal(reqBody.email)
            expect(res.body.name).equal(reqBody.name)
        })
    })
})