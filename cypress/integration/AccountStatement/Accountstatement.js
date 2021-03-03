import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";

Given('The client admin is on the home page of Orbitclient application', () => {
    cy.visit('http://orbitclientui.test.vggdev.com', {
        retryOnNetworkFailure: true });
});

When('He enters his email as "crusio@yopmail.com" and his password as "P@ssw0rd1"', () => {
    cy.get(':nth-child(1) > .withIcon > .form-control').type("crusio@yopmail.com")
    cy.get(':nth-child(2) > .withIcon > .form-control').type("P@ssw0rd1")
});

And('the submit button is clicked', () => {
    cy.get(".btn").click({force:true})
});

And('client admin waits for 8000 milliseconds', () => {
    cy.wait(8000)
});

Then(/^the user is successfully logged into the application$/, function () {
    cy.get('.toast-success')
    cy.get('.toast-title').should("contain.text", "Welcome")
    cy.get('.toast-message').should("contain.text", "crusio@yopmail.com")
});

When('user clicks on the "Settings" module', () => {
    cy.get('.page-title').should("contain.text", "Overview")
    cy.wait(4000)
});

And('Clicks on "Business Account" module', () => {
    cy.get('a.navigation-link').eq(9).click({force:true})

});

And(/^Clicks on the 'View Statement' icon$/, function () {
    cy.get(':nth-child(1) > :nth-child(6) > [ngbtooltip="View Statement"]').click()
    cy.wait(3000)
});

When(/^user clicks on the calendar icon and goes to the previous month$/, function () {
    cy.get('#button-from > .far').click({force:true})
    cy.get('[tabindex="0"] > .btn-light').click()

});
And(/^selects a start date of 3rd February$/, function () {
    cy.get('#button-to > .far').click({force:true})
    cy.get('.date-range > :nth-child(1)').should("contain.text", "Start Date")
    cy.get(3000)
    cy.get('#button-from > .far').click()
    cy.get(3000)

});

When('user clicks on the calendar icon and goes to the previous month', () => {
    cy.get(':nth-child(1) > .btn > .ngb-dp-navigation-chevron').click()
    //cy.get('[tabindex="0"] > .btn-light').click()
    cy.wait(3000)
    cy.get('.date-range > :nth-child(2)').should("contain.text", "End Date")
    cy.wait(3000)
    cy.get('#button-to > .far').click()
    cy.wait(3000)
});

And(/^selects an end date of 27th February$/, function () {
    cy.get(':nth-child(1) > .btn > .ngb-dp-navigation-chevron').click({multiple: true})
    cy.get('[aria-label="Saturday, February 27, 2021"] > .btn-light').click()
});

And(/^clicks on the submit button$/, function () {
    cy.get(':nth-child(3) > .btn').click()
});

Then(/^an error message, "([^"]*)" is displayed$/, function () {
    cy.get('.toast-error').should("contain.text", "Bank account profiling not completed for account")
});