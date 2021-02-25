@POST
Feature: Test cases for Create new User with POST Method also we will update, and Delete the data.


  Background: User API is working as expected with POST, PUT and Delete Method


  Scenario: POST Method with out Authoraization Token
    When System call POST USER API
    And  Do not provide Authorization Token with valid values
    Then USER API should return the response with 401
    And  USER API should return the response with message "Authentication failed"

  Scenario Outline: POST Method with Authorization but with invalid body request
    When System call POST USER API with valid authorization token and empty body
    Then  USER API should return the response with 422
    And  USER API should return the response with appropriate "<Field>" and "<Message>"
    Examples:
      | Field  | Message        |
      | email  | can't be blank |
      | name   | can't be blank |
      | gender | can't be blank |
      | status | can't be blank |

  Scenario Outline: Create new Users and Validate the response
    When System call POST USER API with auth and "<EMAIL>", "<NAME>", "<GENDER>" and "<STATUS>"
    Then  USER API should return the response with 201
    And   USER API should return the response with ID
    And  USER API should return the response with "<EMAIL>", "<NAME>", "<GENDER>" and "<STATUS>"
    And  Upon Validation System should delete created users with given ID
    And  USER API should return the response with 204
    Examples:
      | EMAIL              | NAME    | GENDER | STATUS |
      | collab12@gmail.com | UserOne | Male   | Active |
      | collab13@gmail.com | UserTwo   | Female | Active |
      | collab14@gmail.com | UserThree | Male   | Active |
      | collab15@gmail.com | UserFour  | Female | Active |
      | collab16@gmail.com | UserFive  | Male   | Active |










