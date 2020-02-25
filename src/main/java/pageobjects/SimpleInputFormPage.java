package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import actions.BaseTest;
import pageobjects.HomePage;

public class SimpleInputFormPage extends HomePage{

	
	WebDriver driver;
	public SimpleInputFormPage() {
		driver=BaseTest.getDriver();
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath="//input[@id='user-message']")
	public WebElement messageBox;
	
	@FindBy(xpath="//button[contains(text(),'Show Message')]")
	public WebElement showMessageButton;
	
	@FindBy(xpath="//span[@id='display']")
	public WebElement displayText;
	
	@FindBy(xpath="//div[contains(text(),'Two Input Fields')]")
	public WebElement twoInputForm;
	
	@FindBy(xpath="//input[@id='sum1']")
	public WebElement num1;
	
	@FindBy(xpath="//input[@id='sum2']")
	public WebElement num2;
	
	@FindBy(xpath="//button[contains(text(),'Get Total')]")
	public WebElement addButton;
	
	@FindBy(xpath="//span[@id='displayvalue']")
	public WebElement Total;
	
	
}
