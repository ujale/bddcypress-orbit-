Feature: CreateUser

  This contains step on how to create a client user on Orbit

  Scenario: Create an already existing client user

    Given The client admin is on the home page of orbitclient application
    When He enters his email as "crusio@yopmail.com" and his password as "P@ssw0rd1"
    And the submit button is clicked
    And client admin waits for 10000 milliseconds
    Then the user is logged into the application
    When user clicks on the 'Settings' module
    And Clicks on 'Manage User' module
    And Clicks on the 'Add User' tab
    Then fills in "Frand" as First name, "New" as Last name, "frand@yopmail.com" as Email, "P@ssw0rd" as Password and "P@ssw0rd" as Confirm password
    And Clicks on the submit button
    Then An error message is displayed
    When Client admin clicks on the profile icon, a dropdown is displayed
    Then He clicks on "Sign Out" which logs him out of the application

