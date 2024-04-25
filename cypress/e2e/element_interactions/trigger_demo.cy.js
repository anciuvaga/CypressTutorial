describe('Trigger Demo', () => {
    it('should understand various options of trigger methods', () => {
        cy.visit('https://www.letskodeit.com/practice')

        //Trigger focus and click
        // cy.get('#hide-textbox').trigger('focus', 20, 40, {force:true})
        // cy.get('#hide-textbox').trigger('click', 20, 40, {force:true})

        // Trigger Mouseover
        cy.get('#mousehover').trigger('mouseover') // Could not work because mouseover was implemented using CSS, not JavaScript 
        cy.get('div.mouse-hover-content a[href="#top"]').click({force:true})

    })
} ) 