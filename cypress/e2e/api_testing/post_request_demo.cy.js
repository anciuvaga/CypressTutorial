import {util} from "../../support/utilities"

describe('API Testing Demo', () => {

    let globalData

    before('This is Before Hook', () => {
        cy.fixture('users_data.json').then( data => {
            globalData = data
        })
    } )


    it.skip('should validate post request', () => {
      cy.request({
        method: 'POST',
        url: 'https://gorest.co.in/public/v2/users',
        headers: {
            'authorization': 'Bearer 7712b6ebaedda0643bc39d9acbaa043a9d9c64a6d1b0cd89b26c51169ca86bf1' 
        },
        body:  {
            "name": "Mohana PillairDy",
            "email": "pillai_moEFhanaec@boredr.exampled",
            "gender": "female",
            "status": "inactive"
        }
      }).then(res => {
        cy.log(JSON.stringify(res))
        expect(res.status).to.be.eq(200)
        expect(res.body.name).to.be.eq('Andrei')
        expect(res.body.name).to.equal('Andrei')    
        expect(res.body.name).has.property('name', 'Andrei')
        expect(res.body).have.property('id')
      })
    })


    it('should validate post request - request variable', () => {
        const reqBody = {
             name: globalData.tid1.name,
             gender: globalData.tid1.gender,
             email: util.random_email(),
             status : globalData.tid1.status
        }

        cy.request({
          method: 'POST',
          url: 'https://gorest.co.in/public/v2/users',
          headers: {
              'authorization': 'Bearer 7712b6ebaedda0643bc39d9acbaa043a9d9c64a6d1b0cd89b26c51169ca86bf1' 
          },
          body: reqBody
        }).then(res => {
          cy.log(JSON.stringify(res))
          expect(res.status).to.be.eq(201)
          expect(res.body.name).to.be.eq(reqBody.name)
          expect(res.body.name).to.equal(reqBody.name)    
          expect(res.body.email).to.equal(reqBody.email)
          expect(res.body).have.property('id')
        })
      })
})