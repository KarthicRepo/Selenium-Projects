package runners;

import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;

//@RunWith(Cucumber.class)
@CucumberOptions(dryRun = false, features = "src/test/resources", glue = "stepdefs",
format = {"pretty", "html:target/cucumberreports"},monochrome=true )
public class RunCuke {

	@Test
	public void runTest() {
		new TestNGCucumberRunner(this.getClass()).runCukes();

	}
	
}
