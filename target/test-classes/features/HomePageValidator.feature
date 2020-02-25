#Author: karthic.kaliappa@gmail.com
@Regression @All @UI
Feature: Homepage validation feature
  As a test user of this website 
  I would like to verify that homepage contains all the WebElements
  So that I can use every functionality provided for learning test automation.

  @1 @validation @Sanity @Smoke
  Scenario: Verify that Menu list is available on home page
    Given I am on the home page of this website
    And I wait till I see "Selenium Easy" logo text on home page
    When I scrolldown until I see "Menu List" table
    Then I should see below menu list under "All Examples" root
      | Input Forms             |
      | Date Pickers            |
      | Table                   |
      | Progress Bars & Sliders |
      | Alerts & Modals         |
      | List Box                |
      | Others                  |
    And I should see the text "WELCOME TO SELENIUM EASY DEMO"

  @2 @Integration
  Scenario Outline: Verify all the child elements of Menu list
    Given I am on the home page of this website
    And I wait till I see "Selenium Easy" logo text on home page
    When I scrolldown until I see "Menu List" table
    And I click on the menu item <MenuItem> node
    Then I should see the child-elements <childElements> under that

    Examples: 
      | MenuItem                  | childElements                                                                                                                      |
      | "Input Forms"             | "Simple Form Demo,Checkbox Demo,Radio Buttons Demo,Select Dropdown List,Input Form Submit,Ajax Form Submit,JQuery Select dropdown" |
      | "Date Pickers"            | "Bootstrap Date Picker,JQuery Date Picker"                                                                                         |
      | "Table"                   | "Table Pagination,Table Data Search,Table Filter,Table Sort & Search,Table Data Download"                                          |
      | "Progress Bars & Sliders" | "JQuery Download Progress bars,Bootstrap Progress bar,Drag & Drop Sliders"                                                         |
      | "Alerts & Modals"         | "Bootstrap Alerts,Bootstrap Modals,Window Popup Modal,Progress Bar Modal,Javascript Alerts,File Download"                          |
      | "List Box"                | "Bootstrap List Box,JQuery List Box,Data List Filter"                                                                              |
      | "Others"                  | "Drag and Drop,Dynamic Data Loading,Charts Demo"                                                                                   |
