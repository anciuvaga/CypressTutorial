import { util } from "../../support/utilities"

describe('API Testing Demo', () => {

    let apiUrl = Cypress.env('apiUrl')
    let accessToken = Cypress.env('accessToken')
    let globalData
    let userId;
    let userEmail;

    before('This is Before Hook', () => {
        cy.fixture('users_data.json').then(data => {
            globalData = data
            userEmail = util.random_email()
            const reqBody = {
                name: globalData.tid1.name,
                gender: globalData.tid1.gender,
                email: userEmail,
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
                userId = res.body.id;
            })
        })
    })

    it('should validate get request', () => {
        cy.request({
            method: 'GET',
            url: apiUrl + '/' + userId,
            headers: {
                authorization: accessToken
            }
        }).then(res => {
            expect(res.body.status).equal(globalData.tid1.status)
            expect(res.body.gender).equal(globalData.tid1.gender)
            expect(res.body.email).equal(userEmail)
            expect(res.body.name).equal(globalData.tid1.name)
        })
    })


    it('should validate put request', () => {

        const userEmail = util.random_email()

        const putReqBody = {
            name: globalData.tid2.name,
            gender: globalData.tid2.gender,
            email: userEmail,
            status: globalData.tid2.status
        }

        cy.request({
            method: 'PUT',
            url: apiUrl + '/' + userId,
            headers: {
                authorization: accessToken
            },
            body: putReqBody
        }).then(res => {
            expect(res.body.status).equal(putReqBody.status)
            expect(res.body.gender).equal(putReqBody.gender)
            expect(res.body.email).equal(putReqBody.email)
            expect(res.body.name).equal(putReqBody.name)
        })
    })

    it('should validate delete request', () => {
        cy.request({
            method: 'DELETE',
            url: apiUrl + '/' + userId,
            headers: {
                authorization: accessToken
            }
        }).then(res => {
            expect(res.status).equal('204')
        })
    })
})