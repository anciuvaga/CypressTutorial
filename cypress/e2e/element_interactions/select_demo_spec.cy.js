describe('Select Demo', () => {
    it('should understand various options of select methods', () => {
        cy.visit('https://www.letskodeit.com/practice')

        // Select Value
        cy.get('#carselect').select('benz')

        //Select Values
        cy.get('#multiple-select-example').select(['apple', 'orange'])

        //Select Values with Options
        cy.get('#carselect').select('bwm', {force: true})


    })
})