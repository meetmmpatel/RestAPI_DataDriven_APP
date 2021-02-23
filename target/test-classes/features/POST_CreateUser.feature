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





