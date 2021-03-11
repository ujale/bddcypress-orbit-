import {Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import payoutPage from "../Pages/payoutPage";

Given(/^The client admin is on the home page of Orbit client application$/, function () {
    cy.visit("http://orbitclientui.test.vggdev.com", {
        retryOneNetworkFailure: true });
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

And (/^client admin waits for 12000 milliseconds$/, function () {
    cy.wait(12000);
});

Then('the user is logged into the application', () => {
    cy.get('[group="\'dashboard\'"] > .navigation-link').should("contain.text", "Dashboard")
    cy.reload()
    cy.wait(3000)
})
When(/^user clicks on the Disbursements module and the Local disbursement module$/, function () {
    //cy.get('.navigation-item ng-star-inserted').click()
    cy.get('a.navigation-link').eq(3).should("contain.text", "Disbursements")
    cy.get('a.navigation-link').eq(4).click({force:true})
    cy.url().should('include', '/disbursements/create')

});
When(/^user enters the user reference "([^"]*)"$/, function (userReference) {
    cy.wait(3000)
    cy.get(':nth-child(1) > :nth-child(1) > .form-group > .form-control').type(userReference)
    cy.wait(3000)
});
And(/^selects a business account$/, function () {
    //cy.get('ngb-tabset.ng-tns-c13-2')
    cy.get(':nth-child(1) > :nth-child(2) > .form-group').should("contain.text", "Business Account")
    cy.get('select[name="businessAccountId"]').select('138')
});
And(/^selects a payment channel$/, function () {
    cy.get(':nth-child(1) > :nth-child(3) > .form-group > label.ng-tns-c10-1').should("contain.text", "Payment Channel")
    cy.get('select[name="paymentChannel"]').select('1')
});
And(/^selects a beneficiary$/, function () {
    cy.get(':nth-child(3) > :nth-child(1) > .form-group > label.ng-tns-c10-1').should("contain.text", "Beneficiary")
    cy.get('select[id="beneficiary"]').select('137')
    cy.wait(3000)
});

And(/^enters an amount of "([^"]*)"$/, function (amount) {
    cy.get(':nth-child(5) > :nth-child(1) > .form-group > label.ng-tns-c10-1').should("contain.text", "Amount")
    cy.get(':nth-child(5) > :nth-child(1) > .form-group > .form-control').type(amount)
});

And(/^selects a transaction purpose of "([^"]*)"$/, function (transactionNarration) {
    cy.get(':nth-child(5) > :nth-child(2) > .form-group > label.ng-tns-c10-1').should("contain.text", "Purpose of transaction")
    cy.get('select[name="narration"]').select(transactionNarration)
});
When(/^clicks on the send button$/, function () {
    cy.get('.btn').click()
    cy.wait(2000)
});
Then(/^an error message is displayed$/, function () {
    cy.get('.toast-message').should("contain.text", "Transaction already exist for this Business")
});
Then(/^user logs out of the application$/, function () {
    cy.get(':nth-child(3) > .nav-link').click()
    cy.get('.dropdown-menu > :nth-child(5) > span').click()
    cy.wait(3000)

});

