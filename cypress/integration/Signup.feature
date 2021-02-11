Feature: Sign Up

  This describes the onboarding step for a client admin on the orbit client portal
  Scenario: Sign up with valid details

    Given User is on the orbit client homepage
    When User clicks on the 'Sign up' link
    Then Fills the sign up form with valid details
    And Clicks on the submit button
    Then User will see a pop up message stating that the email already exists