package stepdefinition;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import io.restassured.response.Response;

import main.CucumberRunner;

import static io.restassured.RestAssured.*;

import static org.hamcrest.Matchers.*;


public class GET_Products extends CucumberRunner {
  
  String PRODUCT_API = "https://gorest.co.in/public-api/products";
  Response response;
  
  @When("^System call product API endpoint with valid request$")
  public void system_call_product_API_endpoint_with_valid_request() {
	response = given().param("Content-Type", "application/json")
			.when().get(PRODUCT_API);
  }
  
  @Then("^System should get back HTTP Status code (\\d+) in response\\.$")
  public void system_should_get_back_HTTP_Status_code_in_response(int httpStatus) {
	response.then().assertThat().statusCode(httpStatus).log().status();
	
  }
  
  @Then("^System should verify HTTP code with assertion methods$")
  public void system_should_verify_HTTP_code_with_assertion_methods() {
	response.then().assertThat().statusCode(200);
  }
  
  @Then("^System should validate API response such as code and data$")
  public void system_should_validate_API_response_such_as_code_and_data() {
	response.then().body("code", is(200), "data.id[1]", is(2));
  }
  
  @Then("^System should validate number of pages in product api response$")
  public void system_should_validate_number_of_pages_in_product_api_response() {
	response.then().body("meta.pagination.pages", is(7));
  }
  
  @When("^System call product API endpoint with valid request and given (\\d+)$")
  public void system_call_product_API_endpoint_with_valid_request_and_given(int ID) {
	response = given().when().get(PRODUCT_API + "/" + ID);
  }
  
  @Then("^System should validate (\\d+), \"([^\"]*)\" for given api response$")
  public void system_should_validate_for_given_api_response(int ID, String Name) {
	response.then().assertThat().body("data.id", is(ID), "data.name", is(Name));
	response.then().log().body();
  }
  
  @When("^System call product API endpoint with invalid URL$")
  public void system_call_product_API_endpoint_with_invalid_URL() {
	response = given().when().get("https://gorest.co.in/public-api/product");
  }
  
  @Then("^System validate response with (\\d+) code inside api response\\.$")
  public void system_validate_response_with_code_inside_api_response(int dataNotFound) {
	response.then().body("code", is(dataNotFound)).log().all();
  }
  
  
}
