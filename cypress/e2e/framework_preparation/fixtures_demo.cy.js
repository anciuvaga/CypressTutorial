describe('Fixture Demo', () => {
   
   let globalData
   
    // first possibility with function ().
    //before('Before Hook', function() {
    //     cy.fixture('example').then(data => {
    //         this.data = data
    //     })
    // })

    before('Before Hook', () => {
        cy.fixture("example").then((data) => {
           globalData = data
        })
    })

    it('should understand how to use fixtures for reading data', () => {
        cy.visit('https://www.letskodeit.com/login')
        cy.get('#email').type(globalData.testid1.username)
        cy.get('#login-password').type(globalData.test_id1.password)
    })
})