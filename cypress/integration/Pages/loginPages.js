const orbiturl = "http://orbitclientui.test.vggdev.com"
const emailField = ':nth-child(1) > .withIcon > .form-control'
const passwordField = ':nth-child(2) > .withIcon > .form-control'
const loginSubmitBtn = '.btn'
const dashboard = '.navbar-brand-logo'
const errorMessage = '.toast-title'


class loginPages{
    static visitUrl () {
        cy.visit (orbiturl)
    }

    static enterLoginCred (email, password) {
        cy.get(emailField).type(email)
        cy.get(passwordField).type(password)
    }

        static clickSubmit () {
        cy.get(loginSubmitBtn).click()
    }

    static assertDashboard() {
        cy.get(dashboard).contains("orbit")
    }

    static errorMessage() {
        cy.get(errorMessage).should('be.visible')
    }

} export default loginPages