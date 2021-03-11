import {Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("The client admin is on the home page of orbitclient application", () => {
    cy.visit("http://orbitclientui.test.vggdev.com", {
        retryOneNetworkFailure: true,
    });
    cy.reload()
    cy.clearCookies({log: true})
    cy.clearLocalStorage({log: true})
});
When(
    'He enters his email as "crusio@yopmail.com" and his password as "P@ssw0rd1"',
    () => {
        cy.get(':nth-child(1) > .withIcon > .form-control').type("crusio@yopmail.com");
        cy.get(':nth-child(2) > .withIcon > .form-control').type("P@ssw0rd1");
    }
);

And("the submit button is clicked", () => {
    cy.get('.btn').click();
});
And("client admin waits for 10000 milliseconds", () => {
    cy.wait(10000);
});

Then("client admin is successfully logged into the application and views dashboard page", () => {
    cy.get('.navbar-brand-logo');
    cy.reload()
    cy.wait(3000)
});

When(/^He clicks on the 'Settings' module$/, function () {
    cy.get('a.navigation-link').eq(8).click({force:true})

});

When(/^Clicks on 'Business' module$/, function () {

});

When(/^Clicks on the 'Add Business' tab$/, function () {
    cy.get('.card-body > .btn').click()

});

Then(/^fills in "([^"]*)" as Business name, "([^"]*)" as Business Code and "([^"]*)" as Description$/, function () {
    cy.get(':nth-child(1) > .ng-tns-c10-1 > .form-group > .withIcon > #name').type("Truthy")
    cy.get(':nth-child(2) > .ng-tns-c10-1 > .form-group > .withIcon > #name').type("Tut")
    cy.get(':nth-child(3) > .form-control').type("Test Bdd")
    cy.get('.col-lg-12 > .btn').click()

});
Then(/^Business with name "([^"]*)" already exists$/, function () {
    cy.get('.toast-error')
    cy.get('.toast-message')
    cy.contains('Business name already exist')
    cy.get('.close > .ng-tns-c10-1').click()
    cy.wait(4000)

});
When(/^Client admin clicks on the profile icon, a dropdown is displayed$/, function () {
    cy.get(':nth-child(3) > .nav-link > .fas').click()

});
Then(/^He clicks on 'Sign Out' which logs him out of the application$/, function () {
    cy.get('.dropdown-menu > :nth-child(5) > span').click()

});
