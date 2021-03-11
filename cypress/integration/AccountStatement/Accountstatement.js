import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";

Given('The client admin is on the home page of Orbitclient application', () => {
    cy.visit('http://orbitclientui.test.vggdev.com', {
        retryOnNetworkFailure: true });
    cy.reload()
    cy.clearCookies({log: true})
    cy.clearLocalStorage({log: true})
});

When('He enters his email as "stellar@yopmail.com" and his password as "P@ssw0rd1"', () => {
    cy.get(':nth-child(1) > .withIcon > .form-control').type("stellar@yopmail.com")
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
    cy.get('.toast-message').should("contain.text", "stellar@yopmail.com")
});

When('user clicks on the "Settings" module', () => {
    cy.reload()
    cy.get('.page-title').should("contain.text", "Overview")
    cy.wait(3000)
});

And('Clicks on "Business Account" module', () => {
    cy.get('a.navigation-link').eq(9).click({force:true})

});

And(/^Clicks on the 'View Statement' icon$/, function () {
    cy.get(':nth-child(1) > :nth-child(6) > [ngbtooltip="View Statement"]').click()
    cy.wait(3000)
    cy.url().should('include', '/settings/business-accounts')
});

When(/^user clicks on the calendar icon under start date and goes to the previous month$/, function () {
    cy.get('.modal-header').should('include.text', 'Statement')
    cy.get(':nth-child(1) > .form-group').should('include.text', 'Start Date')
    cy.get('#button-from > .far').click()
    cy.get(':nth-child(1) > .btn > .ngb-dp-navigation-chevron').click()


});
And(/^selects a start date$/, function () {
    cy.get('[tabindex="0"] > .btn-light').click()

});
When(/^user clicks on the calendar icon under end date and goes to the previous month$/, function () {
    cy.get('.date-range > :nth-child(2)').should('contain.text', 'End Date')

});
And(/^selects an end date$/, function () {
    cy.get('#button-to > .far').click()
    cy.get(':nth-child(1) > .btn > .ngb-dp-navigation-chevron').click()
    cy.get('[aria-label="Sunday, February 28, 2021"] > .btn-light').click()

});
And(/^clicks on the submit button$/, function () {
    cy.get(':nth-child(3) > .btn').click()
});
Then(/^a table is with the account statement is displayed$/, function () {
    // cy.get('#DataTables_Table_4').should('contain.text', '')
    // cy.get(':nth-child(4) > .btn').should('be.visible').and("include.text", 'Export')
});