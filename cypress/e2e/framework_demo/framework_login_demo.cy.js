import { loginPage } from "../../support/pages/login_page"

describe('No Framework Test Suite', () => {

    let globalData;

    before('Before Hook', () => {
        cy.fixture('login_data').then(data => {
            globalData = data
        })
    })

    beforeEach('BeforeEach Hook', () => {
        loginPage.navigateToLogin()
    })
    
    it('should login to app using valid credentials', () => {
        cy.login(globalData.testid1.username, globalData.testid1.password)
        cy.logout()
    })

    it('should not login to app using empty username', () => {
        loginPage.loginIntoApp(globalData.testid2.username, globalData.testid2.password)
        loginPage.verifyEmailRequiredError()
    })

    it('should not login to app using invalid username/password combination', () => {
        loginPage.loginIntoApp(globalData.testid3.username, globalData.testid3.password)
        loginPage.verifyInvalidCredentialsError()
    })
}) 