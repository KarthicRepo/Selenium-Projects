package pageobjects;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class HomePage {
	
	WebDriver driver;
	public HomePage(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath="//a[contains(text(),'Selenium Easy')]")
	public WebElement SeleniumEasyText;
	
	@FindBy(xpath="//li[@class='tree-branch']//ul//li//a[contains(text(),'Charts Demo')]")
	public WebElement RootNode;
	
	@FindBy(xpath="//div[text()='Menu List']")
	public WebElement MenuList;
	
	@FindBy(xpath="//h3[contains(text(),'Welcome to Selenium Easy')]")
	public WebElement WelcomeText;
	
	//@FindBy(xpath="//*[contains(text(),'Creator')]")
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//a[contains(text(),'Input Forms')]")
	public WebElement InputForms;
	
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//a[contains(text(),'Input Forms')]/parent::li/ul/li")
	public List<WebElement> InputFormSubMenu;
	
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//a[contains(text(),'Date pickers')]")
	public WebElement DatePickers;
	
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//a[contains(text(),'Date pickers')]/parent::li/ul/li")
	public List<WebElement> DatePickersSubMenu;
	
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//a[text()='Table']")
	public WebElement Table;
	
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//a[text()='Table']/parent::li/ul/li")
	public List<WebElement>TableSubMenu;
	
	@FindBy(how=How.XPATH, using="//a[contains(text(),'Progress Bars & Sliders')]")
	public WebElement ProgressBarsAndSliders;
	
	@FindBy(how=How.XPATH, using="//a[contains(text(),'Progress Bars & Sliders')]/parent::li/ul/li")
	public List<WebElement> ProgressBarsAndSlidersSubMenu;
	
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//a[contains(text(),'Alerts & Modals')]")
	public WebElement ALertsAndModals;
	
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//a[contains(text(),'Alerts & Modals')]/parent::li/ul/li")
	public List<WebElement> ALertsAndModalsSubMenu;
	
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//a[contains(text(),'List Box')]")
	public WebElement ListBox;
	
	
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//a[contains(text(),'List Box')]/parent::li/ul/li")
	public List<WebElement> ListBoxSubMenu;
	
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//a[text()='Others']")
	public WebElement Others;
	
	
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//a[text()='Others']/parent::li/ul/li")
	public List<WebElement> OthersSubmenu;
	
	
	// Elements under InputForms
	
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//ul//li//a[contains(text(),'Simple Form Demo')]")
	public WebElement SimpleFormDemo;
	
	

	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//ul//li//a[contains(text(),'Checkbox Demo')]")
	public WebElement CheckBoxDemo;
	
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//ul//li//a[contains(text(),'Radio Buttons Demo')]")
	public WebElement RadioButtonsDemo;
	
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//ul//li//a[contains(text(),'Select Dropdown List')]")
	public WebElement SelectDropDownList;
	
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//ul//li//a[contains(text(),'Input Form Submit')]")
	public WebElement InputFormSubmit;
	
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//ul//li//a[contains(text(),'Ajax Form Submit')]")
	public WebElement AjaxFormSubmit;
	
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//ul//li//a[contains(text(),'JQuery Select dropdown')]")
	public WebElement JquerySelectDropDown;
	

	
	//Elements under DatePickers
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//ul//li//a[contains(text(),'Bootstrap Date Picker')]")
	public WebElement BootStrapDatePicker;
	
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//ul//li//a[contains(text(),'JQuery Date Picker')]")
	public WebElement JqueryDatePicker;
	
	
	//Elements under Table 
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//ul//li//a[contains(text(),'Table Pagination')]")
	public WebElement TablePagination;
	
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//ul//li//a[contains(text(),'Table Data Search')]")
	public WebElement TableDataSearch;
	
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//ul//li//a[contains(text(),'Table Filter')]")
	public WebElement TableFilter;
	
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//ul//li//a[contains(text(),'Table Sort & Search')]")
	public WebElement TableSortAndSearch;
	
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//ul//li//a[contains(text(),'Table Data Download')]")
	public WebElement TableDataDownload;
	
	
	//Elements under Progress Bar and 	Sliders
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//ul//li//a[contains(text(),'JQuery Download Progress bars')]")
	public WebElement JqueryDownloadProgressBar;
	
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//ul//li//a[contains(text(),'Bootstrap Progress bar')]")
	public WebElement BootStrapPgrogressBar;
	
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//ul//li//a[contains(text(),'Drag & Drop Sliders')]")
	public WebElement DragAndDropSliders;
	
	
	//Elements under Alerts and Modals
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//ul//li//a[contains(text(),'Bootstrap Alerts')]")
	public WebElement BootStrapAlerts;
	
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//ul//li//a[contains(text(),'Bootstrap Modals')]")
	public WebElement BootStraoModals;
	
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//ul//li//a[contains(text(),'Window Popup Modal')]")
	public WebElement WindowPopUpModal;
	
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//ul//li//a[contains(text(),'Progress Bar Modal')]")
	public WebElement ProgressBarModal;
	
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//ul//li//a[contains(text(),'Javascript Alerts')]")
	public WebElement JavaScriptAlert;
	
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//ul//li//a[contains(text(),'File Download')]")
	public WebElement FileDownload;
	
	
	
	//Elements under ListBox
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//ul//li//a[contains(text(),'Bootstrap List Box')]")
	public WebElement BootStrapListBox;
	
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//ul//li//a[contains(text(),'JQuery List Box')]")
	public WebElement JqueryLitBox;
	
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//ul//li//a[contains(text(),'Data List Filter')]")
	public WebElement DataListFilter;
	
	
	//Elements under Others
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//ul//li//a[contains(text(),'Drag and Drop')]")
	public WebElement DragAndDrop;
	
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//ul//li//a[contains(text(),'Dynamic Data Loading')]")
	public WebElement DynamicDataLoading;
	
	@FindBy(how=How.XPATH, using="//li[@class='tree-branch']//ul//li//a[contains(text(),'Charts Demo')]")
	public WebElement ChartsDemo;
	
	
	
	
	
	
	
}
