describe('Check and Uncheck Demo', () => {
    it('should understand various options of check and uncheck methods', () => {
        cy.visit('https://www.letskodeit.com/practice')

        //Checkboxes
        //Check all checkboxes
        cy.get('div#checkbox-example-div input[type="checkbox"]').check()

        //Uncheck all chackboxes
        cy.get('div#checkbox-example-div input[type="checkbox"').uncheck()

        //Check bwm checkbox
        cy.get('div#checkbox-example-div input[type="checkbox"').check('bmw')

        //Uncheck bwm checkbox
        cy.get('div#checkbox-example-div input[type="checkbox"').uncheck('bmw')

        //Check bmw and benz checkboxes
        cy.get('div#checkbox-example-div input[type="checkbox"').check(['bmw', 'benz'])

        //Uncheck bmw and benz checkboxes
         cy.get('div#checkbox-example-div input[type="checkbox"').uncheck(['bmw', 'benz'])


        //Radio Buttons
        //Check all radiobuttons
        cy.get('div#radio-btn-example input[type="radio"]').check()

        //Check bwm radiobutton
        cy.get('div#radio-btn-example input[type="radio"]').check('bmw')
    })
})