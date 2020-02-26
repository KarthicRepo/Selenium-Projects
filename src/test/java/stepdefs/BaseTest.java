package stepdefs;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import actions.DriverManager;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import utils.Utils;

public class BaseTest {

	private static String homePageUri = "https://www.seleniumeasy.com/test/";

	@Before
	public void setupMethod() {
		DriverManager.setUpDriver();
		DriverManager.getDriver().get(homePageUri);
	}

	@After
	public void tearDown(Scenario scenario) {
		if (scenario.isFailed()) {
			byte[] screenshotBytes = ((TakesScreenshot) DriverManager.getDriver()).getScreenshotAs(OutputType.BYTES);
			scenario.embed(screenshotBytes, "image/png");
			Utils.introduceSleepInMilliSecs(1000);
		}
		DriverManager.destroyDriver();
	}

}
