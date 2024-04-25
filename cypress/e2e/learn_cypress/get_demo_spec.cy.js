describe('Get Method and CSS examples', () => {
    it('should learn get() method and some CSS examples', () => {
        cy.visit('https://www.letskodeit.com/practice')
        
        // Tag Name
        cy.get('button')

        // Id
        cy.get('#name')
        
        // Class Name
        cy.get('.inputs')

        //Atribute Value
        cy.get('[placeholder="Enter Your Name"]')

        //Class Value
        cy.get("[class='inputs displayed-class']")

        //Tag Name and Attribute Value
        cy.get('input[id="name"]:visible')

        //Tag Name and Multiple Attribute Value
        cy.get('input[id="name"][placeholder="Enter Your Name"]')
    })
})