import{Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";

Given(/^User is on the orbit client homepage$/, function () {
    cy.visit("http://orbitclientui.test.vggdev.com", {
    retryOneNetworkFailure: true,
    });

});
When(/^User clicks on the 'Sign up' link$/, function () {
    cy.contains('Sign Up').click()

});
Then(/^Fills the sign up form with valid details$/, function () {
    cy.get('strong')
    cy.wait(3000)
    cy.get(':nth-child(1) > app-input > .form-group > .withIcon > #name').type("kenee@yopmail.com")
    cy.get(':nth-child(2) > app-input > .form-group > .withIcon > #name').type("Lene")
    cy.get(':nth-child(3) > app-input > .form-group > .withIcon > #name').type("Qene")
    cy.get(':nth-child(4) > app-input > .form-group > .withIcon > #name').type("EMMNEE")
    cy.get(':nth-child(5) > .withIcon > .form-control').type("P@ssw0rd")
    cy.get(':nth-child(6) > .withIcon > .form-control').type("P@ssw0rd")

});
And(/^Clicks on the submit button$/, function () {
    cy.get('.btn').click({force:true})
    cy.wait(4000)

});
Then(/^User will see a pop up message stating that the email already exists$/, function () {
    cy.get('.toast-error').should("contain.text", 'kenee@yopmail.com already exist' )

});