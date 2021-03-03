Feature: AccountBalance

  This contains step on how to get account balance for a profiled business account on Orbit

  Scenario: Get Account Balance for a fidelity bank account

    Given The client admin is on the home page of Orbitclient application
    When He enters his email as "crusio@yopmail.com" and his password as "P@ssw0rd1"
    And the submit button is clicked
    And client admin waits for 10000 milliseconds
    Then the user is logged into the application
    When user clicks on the "Settings" module
    And Clicks on 'Business Account' module
    And Clicks on the 'View Balance' icon
    Then the Current Balance is displayed

