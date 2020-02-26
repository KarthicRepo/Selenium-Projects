package pageobjects;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.PageFactory;

import actions.DriverManager;

public class DatePickerPage extends HomePage{
	
	WebDriver driver =DriverManager.getDriver();
	public DatePickerPage() {
		
		PageFactory.initElements(driver, this);
	}
	
	@FindAll({
		@FindBy(xpath="//input[@placeholder='dd/mm/yyyy']"),
		@FindBy(xpath="//div[@class='input-group date']//span[@class='input-group-addon']")
	})
	public WebElement calendarButton;
	
	@FindBy(xpath="//div[@class='datepicker-days']//th[@class='datepicker-switch']")
	public WebElement yearSelectButton;
	
	//@FindBy(xpath="//div[@class='datepicker-months']//th[@class='datepicker-switch']")
	//@FindBy(xpath="//div[@class='datepicker-months']//tr[2]/th[2]")
	@FindBys({
		@FindBy(xpath="/html[1]/body[1]/div[3]/div[1]/table[1]/thead[1]/tr[2]/th[2]"),
		@FindBy(xpath="//div[@class='datepicker-days']//th[@class='datepicker-switch']")})
	public WebElement initialYearText;
	
	@FindBy(xpath="//div[@class='datepicker-months']//th[@class='datepicker-switch']")
	public WebElement currentYearText;
	
	
	@FindBy(xpath="//div[@class='datepicker-months']//th[@class='prev'][contains(text(),'«')]")
	public WebElement previousYearButton;
	
	@FindBy(xpath="//div[@class='datepicker-months']//th[@class='next'][contains(text(),'»')]")
	public WebElement nextYearButton;
	
	@FindBy(xpath="//div[@class='datepicker-months']//td//span[@class != 'month disabled']")
	public List<WebElement> monthElements;
	
	@FindBy(xpath="//div[@class='datepicker-days']//td[@class='day' or @class='today active day']")
	public List<WebElement> dayElements;
	
	@FindAll({
		@FindBy(xpath="//input[@placeholder='dd/mm/yyyy']"),
		@FindBy(xpath="//div[@class='input-group date']//span[@class='input-group-addon']")
	})
	public WebElement finalInputDateText;
	
	@FindBy(xpath="//div[contains(text(),'Date Example :')]")
	public WebElement dummyElement;
}
