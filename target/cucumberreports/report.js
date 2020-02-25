$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/SimpleInputForm.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: karthic.kaliappa@gmail.com"
    }
  ],
  "line": 3,
  "name": "SimpleInputForm validation feature",
  "description": "As a test user of this website \nI would like to verify that I am able to type text and numbers into Input forms\nSo that I the website takes the input and process it",
  "id": "simpleinputform-validation-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@Regression"
    },
    {
      "line": 2,
      "name": "@SimpleForm"
    },
    {
      "line": 2,
      "name": "@UI"
    }
  ]
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Verify that we are able to add two numbers typed in the boxes",
  "description": "",
  "id": "simpleinputform-validation-feature;verify-that-we-are-able-to-add-two-numbers-typed-in-the-boxes",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@2"
    },
    {
      "line": 27,
      "name": "@Integration"
    },
    {
      "line": 27,
      "name": "@Karthic"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I am on the home page of this website",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I wait till I see \"Selenium Easy\" logo text on home page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I scrolldown until I see \"Menu List\" table",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I click on the menu item \"Input Forms\" node",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on the menu item \"Simple Form Demo\" node",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I scroll till I see the second input menu",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter the first number \u003cfirstNumber\u003e in the first box",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I enter the second number \u003csecondNumber\u003e in the seond box",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on the Get total button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should get the total result as \u003ctotal\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "simpleinputform-validation-feature;verify-that-we-are-able-to-add-two-numbers-typed-in-the-boxes;",
  "rows": [
    {
      "cells": [
        "firstNumber",
        "secondNumber",
        "total"
      ],
      "line": 41,
      "id": "simpleinputform-validation-feature;verify-that-we-are-able-to-add-two-numbers-typed-in-the-boxes;;1"
    },
    {
      "cells": [
        "1",
        "2",
        "3"
      ],
      "line": 42,
      "id": "simpleinputform-validation-feature;verify-that-we-are-able-to-add-two-numbers-typed-in-the-boxes;;2"
    },
    {
      "cells": [
        "5",
        "5",
        "100"
      ],
      "line": 43,
      "id": "simpleinputform-validation-feature;verify-that-we-are-able-to-add-two-numbers-typed-in-the-boxes;;3"
    },
    {
      "cells": [
        "25",
        "25",
        "50"
      ],
      "line": 44,
      "id": "simpleinputform-validation-feature;verify-that-we-are-able-to-add-two-numbers-typed-in-the-boxes;;4"
    },
    {
      "cells": [
        "100",
        "100",
        "2000"
      ],
      "line": 45,
      "id": "simpleinputform-validation-feature;verify-that-we-are-able-to-add-two-numbers-typed-in-the-boxes;;5"
    },
    {
      "cells": [
        "500",
        "1500",
        "2000"
      ],
      "line": 46,
      "id": "simpleinputform-validation-feature;verify-that-we-are-able-to-add-two-numbers-typed-in-the-boxes;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8684365755,
  "status": "passed"
});
formatter.before({
  "duration": 209726264,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Verify that we are able to add two numbers typed in the boxes",
  "description": "",
  "id": "simpleinputform-validation-feature;verify-that-we-are-able-to-add-two-numbers-typed-in-the-boxes;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@SimpleForm"
    },
    {
      "line": 27,
      "name": "@2"
    },
    {
      "line": 2,
      "name": "@UI"
    },
    {
      "line": 2,
      "name": "@Regression"
    },
    {
      "line": 27,
      "name": "@Integration"
    },
    {
      "line": 27,
      "name": "@Karthic"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I am on the home page of this website",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I wait till I see \"Selenium Easy\" logo text on home page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I scrolldown until I see \"Menu List\" table",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I click on the menu item \"Input Forms\" node",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on the menu item \"Simple Form Demo\" node",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I scroll till I see the second input menu",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter the first number 1 in the first box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I enter the second number 2 in the seond box",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on the Get total button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should get the total result as 3",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefn.i_am_on_the_home_page_of_this_website()"
});
formatter.result({
  "duration": 301207080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium Easy",
      "offset": 19
    }
  ],
  "location": "HomePageStepDefn.i_wait_till_I_see_logo_text_on_home_page(String)"
});
formatter.result({
  "duration": 140539288,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu List",
      "offset": 26
    }
  ],
  "location": "HomePageStepDefn.i_scrolldown_until_I_see_table(String)"
});
formatter.result({
  "duration": 536112036,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Input Forms",
      "offset": 26
    }
  ],
  "location": "HomePageStepDefn.i_click_on_the_menu_item_node(String)"
});
formatter.result({
  "duration": 87886146,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Simple Form Demo",
      "offset": 26
    }
  ],
  "location": "HomePageStepDefn.i_click_on_the_menu_item_node(String)"
});
formatter.result({
  "duration": 501825457,
  "status": "passed"
});
formatter.match({
  "location": "SimpleInputFormStepDefn.i_scroll_till_I_see_the_second_input_menu()"
});
formatter.result({
  "duration": 544286589,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 25
    }
  ],
  "location": "SimpleInputFormStepDefn.i_enter_the_first_number_in_the_first_box(int)"
});
formatter.result({
  "duration": 1192715824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 26
    }
  ],
  "location": "SimpleInputFormStepDefn.i_enter_the_second_number_in_the_seond_box(int)"
});
formatter.result({
  "duration": 1150666812,
  "status": "passed"
});
formatter.match({
  "location": "SimpleInputFormStepDefn.i_click_on_the_Get_total_button()"
});
formatter.result({
  "duration": 71735827,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 33
    }
  ],
  "location": "SimpleInputFormStepDefn.i_should_get_the_total_result_as(int)"
});
formatter.result({
  "duration": 33247063,
  "status": "passed"
});
formatter.after({
  "duration": 966545907,
  "status": "passed"
});
formatter.after({
  "duration": 31030,
  "status": "passed"
});
formatter.before({
  "duration": 7501877335,
  "status": "passed"
});
formatter.before({
  "duration": 215487239,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Verify that we are able to add two numbers typed in the boxes",
  "description": "",
  "id": "simpleinputform-validation-feature;verify-that-we-are-able-to-add-two-numbers-typed-in-the-boxes;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@SimpleForm"
    },
    {
      "line": 27,
      "name": "@2"
    },
    {
      "line": 2,
      "name": "@UI"
    },
    {
      "line": 2,
      "name": "@Regression"
    },
    {
      "line": 27,
      "name": "@Integration"
    },
    {
      "line": 27,
      "name": "@Karthic"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I am on the home page of this website",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I wait till I see \"Selenium Easy\" logo text on home page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I scrolldown until I see \"Menu List\" table",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I click on the menu item \"Input Forms\" node",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on the menu item \"Simple Form Demo\" node",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I scroll till I see the second input menu",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter the first number 5 in the first box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I enter the second number 5 in the seond box",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on the Get total button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should get the total result as 100",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefn.i_am_on_the_home_page_of_this_website()"
});
formatter.result({
  "duration": 29491422,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium Easy",
      "offset": 19
    }
  ],
  "location": "HomePageStepDefn.i_wait_till_I_see_logo_text_on_home_page(String)"
});
formatter.result({
  "duration": 70739463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu List",
      "offset": 26
    }
  ],
  "location": "HomePageStepDefn.i_scrolldown_until_I_see_table(String)"
});
formatter.result({
  "duration": 532900880,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Input Forms",
      "offset": 26
    }
  ],
  "location": "HomePageStepDefn.i_click_on_the_menu_item_node(String)"
});
formatter.result({
  "duration": 90817542,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Simple Form Demo",
      "offset": 26
    }
  ],
  "location": "HomePageStepDefn.i_click_on_the_menu_item_node(String)"
});
formatter.result({
  "duration": 549182108,
  "status": "passed"
});
formatter.match({
  "location": "SimpleInputFormStepDefn.i_scroll_till_I_see_the_second_input_menu()"
});
formatter.result({
  "duration": 533899669,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 25
    }
  ],
  "location": "SimpleInputFormStepDefn.i_enter_the_first_number_in_the_first_box(int)"
});
formatter.result({
  "duration": 1147849841,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 26
    }
  ],
  "location": "SimpleInputFormStepDefn.i_enter_the_second_number_in_the_seond_box(int)"
});
formatter.result({
  "duration": 1124967393,
  "status": "passed"
});
formatter.match({
  "location": "SimpleInputFormStepDefn.i_click_on_the_Get_total_button()"
});
formatter.result({
  "duration": 61069635,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 33
    }
  ],
  "location": "SimpleInputFormStepDefn.i_should_get_the_total_result_as(int)"
});
formatter.result({
  "duration": 31793485,
  "error_message": "java.lang.AssertionError: expected [100] but found [10]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\r\n\tat org.testng.Assert.assertEquals(Assert.java:116)\r\n\tat org.testng.Assert.assertEquals(Assert.java:190)\r\n\tat org.testng.Assert.assertEquals(Assert.java:200)\r\n\tat stepdefs.SimpleInputFormStepDefn.i_should_get_the_total_result_as(SimpleInputFormStepDefn.java:75)\r\n\tat ✽.Then I should get the total result as 100(features/SimpleInputForm.feature:38)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 2402306329,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 5573170496,
  "status": "passed"
});
formatter.before({
  "duration": 8539993736,
  "status": "passed"
});
formatter.before({
  "duration": 238437080,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Verify that we are able to add two numbers typed in the boxes",
  "description": "",
  "id": "simpleinputform-validation-feature;verify-that-we-are-able-to-add-two-numbers-typed-in-the-boxes;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@SimpleForm"
    },
    {
      "line": 27,
      "name": "@2"
    },
    {
      "line": 2,
      "name": "@UI"
    },
    {
      "line": 2,
      "name": "@Regression"
    },
    {
      "line": 27,
      "name": "@Integration"
    },
    {
      "line": 27,
      "name": "@Karthic"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I am on the home page of this website",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I wait till I see \"Selenium Easy\" logo text on home page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I scrolldown until I see \"Menu List\" table",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I click on the menu item \"Input Forms\" node",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on the menu item \"Simple Form Demo\" node",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I scroll till I see the second input menu",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter the first number 25 in the first box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I enter the second number 25 in the seond box",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on the Get total button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should get the total result as 50",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefn.i_am_on_the_home_page_of_this_website()"
});
formatter.result({
  "duration": 8697220,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium Easy",
      "offset": 19
    }
  ],
  "location": "HomePageStepDefn.i_wait_till_I_see_logo_text_on_home_page(String)"
});
formatter.result({
  "duration": 62138727,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu List",
      "offset": 26
    }
  ],
  "location": "HomePageStepDefn.i_scrolldown_until_I_see_table(String)"
});
formatter.result({
  "duration": 529344998,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Input Forms",
      "offset": 26
    }
  ],
  "location": "HomePageStepDefn.i_click_on_the_menu_item_node(String)"
});
formatter.result({
  "duration": 81228685,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Simple Form Demo",
      "offset": 26
    }
  ],
  "location": "HomePageStepDefn.i_click_on_the_menu_item_node(String)"
});
formatter.result({
  "duration": 584485415,
  "status": "passed"
});
formatter.match({
  "location": "SimpleInputFormStepDefn.i_scroll_till_I_see_the_second_input_menu()"
});
formatter.result({
  "duration": 549927322,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 25
    }
  ],
  "location": "SimpleInputFormStepDefn.i_enter_the_first_number_in_the_first_box(int)"
});
formatter.result({
  "duration": 1182276055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 26
    }
  ],
  "location": "SimpleInputFormStepDefn.i_enter_the_second_number_in_the_seond_box(int)"
});
formatter.result({
  "duration": 1177370353,
  "status": "passed"
});
formatter.match({
  "location": "SimpleInputFormStepDefn.i_click_on_the_Get_total_button()"
});
formatter.result({
  "duration": 75566134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 33
    }
  ],
  "location": "SimpleInputFormStepDefn.i_should_get_the_total_result_as(int)"
});
formatter.result({
  "duration": 37516157,
  "status": "passed"
});
formatter.after({
  "duration": 985268350,
  "status": "passed"
});
formatter.after({
  "duration": 21333,
  "status": "passed"
});
formatter.before({
  "duration": 9626318183,
  "status": "passed"
});
formatter.before({
  "duration": 178719203,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Verify that we are able to add two numbers typed in the boxes",
  "description": "",
  "id": "simpleinputform-validation-feature;verify-that-we-are-able-to-add-two-numbers-typed-in-the-boxes;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@SimpleForm"
    },
    {
      "line": 27,
      "name": "@2"
    },
    {
      "line": 2,
      "name": "@UI"
    },
    {
      "line": 2,
      "name": "@Regression"
    },
    {
      "line": 27,
      "name": "@Integration"
    },
    {
      "line": 27,
      "name": "@Karthic"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I am on the home page of this website",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I wait till I see \"Selenium Easy\" logo text on home page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I scrolldown until I see \"Menu List\" table",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I click on the menu item \"Input Forms\" node",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on the menu item \"Simple Form Demo\" node",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I scroll till I see the second input menu",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter the first number 100 in the first box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I enter the second number 100 in the seond box",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on the Get total button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should get the total result as 2000",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefn.i_am_on_the_home_page_of_this_website()"
});
formatter.result({
  "duration": 9642676,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium Easy",
      "offset": 19
    }
  ],
  "location": "HomePageStepDefn.i_wait_till_I_see_logo_text_on_home_page(String)"
});
formatter.result({
  "duration": 49297017,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu List",
      "offset": 26
    }
  ],
  "location": "HomePageStepDefn.i_scrolldown_until_I_see_table(String)"
});
formatter.result({
  "duration": 522810689,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Input Forms",
      "offset": 26
    }
  ],
  "location": "HomePageStepDefn.i_click_on_the_menu_item_node(String)"
});
formatter.result({
  "duration": 67744066,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Simple Form Demo",
      "offset": 26
    }
  ],
  "location": "HomePageStepDefn.i_click_on_the_menu_item_node(String)"
});
formatter.result({
  "duration": 478289919,
  "status": "passed"
});
formatter.match({
  "location": "SimpleInputFormStepDefn.i_scroll_till_I_see_the_second_input_menu()"
});
formatter.result({
  "duration": 532993487,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 25
    }
  ],
  "location": "SimpleInputFormStepDefn.i_enter_the_first_number_in_the_first_box(int)"
});
formatter.result({
  "duration": 1154526696,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 26
    }
  ],
  "location": "SimpleInputFormStepDefn.i_enter_the_second_number_in_the_seond_box(int)"
});
formatter.result({
  "duration": 1132493220,
  "status": "passed"
});
formatter.match({
  "location": "SimpleInputFormStepDefn.i_click_on_the_Get_total_button()"
});
formatter.result({
  "duration": 59709634,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 33
    }
  ],
  "location": "SimpleInputFormStepDefn.i_should_get_the_total_result_as(int)"
});
formatter.result({
  "duration": 33038093,
  "error_message": "java.lang.AssertionError: expected [2000] but found [200]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\r\n\tat org.testng.Assert.assertEquals(Assert.java:116)\r\n\tat org.testng.Assert.assertEquals(Assert.java:190)\r\n\tat org.testng.Assert.assertEquals(Assert.java:200)\r\n\tat stepdefs.SimpleInputFormStepDefn.i_should_get_the_total_result_as(SimpleInputFormStepDefn.java:75)\r\n\tat ✽.Then I should get the total result as 2000(features/SimpleInputForm.feature:38)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 2573532192,
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 5751564850,
  "status": "passed"
});
formatter.before({
  "duration": 16148674568,
  "status": "passed"
});
formatter.before({
  "duration": 335150870,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Verify that we are able to add two numbers typed in the boxes",
  "description": "",
  "id": "simpleinputform-validation-feature;verify-that-we-are-able-to-add-two-numbers-typed-in-the-boxes;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@SimpleForm"
    },
    {
      "line": 27,
      "name": "@2"
    },
    {
      "line": 2,
      "name": "@UI"
    },
    {
      "line": 2,
      "name": "@Regression"
    },
    {
      "line": 27,
      "name": "@Integration"
    },
    {
      "line": 27,
      "name": "@Karthic"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I am on the home page of this website",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I wait till I see \"Selenium Easy\" logo text on home page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I scrolldown until I see \"Menu List\" table",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I click on the menu item \"Input Forms\" node",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on the menu item \"Simple Form Demo\" node",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I scroll till I see the second input menu",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter the first number 500 in the first box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I enter the second number 1500 in the seond box",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on the Get total button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should get the total result as 2000",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefn.i_am_on_the_home_page_of_this_website()"
});
formatter.result({
  "duration": 8021826,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium Easy",
      "offset": 19
    }
  ],
  "location": "HomePageStepDefn.i_wait_till_I_see_logo_text_on_home_page(String)"
});
formatter.result({
  "duration": 49398836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu List",
      "offset": 26
    }
  ],
  "location": "HomePageStepDefn.i_scrolldown_until_I_see_table(String)"
});
formatter.result({
  "duration": 524478569,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Input Forms",
      "offset": 26
    }
  ],
  "location": "HomePageStepDefn.i_click_on_the_menu_item_node(String)"
});
formatter.result({
  "duration": 79600562,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Simple Form Demo",
      "offset": 26
    }
  ],
  "location": "HomePageStepDefn.i_click_on_the_menu_item_node(String)"
});
formatter.result({
  "duration": 677374233,
  "status": "passed"
});
formatter.match({
  "location": "SimpleInputFormStepDefn.i_scroll_till_I_see_the_second_input_menu()"
});
formatter.result({
  "duration": 536316157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 25
    }
  ],
  "location": "SimpleInputFormStepDefn.i_enter_the_first_number_in_the_first_box(int)"
});
formatter.result({
  "duration": 1167384405,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1500",
      "offset": 26
    }
  ],
  "location": "SimpleInputFormStepDefn.i_enter_the_second_number_in_the_seond_box(int)"
});
formatter.result({
  "duration": 1132310916,
  "status": "passed"
});
formatter.match({
  "location": "SimpleInputFormStepDefn.i_click_on_the_Get_total_button()"
});
formatter.result({
  "duration": 50997868,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 33
    }
  ],
  "location": "SimpleInputFormStepDefn.i_should_get_the_total_result_as(int)"
});
formatter.result({
  "duration": 26928995,
  "status": "passed"
});
formatter.after({
  "duration": 889151408,
  "status": "passed"
});
formatter.after({
  "duration": 28606,
  "status": "passed"
});
});