describe('API Testing Demo', () => {
    it('should validate get request', () => {
      cy.request({
        method: 'GET',
        url: 'https://gorest.co.in/public/v2/users',
        headers: {
            'authorization': 'Bearer 7712b6ebaedda0643bc39d9acbaa043a9d9c64a6d1b0cd89b26c51169ca86bf1' 
        }
      }).then(res => {
        cy.log(JSON.stringify(res))
        expect(res.status).to.be.eq(200)
        expect(res.body).has.length(10)
        expect(res.body[0]).has.property('name', 'Mani Pilla')
        expect(res.body[0]).not.have.property('address')
      })
    })
})