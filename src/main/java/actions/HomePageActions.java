package actions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import pageobjects.HomePage;
import utils.Utils;

public class HomePageActions extends HomePage {

	WebDriver driver = DriverManager.getDriver();
	
	private String pageTitle = "Selenium Easy";

	public boolean isWebElementVisible(WebElement webElement) {
		return Utils.pauseWebDriverUntilElementBecomeVisible(driver, webElement, 10000) != null;

	}

	public String getCurrentPageTitle() {
		return driver.getTitle();
	}

	public String getExpectedPageTitle() {
		return pageTitle;
	}

	public void clickOnWebElement(WebElement element) {
		Utils.pauseWebDriverUntilElementBecomeVisible(driver, element, 50000).click();
	}

	public void scrollToWebElement(WebElement element) {
		Utils.scrollToWebElement(element, driver);
	}

	public void clickOnWebElementByText(WebElement webElement) {
		Utils.pauseWebDriverUntilElementBecomeVisible(driver, webElement, 50000).click();
	}


}
