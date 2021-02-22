package intro;

import io.restassured.matcher.ResponseAwareMatcher.*;
import io.restassured.response.Response;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.*;

import static org.hamcrest.Matchers.*;
import static org.testng.Assert.*;


public class HowToCall_GET {
  
  @Test
  public void callGET_method() {
	given().
			when().get("https://gorest.co.in/public-api/users")
			.then()
			.assertThat()
			.statusCode(200);
	
  }
  
  
  @Test
  public void callGET_WithResponse() {
	given().
			when().get("https://gorest.co.in/public-api/users")
			.getBody().prettyPrint();
  }
  
  
  @Test()
  public void testGivenId() {
	given().
			when().get("https://gorest.co.in/public-api/users/25")
			.getBody().prettyPrint();
   
	given()
			.when().get("https://gorest.co.in/public-api/users/25")
			.then()
			.assertThat().
			body("data.id", is(25))
			.body("data.name", is("Girish Malik"));
  }
  
  
}
