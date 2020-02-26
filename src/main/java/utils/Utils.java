package utils;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class Utils {
	
	
	public static WebElement pauseWebDriverUntilElementBecomeVisible(
            final WebDriver driver, final WebElement webElement, final int timeOutInMilliSeconds)
    {
        return (new WebDriverWait(driver, timeOutInMilliSeconds / 1000))
                .until(ExpectedConditions.visibilityOf(webElement));
    }
	
	public static void scrollToWebElement(WebElement element,WebDriver driver) {
		((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", element);
		introduceSleepInMilliSecs(500);
	}
	
	public static void enterTextAfterWaitingForElement(final WebDriver driver, final WebElement element, final String textToEnter)
    {
        Utils.pauseWebDriverUntilElementBecomeVisible(driver, element, 10000);
        element.clear();
        element.sendKeys(textToEnter);
        Utils.introduceSleepInMilliSecs(1000);
    }
	
	public static String getTextAfterWaitingForElement(final WebDriver driver, final WebElement element, int waitTime)
    {
        Utils.pauseWebDriverUntilElementBecomeVisible(driver, element, waitTime);
        return element.getText().trim();
    }
	
	public static String getValueAttributeAfterWaitingForElement(final WebDriver driver, final WebElement element, int waitTime)
    {
        Utils.pauseWebDriverUntilElementBecomeVisible(driver, element, waitTime);
        return element.getAttribute("value").toString().trim();
    }
	
	public static void clickAfterWaitingForElement(final WebDriver driver, final WebElement element, int waitTime)
    {
        Utils.pauseWebDriverUntilElementBecomeVisible(driver, element, waitTime);
        element.click();
    }
	
	public static void introduceSleepInMilliSecs(int inMilliSec) {
		 try
	        {
	            Thread.sleep(inMilliSec);
	        }
	        catch (final InterruptedException e)
	        {
	            // TODO Auto-generated catch block
	            e.printStackTrace();
	        }
	}
	
	
}
