@GET @Product_API
Feature: Test Cases for Products API with GET http method only

#  Will work line before each method... will always run before every scenario
  Background: Product API GET Method is working as expected.


# Basics Happy path such as Status code, Response validation and couple of other tests

  Scenario: Test case for Product API returning status code 200.
    When System call product API endpoint with valid request
    Then System should get back HTTP Status code 200 in response.
    And System should verify HTTP code with assertion methods


  Scenario: Test case for Product API returning valid response
    When System call product API endpoint with valid request
    Then System should get back HTTP Status code 200 in response.
    And  System should validate API response such as code and data


  Scenario: Test case for Product API pages and other validation
    When System call product API endpoint with valid request
    Then System should get back HTTP Status code 200 in response.
    And  System should validate number of pages in product api response

  Scenario Outline: Test case for Product API with given specific ID and related Information
    When System call product API endpoint with valid request and given <ID>
    Then System should get back HTTP Status code 200 in response.
    And System should validate <ID>, "<Name>" for given api response
    Examples:
      | ID | Name                      |
      | 6  | Rustic Rubber Gloves      |
      | 8  | Synergistic Granite Table |
      | 12 | Awesome Marble Wallet     |

#      Possible Error cases
  Scenario: Test case for passing wrong/Invalid Product API url
    When System call product API endpoint with invalid URL
    Then System should get back HTTP Status code 404 in response.


  Scenario Outline: Test case for Invalid ID for Product API (should return 404)
    When System call product API endpoint with valid request and given <ID>
    Then System should get back HTTP Status code 200 in response.
    And  System validate response with 404 code inside api response.
    Examples:
      | ID   |
      | 1005 |
      | 2006 |
      | 2021 |
      | 1329 |

