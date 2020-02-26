package stepdefs;

import org.testng.Assert;

import actions.SimpleInputFormActions;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageobjects.SimpleInputFormPage;

public class SimpleInputFormStepDefn {
	
	SimpleInputFormPage simpleInputFormPage = new SimpleInputFormPage();
	SimpleInputFormActions simpleInputFormActions = new SimpleInputFormActions(simpleInputFormPage);

	
	@When("^I enter the message \"([^\"]*)\" into text input box$")
	public void i_enter_the_message_into_text_input_box(String message) throws Throwable {
		simpleInputFormActions.typeMessage(message);
	}

	@When("^I click on the Show Message button$")
	public void i_click_on_the_Show_Message_button() throws Throwable {
		simpleInputFormActions.clickOnShowMessageButton();
	}

	@When("^I click on the Get total button$")
	public void i_click_on_the_Get_total_button() throws Throwable {
		simpleInputFormActions.clickOnTotalButton();
	}

	@Then("^I should see the \"([^\"]*)\" in the output field$")
	public void i_should_see_the_in_the_output_field(String message) throws Throwable {
		String expectedMessage=message.replaceAll("\"", "").trim();
		String actualMessage=simpleInputFormActions.getDisplayedText().trim();
		Assert.assertEquals(actualMessage, expectedMessage);
	}

	@When("^I scroll till I see the second input menu$")
	public void i_scroll_till_I_see_the_second_input_menu() throws Throwable {
		simpleInputFormActions.scrollToAdditionForm();
	}

	@When("^I enter the first number (\\d+) in the first box$")
	public void i_enter_the_first_number_in_the_first_box(int num1) throws Throwable {
		simpleInputFormActions.enterNumber1(Integer.toString(num1));
	}

	@When("^I enter the second number (\\d+) in the seond box$")
	public void i_enter_the_second_number_in_the_seond_box(int num2) throws Throwable {
		simpleInputFormActions.enterNumber2(Integer.toString(num2));
	}

	@Then("^I should get the total result as (\\d+)$")
	public void i_should_get_the_total_result_as(int total) throws Throwable {
		
		String expectedTotal=(""+total).replaceAll("\"", "").trim();
		String actualTotal=simpleInputFormActions.getTotalValue().trim();
		Assert.assertEquals(actualTotal, expectedTotal);

	}
	
}
