describe('Alias and Get Command - API Testing Demo', () => {

    beforeEach('Initiate the main URL', () => {
        cy.request({
            method: "GET",
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'authorization': 'Bearer 7712b6ebaedda0643bc39d9acbaa043a9d9c64a6d1b0cd89b26c51169ca86bf1' 
            }
        }).as('users')
    })


    it('should use alias to verify headers', () => {
      cy.get('@users').its('headers')
      .its('content-type')
      .should('include', 'application/json; charset=utf-8')
    })

    it('should use alias to verify the status', () => {
        cy.get('@users').its('status')
        .should('equals', 200)
    })

    it('should use alias to verify the name', () => {
        cy.get('@users').its('body').then(res =>{
            expect(res[0]).have.property('name', 'Mohana Pillai')
        })
    })

})