@ALL
Feature: High Level Testing for User API

  Background: User API is working as expected with POST, GET, PUT and DELETE.

  Scenario Outline: Successfully Request and response validation of USER API methods
    Given User API is working as expected with status code 200
    When  System request POST method with "<Email>", "<Name>", "<Gender>", "<Status>"
    And   User API is returning 201 with POST response
    And   User API is returning 200 with GET by ID response and "<Email>", "<Name>", "<Gender>", "<Status>"
    Then  System will request PUT to Update user's "<Name>", "<Gender>", "<Updated_Email>" and "<Updated_status>"
#    And   User API is returning 200 status code in response with user's "<Updated_Email>" and "<Updated_status>"
    And   Finally System will request Delete User with given ID
    And   System should return 204 as status code
    Examples:
      | Email               | Name      | Gender | Status | Updated_Email        | Updated_status |
      | apiTest8908@test.com | UserOne   | Male   | Active | apiTest1101@test.com | Inactive       |
      | apiTest8990@test.com | UserTwo   | Female | Active | apiTest1102@test.com | Inactive       |
      | apiTest891@test.com | UserThree | Male   | Active | apiTest1103@test.com | Inactive       |
      | apiTest892@test.com | UserFour  | Female | Active | apiTest1124@test.com | Inactive       |
      | apiTest893@test.com | UserFive  | Male   | Active | apiTest1105@test.com | Inactive       |











