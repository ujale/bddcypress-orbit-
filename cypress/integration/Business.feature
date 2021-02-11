Feature: BusinessCreation

As a logged in Client Admin, i should be able to create a business
  Scenario: Create a Business


    Given The client admin is on the home page of orbitclient application
    When He enters his email as "crusio@yopmail.com" and his password as "P@ssw0rd1"
    And the submit button is clicked
    And client admin waits for 10000 milliseconds
    Then client admin is successfully logged into the application and views dashboard page
    When He clicks on the 'Settings' module
    And Clicks on 'Business' module
    And Clicks on the 'Add Business' tab
    Then fills in "Truthy" as Business name, "Tut" as Business Code and "Test Bdd" as Description
    Then Business with name "Truthy" already exists
    When Client admin clicks on the profile icon, a dropdown is displayed
    Then He clicks on 'Sign Out' which logs him out of the application
