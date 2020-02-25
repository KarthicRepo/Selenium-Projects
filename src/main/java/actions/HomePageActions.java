package actions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import pageobjects.HomePage;
import utils.Utils;

public class HomePageActions extends HomePage{

	
	WebDriver driver=BaseTest.getDriver();
	private String pageUri = "https://www.seleniumeasy.com/test/";
	private String pageTitle = "Selenium Easy";

	public HomePageActions() {
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		// AjaxElementLocatorFactory factory = new AjaxElementLocatorFactory(driver,
		// 10000);

	}
	
	public boolean isWebElementVisible(WebElement webElement) {
		return Utils.pauseWebDriverUntilElementBecomeVisible(driver, webElement, 10000) != null;

	}

	public void gotoHomePage() {
		driver.get(pageUri);
	}

	public String getCurrentPageTitle() {
		return driver.getTitle();
	}

	public String getExpectedPageTitle() {
		return pageTitle;
	}

	public void clickOnWebElement(WebElement element) {
		element.click();
	}

	public void scrollToWebElement(WebElement element) {
		Utils.scrollToWebElement(element, driver);
	}

	public void clickOnWebElementByText(WebElement webElement) {
		webElement.click();
	}

	public void closeDriver() {
		BaseTest.destroyDriver();
	}

}
