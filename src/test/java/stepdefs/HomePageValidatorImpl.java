package stepdefs;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import actions.HomePageActions;
import pageobjects.HomePage;
import utils.Utils;

public class HomePageValidatorImpl {
	HomePage homePageObject = null;

	HomePageValidatorImpl(HomePageActions homepageAction) {
		homePageObject = homepageAction;
	}

	WebElement getWebElementByText(String text) {

		switch (text) {
		case "Input Forms":
			return homePageObject.InputForms;

		case "Date Pickers":
			return homePageObject.DatePickers;

		case "Table":
			return homePageObject.Table;

		case "Progress Bars & Sliders":
			return homePageObject.ProgressBarsAndSliders;

		case "Alerts & Modals":
			return homePageObject.ALertsAndModals;

		case "List Box":
			return homePageObject.ListBox;

		case "Others":
			return homePageObject.Others;

		// Input Forms
		case "Simple Form Demo":
			return homePageObject.SimpleFormDemo;

		case "Checkbox Demo":
			return homePageObject.CheckBoxDemo;

		case "Radio Buttons Demo":
			return homePageObject.RadioButtonsDemo;

		case "Select Dropdown List":
			return homePageObject.SelectDropDownList;

		case "Input Form Submit":
			return homePageObject.InputFormSubmit;

		case "JQuery Select Dropdown":
			return homePageObject.JquerySelectDropDown;

		// Date Pickers
		case "Bootstrap Date Picker":
			return homePageObject.BootStrapDatePicker;

		case "JQuery Date Picker":
			return homePageObject.JqueryDatePicker;

		case "Table Pagination":
			return homePageObject.TablePagination;

		case "Table Data Search":
			return homePageObject.TableDataSearch;

		case "Table Filter":
			return homePageObject.TableFilter;

		case "Table Sort & Search":
			return homePageObject.TableSortAndSearch;

		case "Table Data Download":
			return homePageObject.TableDataDownload;

		case "JQuery Download Progress bars":
			return homePageObject.JqueryDownloadProgressBar;

		case "Bootstrap Alerts":
			return homePageObject.BootStrapAlerts;

		case "Bootstrap Modals":
			return homePageObject.BootStraoModals;

		case "Window popup Modal":
			return homePageObject.WindowPopUpModal;

		case "Progress Bar Modal":
			return homePageObject.ProgressBarModal;

		case "Javascript Alerts":
			return homePageObject.JavaScriptAlert;

		case "File Download":
			return homePageObject.FileDownload;

		case "Bootstrap List Box":
			return homePageObject.BootStrapListBox;

		case "JQuery List Box":
			return homePageObject.JqueryLitBox;

		case "Data List Filter":
			return homePageObject.DataListFilter;

		case "Drag and Drop":
			return homePageObject.DragAndDrop;

		case "Dynamic Data Loading":
			return homePageObject.DynamicDataLoading;

		case "Charts Demo":
			return homePageObject.ChartsDemo;

		case "Selenium Easy":
			return homePageObject.SeleniumEasyText;

		case "Menu List":
			return homePageObject.MenuList;

		case "WELCOME TO SELENIUM EASY DEMO":
			return homePageObject.WelcomeText;

		}
		return null;
	}

	public List<WebElement> getSubMenuWebElementsByNodeText(String nodeText) {

		switch (nodeText) {
		case "Input Forms-SubMenu":
			return homePageObject.InputFormSubMenu;

		case "Date Pickers-SubMenu":
			return homePageObject.DatePickersSubMenu;

		case "Table-SubMenu":
			return homePageObject.TableSubMenu;

		case "Progress Bars & Sliders-SubMenu":
			return homePageObject.ProgressBarsAndSlidersSubMenu;

		case "Alerts & Modals-SubMenu":
			return homePageObject.ALertsAndModalsSubMenu;

		case "List Box-SubMenu":
			return homePageObject.ListBoxSubMenu;

		case "Others-SubMenu":
			return homePageObject.OthersSubmenu;

		}
		return null;
	}

	public boolean validateSubMenuItems(String menuItem, List<String> expectedSubMenuList) {

		boolean flag = true;
		List<WebElement> actualElements = getSubMenuWebElementsByNodeText(menuItem);
		if (actualElements.size() == expectedSubMenuList.size()) {
			for (WebElement elem : actualElements) {
				String acualText = elem.findElement(By.tagName("a")).getText().trim();
				if (!expectedSubMenuList.contains(acualText)) {
					flag = false;
					System.out.println(
							"menu list is mismatching\n expected:" + expectedSubMenuList + "\n actual:" + acualText);
				}
			}
		}
		Utils.introduceSleepInMilliSecs(1000);
		return flag;

	}

}
