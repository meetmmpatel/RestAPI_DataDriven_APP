package stepdefinition;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.http.ContentType;
import main.CucumberRunner;

import static io.restassured.RestAssured.*;  //given and when and them...

import io.restassured.response.Response; //for Response class
import org.json.simple.JSONObject;
import org.testng.Assert;

import static org.hamcrest.Matchers.*; // is , assertThat() and more


public class All_User_Steps extends CucumberRunner {
  
  //API request related variables
  String USER_EndPoint = "https://gorest.co.in/public-api/users";
  int ID;
  String headerName = "Authorization";
  String headerToken = "Bearer cb61dc72753d2e6f251cac66e79e98d1a01a6c12f10038b3c93655ebca389d67";
  
  //Rest Assured variables
  Response response;
  
  
  @Given("^User API is working as expected with status code (\\d+)$")
  public void user_API_is_working_as_expected_with_status_code(int STATUS_CODE) {
	given()
			.when()
			.get(USER_EndPoint)
			.then()
			.assertThat()
			.statusCode(STATUS_CODE);
  }
  
  @When("^System request POST method with \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
  public void system_request_POST_method_with(String EMAIL, String NAME, String GENDER, String STATUS) {
	
	//Create User with Body as post request
	JSONObject user = new JSONObject();
	user.put("email", EMAIL);
	user.put("name", NAME);
	user.put("gender", GENDER);
	user.put("status", STATUS);
	
	//Making POST Request
	response = given().header(headerName, headerToken).contentType(ContentType.JSON)
			.body(user)
			.when().post(USER_EndPoint);
	
	//Logging POST response
	response.then().log().body();
  }
  
  @When("^User API is returning (\\d+) with POST response$")
  public void user_API_is_returning_with_POST_response(int STATUS_CODE) {
	//Validating POST status code
	response.then().body("code", is(STATUS_CODE));
	ID = response.getBody().jsonPath().getInt("data.id");
  }
  
  @When("^User API is returning (\\d+) with GET by ID response and \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"" +
		  "([^\"]*)\"$")
  public void user_API_is_returning_with_GET_by_ID_response_and(int STATUS_CODE, String EMAIL, String NAME,
																String GENDER,
																String STATUS) {
	//Making GET with ID call to User api
	response = given().header(headerName, headerToken)
			.contentType(ContentType.JSON)
			.when().get(USER_EndPoint + "/" + ID);
	
	//Get the GET by ID response we are validating email, name, gender and status
	String email = response.getBody().jsonPath().getString("data.email");
	String name = response.getBody().jsonPath().getString("data.name");
	String gender = response.getBody().jsonPath().getString("data.gender");
	String status = response.getBody().jsonPath().getString("data.status");
	
	Assert.assertEquals(STATUS_CODE, response.getBody().jsonPath().getInt("code"));
	Assert.assertEquals(EMAIL, email);
	Assert.assertEquals(NAME, name);
	Assert.assertEquals(GENDER, gender);
	Assert.assertEquals(STATUS, status);
	
	response.prettyPrint();
  }
  
  @Then("^System will request PUT to Update user's \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\"$")
  public void systemWillRequestPUTToUpdateUserSAnd(String NAME, String GENDER, String UPDATED_EMAIL,
												   String UPDATED_STATUS) {
	//Create User with Body as post request
	JSONObject user = new JSONObject();
	user.put("email", UPDATED_EMAIL);
	user.put("name", NAME);
	user.put("gender", GENDER);
	user.put("status", UPDATED_STATUS);
	
	//Making POST Request
	response = given().header(headerName, headerToken).contentType(ContentType.JSON)
			.body(user)
			.when().put(USER_EndPoint);
	
	//Logging POST response
	response.then().log().body();
  }
  
  @Then("^User API is returning (\\d+) status code in response with user's \"([^\"]*)\" and \"([^\"]*)\"$")
  public void user_API_is_returning_status_code_in_response_with_user_s_and(int STATUS_CODE, String UPDATED_EMAIL,
																			String UPDATED_STATUS) {
	String email = response.getBody().jsonPath().getString("data.email");
	String status = response.getBody().jsonPath().getString("data.status");
	Assert.assertEquals(UPDATED_EMAIL, email);
	Assert.assertEquals(UPDATED_STATUS, status);
	Assert.assertEquals(STATUS_CODE, response.getBody().jsonPath().getInt("code"));
  }
  
  @Then("^Finally System will request Delete User with given ID$")
  public void finally_System_will_request_Delete_User_with_given_ID() {
	
	//Delete User with given ID
	response = given()
			.header(headerName, headerToken)
			.and()
			.when().delete(USER_EndPoint + "/" + ID);
	
  }
  
  @Then("^System should return (\\d+) as status code$")
  public void system_should_return_as_status_code(int STATUS_CODE) {
	
	//Validating status code with response
	Assert.assertEquals(STATUS_CODE, response.getBody().jsonPath().getInt("code"));
	response.prettyPrint();
  }
  
  
}
