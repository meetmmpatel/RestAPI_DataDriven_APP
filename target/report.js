$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("POST_CreateUser.feature");
formatter.feature({
  "line": 2,
  "name": "Test cases for Create new User with POST Method also we will update, and Delete the data.",
  "description": "",
  "id": "test-cases-for-create-new-user-with-post-method-also-we-will-update,-and-delete-the-data.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@POST"
    }
  ]
});
formatter.background({
  "line": 5,
  "name": "User API is working as expected with POST, PUT and Delete Method",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 8,
  "name": "POST Method with out Authoraization Token",
  "description": "",
  "id": "test-cases-for-create-new-user-with-post-method-also-we-will-update,-and-delete-the-data.;post-method-with-out-authoraization-token",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "System call POST USER API",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Do not provide Authorization Token with valid values",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "USER API should return the response with 401",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "USER API should return the response with message \"Authentication failed\"",
  "keyword": "And "
});
formatter.match({
  "location": "POST_USER.system_call_POST_USER_API()"
});
formatter.result({
  "duration": 2908589123,
  "status": "passed"
});
formatter.match({
  "location": "POST_USER.do_not_provide_Authorization_Token_with_valid_values()"
});
formatter.result({
  "duration": 18603,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 41
    }
  ],
  "location": "POST_USER.user_API_should_return_the_response_with(int)"
});
formatter.result({
  "duration": 335943411,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication failed",
      "offset": 50
    }
  ],
  "location": "POST_USER.user_API_should_return_the_response_with_message(String)"
});
formatter.result({
  "duration": 9215017,
  "status": "passed"
});
});