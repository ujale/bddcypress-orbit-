import {Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import loginPages from "../Pages/loginPages";

//valid user login
Given("The client admin is on the home page of orbitclient application", () => {
  // cy.visit("http://orbitclientui.test.vggdev.com", {
  //   retryOneNetworkFailure: true,
  // });
    loginPages.visitUrl()
});

When(/^He enters his email as "([^"]*)" and his password as "([^"]*)"$/, function (email, password) {
    loginPages.enterLoginCred(email, password)

});
 
And("the submit button is clicked", () => {
  cy.get('.btn').click();
});

Then(/^client admin should get an error message$/, function () {
    loginPages.errorMessage()
});

Then("client admin is successfully logged into the application and views dashboard page", () => {
    //cy.get('.navbar-brand-logo');
    loginPages.assertDashboard()

});
