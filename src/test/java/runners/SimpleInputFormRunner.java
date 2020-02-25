package runners;

import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.TestNGCucumberRunner;

//@RunWith(Cucumber.class)
@CucumberOptions(dryRun = false, features = "src/test/resources", glue = "stepdefs",
format = {"pretty", "html:target/cucumberreports"},monochrome=true,
tags= {"@Karthic"})
public class SimpleInputFormRunner {

	@Test
	public void simpleInputFormTest() {
		new TestNGCucumberRunner(this.getClass()).runCukes();

	}
	
}
