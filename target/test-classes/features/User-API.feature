@GET
Feature: User API testing

  Background: Assuming User API is working as expected

  Scenario: Verify the User API GET request and response call
    Given We have valid User API url address
    When  System call User API with GET request
    Then  System should get 200 HTTP status code in  response

  Scenario: Verify the number of pages in User API response
    Given We have valid User API url address
    And  We are  getting valid response with number of pages
    When System call User API with GET request with page number as parameter
    Then  Response should contain page number requested with User api url.


