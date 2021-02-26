package main;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(strict = true, tags = {"@ALL"}, monochrome = true, features = "src/test/resources" +
		"/features", glue = "stepdefinition",
		format = {"pretty", "html:target"}, dryRun = true)

public class CucumberRunner extends AbstractTestNGCucumberTests {


}
