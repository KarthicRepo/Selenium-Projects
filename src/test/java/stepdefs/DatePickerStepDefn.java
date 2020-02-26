package stepdefs;

import org.testng.Assert;

import actions.DatePickerActions;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageobjects.DatePickerPage;

public class DatePickerStepDefn {

	DatePickerPage datePickerPage = new DatePickerPage();
	DatePickerActions datePickerAction = new DatePickerActions(datePickerPage);
	
	
	@When("^I click on the Date picker button$")
	public void i_click_on_the_Date_picker_button() throws Throwable {
	   datePickerAction.clickOnCalenderButton();
	}
	
	@When("^I select the date \"([^\"]*)\" from the date picker$")
	public void i_select_the_date_from_the_date_picker(String rawDate) throws Throwable {

		datePickerAction.selectDateFromPicker(rawDate);
	}

	@Then("^I should see the date as \"([^\"]*)\" in the date field$")
	public void i_should_see_the_date_as_in_the_date_field(String expectedDateText) throws Throwable {

		Assert.assertEquals(datePickerAction.getFinalDateInputText(), datePickerAction.removeQuotes(expectedDateText));
	}

}
