Feature: Business Account Creation

  As a logged in Client Admin, i should be able to profile a business account
  Scenario: Create a Business Account

    Given The client admin is on the home page of orbitclient application
    When He enters his email as "crusio@yopmail.com" and his password as "P@ssw0rd1"
    And the submit button is clicked
    And client admin waits for 10000 milliseconds
    Then client admin is successfully logged into the application and views dashboard page
    When He clicks on the 'Settings' module
    And Clicks on 'Business Account' module
    And Clicks on the 'Add Business Account' tab
    Then select 'Luster' as Business, select provider gateway as'GTBANK' and submit
