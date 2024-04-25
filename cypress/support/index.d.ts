declare namespace Cypress {
    interface Chainable<Subject> {
        /**
         * Log in via UI
         * @example
         * cy.login(email: string, password: string)
         */
        login(email: string, password: string): Chainable<any>

         /**
         * Search a course using the search field
         * @example
         * cy.searchCourse(email: string, password: string)
         */
         searchCourse(category: string, courseString: string): Chainable<any>

         /**
         * Logout via UI
         * @example
         * cy.logout()
         */
         logout(): Chainable<any>

        /**	 
        * Log in via API
        * @example
        * cy.apiLogin()
        */
        apiLogin(): Chainable<any>

        /**
        * Wait for viewer to load
        * @example
        * cy.waitForFirstLoad()
        */
        waitForFirstLoad(): Chainable<any>

        /**
        * Log out
        * @example
        * cy.logout()
        */
        logout(): Chainable<any>

    }
}