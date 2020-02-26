#Author: karthic.kaliappa@gmail.com
@Regression @DatePicker @UI
Feature: DatePicker validation feature
  As a test user of this website 
  I would like to verify that I am able to use the Date-picker on the UI
  So that I can selecte a valid date for the input

  @1 @validation @Sanity @Smoke
  Scenario Outline: Verify that the user is able to select a valid date from the Date Picker
    Given I am on the home page of this website
    And I wait till I see "Selenium Easy" logo text on home page
    When I scrolldown until I see "Menu List" table
    And I click on the menu item "Date Pickers" node
    And I click on the menu item "Bootstrap Date Picker" node
    And I click on the Date picker button
    When I select the date <date> from the date picker
    Then I should see the date as <inputDate> in the date field

    Examples: 
      | date          | inputDate    |
      | "03-Jun-2019" | "03/06/2019" |
      | "30-Jan-2018" | "30/01/2018" |
      | "20-Aug-2010" | "20/08/2010" |
      | "09-Dec-2006" | "09/12/2006" |
      | "23-Jun-2003" | "23/06/2003" |

      
      