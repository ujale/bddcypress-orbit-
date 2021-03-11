Feature: SinglePayment

  This test case contains steps to be taken in order to make a payment using a transaction reference that has previously been used.

  Scenario Outline: Make a single disbursement of different user references and transaction purpose

    Given The client admin is on the home page of Orbit client application
    When He enters his email as "crusio@yopmail.com" and his password as "P@ssw0rd1"
    And the submit button is clicked
    And client admin waits for 12000 milliseconds
    Then the user is logged into the application
    When user clicks on the Disbursements module and the Local disbursement module
    And user enters the user reference "<userReference>"
    And selects a business account
    And selects a payment channel
    And selects a beneficiary
    And enters an amount of "<amount>"
    And selects a transaction purpose of "<transactionNarration>"
    And clicks on the send button
    Then an error message is displayed
    And user logs out of the application

    Examples:
    | userReference | amount | transactionNarration |
    | 6578378       | 5      | School Fees          |
    | 676090000     | 10     | Salary               |
    | 07387189      | 2      | Leave Allowance      |



