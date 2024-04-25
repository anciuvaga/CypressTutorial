import { util } from "../../support/utilities"

describe('API Testing Demo', () => {

    let apiUrl = 'https://gorest.co.in/public/v2/users'
    let accessToken = 'Bearer 7712b6ebaedda0643bc39d9acbaa043a9d9c64a6d1b0cd89b26c51169ca86bf1'
    let globalData
    let userId;

    before('This is Before Hook', () => {
        cy.fixture('users_data.json').then(data => {
            globalData = data
        })
    })


    // it('should validate post request', () => {

    //     const userEmail = util.random_email()        
    //     const reqBody = {
    //         name: globalData.tid1.name,
    //         gender: globalData.tid1.gender,
    //         email: userEmail,
    //         status: globalData.tid1.status
    //     }

    //     const putReqBody = {
    //         name: globalData.tid2.name,
    //         gender: globalData.tid2.gender,
    //         email: userEmail,
    //         status: globalData.tid2.status
    //     }

    //     cy.request({
    //         method: 'POST',
    //         url: apiUrl,
    //         headers: {
    //             'authorization': accessToken
    //         },
    //         body: reqBody
    //     }).then(res => {
    //         expect(res.status).to.equal(201)
    //         const userId = res.body.id;

    //         cy.request({
    //             method: 'PUT',
    //             url: apiUrl + '/' + userId,
    //             headers: {
    //                 authorization: accessToken
    //             },
    //             body: putReqBody
    //         })
    //     }).then(res => {
    //         expect(res.body.status).equal(putReqBody.status)
    //         expect(res.body.gender).equal(putReqBody.gender)
    //         expect(res.body.email).equal(putReqBody.email)
    //         expect(res.body.name).equal(putReqBody.name)
    //     })
    // })

    it('should validate post request', () => {

        const userEmail = util.random_email()        
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