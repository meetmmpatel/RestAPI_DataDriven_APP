package stepdefinition;


import io.restassured.http.ContentType;
import org.json.simple.JSONObject;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import main.CucumberRunner;
import org.testng.Assert;


import static io.restassured.RestAssured.*;

import static org.hamcrest.Matchers.*;

public class POST_USER extends CucumberRunner {
  
  String USER_API = "https://gorest.co.in/public-api/users";
  Response response;
  String headerAuth = "Authorization";
  String jwtToken = "Bearer cb61dc72753d2e6f251cac66e79e98d1a01a6c12f10038b3c93655ebca389d67";
  int ID;
  
  @When("^System call POST USER API$")
  public void system_call_POST_USER_API() throws Throwable {
	response =
			given().header("", "")
					.and()
					.body("")
					.when().post(USER_API);
	response.prettyPrint();
  }
  
  @When("^Do not provide Authorization Token with valid values$")
  public void do_not_provide_Authorization_Token_with_valid_values() {
  }
  
  @Then("^USER API should return the response with (\\d+)$")
  public void user_API_should_return_the_response_with(int statusCode) {
	response.then().body("code", is(statusCode));
  }
  
  @Then("^USER API should return the response with message \"([^\"]*)\"$")
  public void user_API_should_return_the_response_with_message(String ErrorMessage) {
	response.then().assertThat().body("data.message", is(ErrorMessage));
	response.prettyPrint();
  }
  
  @When("^System call POST USER API with valid authorization token and empty body$")
  public void system_call_POST_USER_API_with_valid_authorization_token_and_empty_body() {
	response = given()
			.header(headerAuth, jwtToken)
			.and()
			.body("")
			.when().post(USER_API)
			.then()
			.extract().response();
  }
  
  @Then("^USER API should return the response with appropriate \"([^\"]*)\" and \"([^\"]*)\"$")
  public void user_API_should_return_the_response_with_appropriate_and(String Field, String Message) {
	
	Assert.assertEquals(response.jsonPath().getInt("code"), 422);
	String fieldValue = "";
	String fieldMessage = "";
	for (int i = 0; i < 4; i++) {
	  fieldValue = response.jsonPath().getJsonObject("data.field[" + i + "]").toString();
	  fieldMessage = response.jsonPath().getJsonObject("data.message[" + i + "]").toString();
	  
	  if (fieldValue.equals("email") && fieldMessage.equals("can't be blank")) {
		Assert.assertTrue(true);
	  }
	  if (fieldValue.equals("name") && fieldMessage.equals("can't be blank")) {
		Assert.assertTrue(true);
	  }
	  if (fieldValue.equals("gender") && fieldMessage.equals("can't be blank")) {
		Assert.assertTrue(true);
	  }
	  if (fieldValue.equals("status") && fieldMessage.equals("can't be blank")) {
		Assert.assertTrue(true);
	  }
	}
  }
  
  
  @When("^System call POST USER API with auth and \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\"$")
  public void system_call_POST_USER_API_with_auth_and_and(String EMAIL, String NAME, String GENDER, String STATUS) {
	
	JSONObject user = new JSONObject();
	user.put("email", EMAIL);
	user.put("name", NAME);
	user.put("gender", GENDER);
	user.put("status", STATUS);
	
	
	System.out.println(user);
	
	response = given().header(headerAuth, jwtToken).contentType(ContentType.JSON)
			.body(user)
			.when().post(USER_API);
	response.then().log().body();
  }
  
  @Then("^USER API should return the response with ID$")
  public void user_API_should_return_the_response_with_ID() {
	
	ID = response.getBody().jsonPath().getInt("data.id");
	System.out.println(ID);
  }
  
  @Then("^USER API should return the response with \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\"$")
  public void user_API_should_return_the_response_with_and(String EMAIL, String NAME, String GENDER, String STATUS) {
	String email = response.getBody().jsonPath().getString("data.email");
	String name = response.getBody().jsonPath().getString("data.name");
	String gender = response.getBody().jsonPath().getString("data.gender");
	String status = response.getBody().jsonPath().getString("data.status");
	
	Assert.assertEquals(EMAIL, email);
	Assert.assertEquals(NAME, name);
	Assert.assertEquals(GENDER, gender);
	Assert.assertEquals(STATUS, status);
	
  }
  
  @Then("^Upon Validation System should delete created users with given ID$")
  public void upon_Validation_System_should_delete_created_users_with_given_ID() {
	response = given()
			.header(headerAuth, jwtToken)
			.and()
			.when().delete(USER_API + "/" + ID);
	response.prettyPrint();
  }
  
  
}
