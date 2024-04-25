describe('Custom Command Practical Demo', () => {
    
    it('should use custom command to login', () => {
        cy.visit('http://www.letskodeit.com/login')

        cy.login('test@email', "password")
    })
    
    it.only('should use custom command to search', () => {
        cy.visit('http://www.letskodeit.com/courses')
        cy.searchCourse('All', "java")
    })

})