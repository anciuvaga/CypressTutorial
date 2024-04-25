describe('API Testing Demo', () => {
    let apiUrl = ''
    let accessToken ='' 
    let userId = ''


    before('Get access token', () => {
        cy.request({
            method: 'POST',
            url: 'http://coop.apps.symfonycasts.com/token',
            form: true,
            body: {
              'client_id': 'TestAutomationExpertPractice',
              'client_secret': 'a6315a1b61196cc6bb8106ea30536afc',
              'grant_type': 'client_credentials'
            }
        }).then(res => {
            cy.log(JSON.stringify(res))
            accessToken = res.body.access_token
            cy.log(accessToken)
            cy.request({
                method: 'GET',
                url: apiUrl + '/me',
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                } 
            }).then(res => {
                userId = res.body.id
                customElements.log('User Id ' + userId)
            })
        })
    })

    it('should unlock the barn - POST', () => {
        cy.request({
            method: 'POST', 
            url: apiUrl + '/' + userId + '/barn-unlock',
            headers: {
                Authorization: 'Bearer ' + accessToken
            }
        }).then(res => {
            cy.log(JSON.stringify(res))
            expect(res.status).to.be.eq(200)     
        })
    })

})