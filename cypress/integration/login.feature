Feature: Authentication
As an Admin, i should not be abe to login with a invalid email and password
As an Admin, i should be abe to login with a valid email and password


  Scenario: Login with invalid credentials

    Given The client admin is on the home page of orbitclient application
    When He enters his email as "crusi@yopmail.com" and his password as "P@ssw0rd"
    And the submit button is clicked
    And client admin waits for 5000 milliseconds
    Then client admin should get an error message


  Scenario: Login with valid credentials

    Given The client admin is on the home page of orbitclient application
    When He enters his email as "crusio@yopmail.com" and his password as "P@ssw0rd1"
    And the submit button is clicked
    And client admin waits for 5000 milliseconds
    Then client admin is successfully logged into the application and views dashboard page

