package stepdefinition;

import com.google.gson.JsonObject;
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
			.header("Authorization", "Bearer cb61dc72753d2e6f251cac66e79e98d1a01a6c12f10038b3c93655ebca389d67")
			.and()
			.body("")
			.when().post(USER_API)
			.then()
			.extract().response();
  }
  
  @Then("^USER API should return the response with appropriate \"([^\"]*)\" and \"([^\"]*)\"$")
  public void user_API_should_return_the_response_with_appropriate_and(String Field, String Message) {
	
	Assert.assertEquals(response.jsonPath().getInt("code"), 422);
	String fieldValue = response.jsonPath().getJsonObject("data.field").toString();
  }
}
