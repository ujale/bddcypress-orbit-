import{defineStep} from "cypress-cucumber-preprocessor/steps";


defineStep('client admin waits {int} milliseconds',time => {
    cy.wait(time)
})