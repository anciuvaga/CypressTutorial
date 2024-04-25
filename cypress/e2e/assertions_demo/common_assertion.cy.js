describe('Common Assertion', () => {
    it('should undestand default and common assertions in cypress', () => {

        // Length: Verify the number of elements:
        cy.get('element').should('have.length', 20)
        
        //Class: Verify whether the element has the expected class:
        cy.get('element').should('have.class', 'class name')
        cy.get('element').should('not.have.class', 'disabled')

        //Verify element has a specific value: 
        cy.get('element').should('have.value', 'value string')

        //Verify element has an expected text:
        cy.get('element').should('contain', 'text value')
        cy.get('element').should('not.contain', 'text value') 
        cy.get('element').should('have.text', 'text value')
        cy.get('element').should('include.text', 'text value')


        // Verify element is visible or not
        cy.get('element').should('be.visable')
        cy.get('element').should('not.be.visible')

        // Verify element does not exists in the DOM
        // This is important and a good interview question
        cy.get('#loadingicon').should('not exist')


        //Verify state of radiobuttons and checkboxes:
        cy.get("element").should("be.checked")
        cy.get('element').should('not.be.checked')

        //Verify CSS characteristics of element:
        cy.get('element').should('have.css', 'name')
        cy.get('element').should('not.have.css', 'display', 'hidden') 

    })
})