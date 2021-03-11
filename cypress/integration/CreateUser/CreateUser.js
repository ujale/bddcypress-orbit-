import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
import loginPages from "../Pages/loginPages";

Given("The client admin is on the home page of orbitclient application", () => {
    loginPages.visitUrl()
});

When(/^He enters his email as "([^"]*)" and his password as "([^"]*)"$/, function (email, password) {
    loginPages.enterLoginCred(email, password)

});

And("the submit button is clicked", () => {
    cy.get('.btn').click();
});

When(/^client admin waits for (\d+) milliseconds$/, function () {
    cy.wait(10000)
});

Then(/^the user is logged into the application$/, function () {
    loginPages.assertDashboard()
    cy.wait(8000)
});
When(/^user clicks on the 'Settings' module$/, function () {
    cy.get('body')
    cy.contains('Settings')
});
When(/^Clicks on 'Manage User' module$/, function () {
    cy.get('a.navigation-link').eq(10).click({force:true})
    cy.wait(7000)
});
When(/^Clicks on the 'Add User' tab$/, function () {
    cy.get('.card-body > .btn').click()
    cy.wait(7000)
});
Then(/^fills in "([^"]*)" as First name, "([^"]*)" as Last name, "([^"]*)" as Email, "([^"]*)" as Password and "([^"]*)" as Confirm password$/, function () {
    cy.get(':nth-child(1) > .form-control').type("Frand")
    cy.get(':nth-child(2) > .form-control').type("New")
    cy.get(':nth-child(3) > .form-control').type("frand@yopmail.com")
    cy.get(':nth-child(4) > .form-control').type("P@ssw0rd")
    cy.get('#confirmPassword').type("P@ssw0rd")
});
And ('Clicks on the submit button', () => {
    cy.get('div.ng-tns-c14-2 > .btn').click({force:true})
    cy.wait(2000)
});

Then(/^An error message is displayed$/, function () {
   cy.get('.toast-message')
});
When('Client admin clicks on the profile icon, a dropdown is displayed', () => {
    cy.get(':nth-child(3) > .nav-link > .fas').click()
});

Then(/^He clicks on "([^"]*)" which logs him out of the application$/, function () {
    cy.get('.dropdown-menu > :nth-child(5)').should("contain.text", "Signout")
    cy.get('.dropdown-menu > :nth-child(5) > span').click()
});