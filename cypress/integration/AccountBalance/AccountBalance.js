import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";

Given(/^The client admin is on the home page of Orbitclient application$/, function () {
    cy.visit("http://orbitclientui.test.vggdev.com", {
        retryOneNetworkFailure: true,
    });
    cy.reload()
    cy.clearCookies({log: true})
    cy.clearLocalStorage({log: true})
});

When(/^He enters his email as "crusio@yopmail.com" and his password as "P@ssw0rd1"$/, function () {
    cy.get(':nth-child(1) > .withIcon > .form-control').type("crusio@yopmail.com");
    cy.get(':nth-child(2) > .withIcon > .form-control').type("P@ssw0rd1");
});

And(/^the submit button is clicked$/, function () {
    cy.get('.btn').click();
});

And (/^client admin waits for 10000 milliseconds$/, function () {
    cy.wait(10000);
});

Then('the user is logged into the application', () => {
    cy.get('[group="\'dashboard\'"] > .navigation-link').should("contain.text", "Dashboard")
    cy.reload()
    cy.wait(3000)
})

When('user clicks on the "Settings" module', () => {
    cy.get('body').should("contain.text", "Settings")
    cy.wait(4000)
});

And(/^Clicks on 'Business Account' module$/, function () {
    cy.get('a.navigation-link').eq(9).click({force:true})
});

And(/^Clicks on the 'View Balance' icon$/, function () {
    cy.get(':nth-child(1) > .sorting_1 > .btn').click()
    cy.wait(10000)
    cy.url().should('include', '/settings/business-accounts')
});
Then(/^the Current Balance is displayed$/, function () {
    cy.get('#modal-basic-title').should("contain.text", "Current Balance")
    cy.wait(7000)
    cy.get('.close > .ng-tns-c10-1').click()
    cy.get(':nth-child(3) > .nav-link > .fas').click()
    cy.get('.dropdown-menu > :nth-child(5) > span').click()
});