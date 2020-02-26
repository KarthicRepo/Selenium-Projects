package actions;

import java.util.Random;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;

import pageobjects.DatePickerPage;
import pageobjects.HomePage;
import pageobjects.SimpleInputFormPage;
import utils.Utils;

public class DatePickerActions extends HomePageActions {

	DatePickerPage datePickerPage;

	public DatePickerActions(DatePickerPage datePickerPage) {
		this.datePickerPage = datePickerPage;
	}

	public void clickOnCalenderButton() {
		Utils.introduceSleepInMilliSecs(1000);
		Utils.clickAfterWaitingForElement(driver,datePickerPage.calendarButton,3000);
		
//		 AjaxElementLocatorFactory ajaxElemFactory = new AjaxElementLocatorFactory(driver, 3000);
//		 DatePickerPage page=PageFactory.initElements(driver, DatePickerPage.class);
//         PageFactory.initElements(ajaxElemFactory, page);
	}

	public void selectDateFromPicker(String rawDate) {
		String [] dateExtract=getDayMonthYearFromRawDate(rawDate);
		String day=dateExtract[0];
		String month=dateExtract[1];
		String year=dateExtract[2];
		selectYear(year);
		selectMonth(month);
		selectDay(day);
		
	}

	private String[] getDayMonthYearFromRawDate(String rawDate) {
		return removeQuotes(rawDate).split("-");
	}

	private void selectYear(String toYear) {

		Utils.clickAfterWaitingForElement(driver,datePickerPage.initialYearText,2000);
		String currentYearText = Utils.getTextAfterWaitingForElement(driver,datePickerPage.currentYearText,2000);
		int yearDifference= Integer.parseInt(currentYearText) - Integer.parseInt(toYear);
		
		//int yearDifference= new Random().nextInt(10);
		
		if(yearDifference<0) {
			for(int i=yearDifference;i<0;i++) {
				Utils.clickAfterWaitingForElement(driver,datePickerPage.nextYearButton,1000);
			}
		}
		else {
			for(int i=yearDifference;i>0;i--) {
				Utils.clickAfterWaitingForElement(driver,datePickerPage.previousYearButton,1000);
			}
		}
	}

	private void selectMonth(String toMonth) {

		
		for (WebElement monthElement : datePickerPage.monthElements) {
			System.out.println(monthElement.getText());
			if (monthElement.getText().equalsIgnoreCase(toMonth)) {
				Utils.clickAfterWaitingForElement(driver,monthElement,2000);
				break;
			}
		}
		Utils.introduceSleepInMilliSecs(3000);
	}

	private void selectDay(String rawday) {
		String day= (rawday.startsWith("0")?rawday.substring(1):rawday);
		for (WebElement dayElement : datePickerPage.dayElements) {
			System.out.println(dayElement.getText());
			if (dayElement.getText().equalsIgnoreCase(day)) {
				Utils.clickAfterWaitingForElement(driver,dayElement,2000);
				break;
			}
		}
		Utils.introduceSleepInMilliSecs(3000);
	}

	public String getFinalDateInputText() {
		//Utils.clickAfterWaitingForElement(driver, datePickerPage.dummyElement, 1000);
		Utils.introduceSleepInMilliSecs(1000);
		return Utils.getValueAttributeAfterWaitingForElement(driver,datePickerPage.finalInputDateText,2000);
	}
	
	public String removeQuotes(String textWithQuotes) {
		return textWithQuotes.replaceAll("\"", "");
	}

}
