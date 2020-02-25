package actions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import pageobjects.HomePage;
import pageobjects.SimpleInputFormPage;
import utils.Utils;

public class SimpleInputFormActions extends HomePageActions{
	
	SimpleInputFormPage simpleInputPage;
	public SimpleInputFormActions(SimpleInputFormPage simpleInputPage) {
		this.simpleInputPage=simpleInputPage;
	}
	
	public void typeMessage(String message) {
		Utils.enterTextAfterWaitingForElement(driver, simpleInputPage.messageBox,message);
		
	}
	
	public void clickOnShowMessageButton() {
		
		clickOnWebElement(simpleInputPage.showMessageButton);
	}
	
	public String getDisplayedText() {
		return simpleInputPage.displayText.getText();
	}
	
	public void scrollToAdditionForm() {
		Utils.scrollToWebElement(simpleInputPage.twoInputForm, driver);
	}
	
	public void enterNumber1(String num1) {
		Utils.enterTextAfterWaitingForElement(driver, simpleInputPage.num1, num1);
	}
	
	public void enterNumber2(String num2) {
		Utils.enterTextAfterWaitingForElement(driver, simpleInputPage.num2, num2);
	}
	
	public void clickOnTotalButton() {
		clickOnWebElement(simpleInputPage.addButton);
	}
	
	public String getTotalValue() {
		return simpleInputPage.Total.getText();
	}

}
