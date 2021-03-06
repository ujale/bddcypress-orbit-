Feature: AccountStatement

  This contains step on how to get account balance for a profiled business account on Orbit

  Scenario: Get Account Statement for a bank account whose bank keys has not been set

    Given The client admin is on the home page of Orbitclient application
    When He enters his email as "stellar@yopmail.com" and his password as "P@ssw0rd1"
    And the submit button is clicked
    And client admin waits for 8000 milliseconds
    Then the user is successfully logged into the application
    When user clicks on the "Settings" module
    And Clicks on "Business Account" module
    And Clicks on the 'View Statement' icon
    When user clicks on the calendar icon under start date and goes to the previous month
    And selects a start date
    When user clicks on the calendar icon under end date and goes to the previous month
    And selects an end date
    And clicks on the submit button
    Then a table is with the account statement is displayed
