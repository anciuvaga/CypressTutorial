describe('Hooks Demo', () => {
    
    // before() hook
    // It runs befi=ore starting  the first test, only once before any test starts

    before('This is the Before Hook', () => {
        cy.log('Before All Tests')
    })

    // after() Hook
    // It runs after completing all tests, only once after completing all tests
    before('This is the After Hook', () => {
        cy.log('After All Tests')
    })


    //beforeEach() Hook
    // It runs before every test
    beforeEach('This is the BeforeEach Hook', () => {
        cy.log('Before All Tests')
    })


    //AfterEach() Hook()
    //It runs after every test
    afterEach('This is the AfterEach Hook', () => {
        cy.log('Before All Tests')
    })

    it('Test 1', () => {
        cy.log('Test 1')
    })

    
    it('Test 2 ', () => {
        cy.log('Test 2')
    })
})