describe('Click demo', () => {
    it('should understand various options of click method', () => {
        cy.visit('https://www.letskodeit.com/practice')

        // Click in the top of the element
        // cy.get('#opentab').click('top')

        //.click() accepts an x and y coordinate
        // cy.get('#opentab').click(2, 3).click(20, 20)

        //Ignore error checking
        // cy.get('#hide-textbox').click()
        // cy.get('#displayed-text').click({force:true})
        // cy.get('#displayed-text').click()

        // Click multiple elements
        cy.get('input[type="checkbox"][name="cars"]').click({'multiple': true})

        // Scroll Bahavior 
        cy.get('#mousehover').click({scrollBehavior: 'center'})


    })
})