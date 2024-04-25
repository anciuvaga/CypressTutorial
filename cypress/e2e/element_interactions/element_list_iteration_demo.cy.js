describe('Element List Iteration', () => {
    it('should understand for each loop and element list iteration', () =>{
        cy.visit('https://www.letskodeit.com/practice')

        cy.get('[class^="btn-style class1"]').each((el, index, $list) => {
            const itemText = el.text().trim()
            cy.wrap(el).should('contain', itemText)
        })

        cy.get('#autosuggest').then(autoListInput => {
            cy.wrap(autoListInput).type('Automation')
            
            cy.get('[class="ui-corner-all"]').each((el, index, $list) => {
                const itemText2 = el.text().trim()
                cy.wrap(el).should('contain', itemText2)

                if(index < 8) {
                    cy.wrap(el).should('contain', itemText2)
                }
            }).then(($list) => {
                expect($list).to.have.length(8)
            })
        })
        
    })
})