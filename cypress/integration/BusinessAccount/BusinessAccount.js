import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
import loginPages from "../Pages/loginPages";

Given(/^The client admin is on the home page of orbitclient application$/, function () {
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

Then(/^client admin is successfully logged into the application and views dashboard page$/, function () {
    cy.get('.navbar-brand-logo');
    cy.reload()
    cy.wait(3000)

});

When(/^He clicks on the 'Settings' module$/, function () {
    cy.get('a.navigation-link').eq(9).click({force:true})

});

And(/^Clicks on 'Business Account' module$/, function () {

});
And(/^Clicks on the 'Add Business Account' tab$/, function () {
    cy.get('.card-body > .btn').click()

});
Then(/^select 'Luster' as Business, select provider gateway as'GTBANK' and submit$/, function () {
    cy.get(':nth-child(1) > .input-container > .form-control').select('Luster')
    cy.get('.ng-tns-c10-1.ng-invalid > .row > :nth-child(2) > .input-container > .form-control').select('GTBANK')
    cy.get('.col-lg-5 > .form-control').type("0014109991")
    cy.get('.col-lg-5 > .form-control').click()
    cy.wait(5000)
    cy.get('.col-lg-7 > .input-container > .form-control').click({force:true})
    cy.wait(4000)
    cy.get('.toast-error').should('be.visible')
    // cy.get('.ng-tns-c13-2.ng-dirty > .btn').click({force:true})
    // cy.wait(10000)




});