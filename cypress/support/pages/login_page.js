export class LoginPage {

    navigateToLogin() {
        cy.visit('https://www.letskodeit.com/login')
    } 

    enterEmailField(email) {
        cy.get('#email').type(email)
    }

    enterPasswordField(password) {
        cy.get('#login-password').type(password)
    }

    title() {
        cy.title()
    }

    clickLoginButton() {
        cy.get('#login').click()
    }

    loginIntoApp( email, password) {
        loginPage.enterEmailField(email)
        loginPage.enterPasswordField(password)
        loginPage.clickLoginButton()
    }

    verifyEmailRequiredError() {
        cy.get('div[class="form-group"] span[class="error"]').should('have.text', '6The email field is required.')

    }

    verifyInvalidCredentialsError() {
        cy.get('#incorrectdetails').should('have.text', 'Incorrect login details. Please try again.')
    }
}

export const loginPage = new LoginPage()