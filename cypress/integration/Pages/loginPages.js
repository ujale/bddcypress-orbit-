const orbitUrl = "http://orbitclientui.test.vggdev.com"
const emailField = ':nth-child(1) > .withIcon > .form-control'
const passwordField = ':nth-child(2) > .withIcon > .form-control'
const loginSubmitBtn = '.btn'
const dashboard = '[group="\'dashboard\'"] > .navigation-link'
const errorMessage = '.toast-title'


class loginPages{
    static visitUrl () {
        cy.visit (orbitUrl)
    }

    static enterLoginCred (email, password) {
        cy.get(emailField).type(email)
        cy.get(passwordField).type(password)
    }

        static clickSubmit () {
        cy.get(loginSubmitBtn).click()
    }

    static assertDashboard() {
        cy.get(dashboard).contains("Dashboard")
    }

    static errorMessage() {
        cy.get(errorMessage).contains('400')
    }


} export default loginPages