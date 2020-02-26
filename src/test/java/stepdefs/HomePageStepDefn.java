package stepdefs;

import java.io.File;
import java.util.Arrays;
import java.util.List;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.Augmenter;
import org.testng.Assert;

import actions.DriverManager;
import actions.HomePageActions;
import cucumber.api.DataTable;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utils.ExtentManager;
import utils.ExtentTestManager;
import utils.ScenarioCacheManager;
import utils.SeleniumDriver;
import utils.Utils;

public class HomePageStepDefn{

	ScenarioCacheManager scenarioCacheManager= DriverManager.getScenarioCache();
	HomePageActions homePgActions= new HomePageActions();
	HomePageValidatorImpl homePgValidator = new HomePageValidatorImpl(homePgActions);
	String tempMenuItem  = null;

	
	@Given("^I am on the home page of this website$")
	public void i_am_on_the_home_page_of_this_website() throws Throwable {
		boolean flag = homePgActions.getCurrentPageTitle().contains(homePgActions.getExpectedPageTitle());
		Assert.assertTrue(flag, "Looks like the page did not land on the right page as the page title did not match");
	}

	@Given("^I wait till I see \"([^\"]*)\" logo text on home page$")
	public void i_wait_till_I_see_logo_text_on_home_page(String pageText) throws Throwable {
		Assert.assertTrue(homePgActions.isWebElementVisible(homePgValidator.getWebElementByText(pageText)));
	}

	@When("^I scrolldown until I see \"([^\"]*)\" table$")
	public void i_scrolldown_until_I_see_table(String menuText) throws Throwable {
		homePgActions.scrollToWebElement(homePgValidator.getWebElementByText(menuText));
	}

	@Then("^I should see below menu list under \"([^\"]*)\" root$")
	public void i_should_see_below_menu_list_under_root(String arg1, DataTable dataTable) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		// For automatic transformation, change DataTable to one of
		// List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
		// E,K,V must be a scalar (String, Integer, Date, enum etc)

		List<String> expectedMenuList = dataTable.asList(String.class);

		for (String menuItem : expectedMenuList) {
			Assert.assertTrue(homePgActions.isWebElementVisible(homePgValidator.getWebElementByText(menuItem)));
		}
	}

	@Then("^I should see the text \"([^\"]*)\"$")
	public void i_should_see_the_text(String welcomeText) throws Throwable {
		Assert.assertTrue(homePgActions.isWebElementVisible(homePgValidator.getWebElementByText(welcomeText)));
	}

	@When("^I click on the menu item \"([^\"]*)\" node$")
	public void i_click_on_the_menu_item_node(String menuText) throws Throwable {
		homePgActions.clickOnWebElementByText(homePgValidator.getWebElementByText(menuText.replaceAll("\"", "").trim()));
		tempMenuItem = menuText;
	}

	@Then("^I should see the child-elements \"([^\"]*)\" under that$")
	public void i_should_see_the_child_elements_under_that(String subMenuItems) throws Throwable {
		List<String> expectedSubMenuList = Arrays.asList(subMenuItems.trim().split(","));
		boolean flag=homePgValidator.validateSubMenuItems(tempMenuItem+"-SubMenu",expectedSubMenuList);
		Assert.assertTrue(flag,"Some sub-menu items did not match.. please check test logs");
	}
	
}
