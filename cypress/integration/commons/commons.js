import{defineStep} from "cypress-cucumber-preprocessor/steps";


defineStep('client admin waits for {int} milliseconds',time => {
    cy.wait(time)
})


