#Author: karthic.kaliappa@gmail.com
@Regression @SimpleForm @UI
Feature: SimpleInputForm validation feature
  As a test user of this website 
  I would like to verify that I am able to type text and numbers into Input forms
  So that I the website takes the input and process it

  @1 @validation @Sanity @Smoke
  Scenario Outline: Verify that the text box take the typed text and displays it back
    Given I am on the home page of this website
    And I wait till I see "Selenium Easy" logo text on home page
    When I scrolldown until I see "Menu List" table
    And I click on the menu item "Input Forms" node
    And I click on the menu item "Simple Form Demo" node
    When I enter the message <textMessage> into text input box
    And I click on the Show Message button
    Then I should see the <textMessage> in the output field

    Examples: 
      | textMessage |
      | "God"       |
      | "Karthic"   |
      | "Kavitha"   |
      | "Rakesh"    |
      | "Vivek"     |

  @2 @Integration @Karthic
  Scenario Outline: Verify that we are able to add two numbers typed in the boxes
    Given I am on the home page of this website
    And I wait till I see "Selenium Easy" logo text on home page
    When I scrolldown until I see "Menu List" table
    And I click on the menu item "Input Forms" node
    And I click on the menu item "Simple Form Demo" node
    And I scroll till I see the second input menu
    When I enter the first number <firstNumber> in the first box
    And I enter the second number <secondNumber> in the seond box
    And I click on the Get total button
    Then I should get the total result as <total>

    Examples: 
      | firstNumber | secondNumber | total |
      |           1 |            2 |     3 |
      |           5 |            5 |   100 |
      |          25 |           25 |    50 |
      |         100 |          100 |  2000 |
      |         500 |         1500 |  2000 |
