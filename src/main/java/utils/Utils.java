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
