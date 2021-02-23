package main;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(strict = true, tags = {"@POST"}, monochrome = true, features = "src/test/resources" +
		"/features", glue = "stepdefinition",
		format = {"pretty", "html:target"})

public class CucumberRunner extends AbstractTestNGCucumberTests {


}
