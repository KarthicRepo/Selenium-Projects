package reportListeners;

import java.io.IOException;
import java.util.Arrays;

import org.testng.ITestContext;
import org.testng.ITestListener;
import org.testng.ITestResult;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.MediaEntityBuilder;
import com.aventstack.extentreports.markuputils.ExtentColor;
import com.aventstack.extentreports.markuputils.Markup;
import com.aventstack.extentreports.markuputils.MarkupHelper;

import actions.DriverManager;
import cucumber.api.Scenario;
import utils.ExtentManager;
import utils.ScenarioCacheManager;

public class TestListeners implements ITestListener {

	public static ThreadLocal<ExtentTest> extentTestThreads = new ThreadLocal<ExtentTest>();
	ExtentReports extent = ExtentManager.getReporter();
	ScenarioCacheManager scenarioCacheManager = DriverManager.getScenarioCache();
	//Scenario currentScenario = (Scenario) scenarioCacheManager.retrieve("scenario");

	@Override
	public void onTestStart(ITestResult result) {
		
		System.out.println("inside the ON-Start");
		ExtentTest test = extent.createTest(result.getInstanceName());
		extentTestThreads.set(test);

	}

	@Override
	public void onTestSuccess(ITestResult result) {
		String scenarioName = result.getName();

		String logText = "<b>" + "TEST CASE:- " + scenarioName.toUpperCase() + " PASSED" + "</b>";
		Markup m = MarkupHelper.createLabel(logText, ExtentColor.GREEN);
		extentTestThreads.get().pass(m);

	}

	@Override
	public void onTestFailure(ITestResult result) {

		String excepionMessage = Arrays.toString(result.getThrowable().getStackTrace());
		extentTestThreads.get()
				.fail("<details>" + "<summary>" + "<b>" + "<font color=" + "red>" + "Exception Occured:Click to see"
						+ "</font>" + "</b >" + "</summary>" + excepionMessage.replaceAll(",", "<br>") + "</details>"
						+ " \n");

		ExtentManager.captureScreenshot();
		try {

			extentTestThreads.get().fail("<b>" + "<font color=" + "red>" + "Screenshot of failure" + "</font>" + "</b>",
					MediaEntityBuilder.createScreenCaptureFromPath(ExtentManager.screenshotName).build());
		} catch (IOException e) {

		}

	}

	@Override
	public void onTestSkipped(ITestResult result) {
		// TODO Auto-generated method stub

	}

	@Override
	public void onTestFailedButWithinSuccessPercentage(ITestResult result) {
		// TODO Auto-generated method stub

	}

	@Override
	public void onStart(ITestContext context) {
		// TODO Auto-generated method stub

	}

	@Override
	public void onFinish(ITestContext context) {
		if (extent != null) {

			extent.flush();
		}

	}

}
