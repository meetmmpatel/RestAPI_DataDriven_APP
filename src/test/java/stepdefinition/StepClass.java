package stepdefinition;

import main.CucumberRunner;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import io.restassured.matcher.ResponseAwareMatcher.*;
import io.restassured.response.Response;

import static io.restassured.RestAssured.*;

import static org.hamcrest.Matchers.*;
import static org.testng.Assert.*;


public class StepClass extends CucumberRunner {
  
  
  String UserAPI_URL = "https://gorest.co.in/public-api/users";
  
  int statuscode;
  
  @Given("^We have valid User API url address$")
  public void we_have_valid_User_API_url_address() {
	assertEquals("https://gorest.co.in/public-api/users", UserAPI_URL);
  }
  
  @When("^System call User API with GET request$")
  public void system_call_User_API_with_GET_request() {
	statuscode = given().when().get(UserAPI_URL).statusCode();
  }
  
  
  @Given("^We are  getting valid response with number of pages$")
  public void we_are_getting_valid_response_with_number_of_pages() {
	given().when().get(UserAPI_URL).then().statusCode(200);
	
  }
  
  @When("^System call User API with GET request with page number as parameter$")
  public void system_call_User_API_with_GET_request_with_page_number_as_parameter() {
	given().when().get(UserAPI_URL + "?page=34").then()
			.statusCode(200);
	
	
  }
  
  @Then("^Response should contain page number requested with User api url\\.$")
  public void response_should_contain_page_number_requested_with_User_api_url() {
	given().when().get(UserAPI_URL + "?page=34").then()
			.statusCode(200)
			.body("meta.pagination.page", equalTo(34));
	
  }
  
  @Then("^System should get (\\d+) HTTP status code in  response$")
  public void system_should_get_HTTP_status_code_in_response(int httpcode) {
	assertEquals(httpcode, statuscode);
  }
  
  
}
