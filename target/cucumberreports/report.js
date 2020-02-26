$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/DatePicker.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: karthic.kaliappa@gmail.com"
    }
  ],
  "line": 3,
  "name": "DatePicker validation feature",
  "description": "As a test user of this website \nI would like to verify that I am able to use the Date-picker on the UI\nSo that I can selecte a valid date for the input",
  "id": "datepicker-validation-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@Regression"
    },
    {
      "line": 2,
      "name": "@DatePicker"
    },
    {
      "line": 2,
      "name": "@UI"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Verify that the user is able to select a valid date from the Date Picker",
  "description": "",
  "id": "datepicker-validation-feature;verify-that-the-user-is-able-to-select-a-valid-date-from-the-date-picker",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@1"
    },
    {
      "line": 8,
      "name": "@validation"
    },
    {
      "line": 8,
      "name": "@Sanity"
    },
    {
      "line": 8,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on the home page of this website",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I wait till I see \"Selenium Easy\" logo text on home page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I scrolldown until I see \"Menu List\" table",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on the menu item \"Date Pickers\" node",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on the menu item \"Bootstrap Date Picker\" node",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on the Date picker button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select the date \u003cdate\u003e from the date picker",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I should see the date as \u003cinputDate\u003e in the date field",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "datepicker-validation-feature;verify-that-the-user-is-able-to-select-a-valid-date-from-the-date-picker;",
  "rows": [
    {
      "cells": [
        "date",
        "inputDate"
      ],
      "line": 20,
      "id": "datepicker-validation-feature;verify-that-the-user-is-able-to-select-a-valid-date-from-the-date-picker;;1"
    },
    {
      "cells": [
        "\"03-Jun-2019\"",
        "\"03/06/2019\""
      ],
      "line": 21,
      "id": "datepicker-validation-feature;verify-that-the-user-is-able-to-select-a-valid-date-from-the-date-picker;;2"
    },
    {
      "cells": [
        "\"30-Jan-2018\"",
        "\"30/01/2018\""
      ],
      "line": 22,
      "id": "datepicker-validation-feature;verify-that-the-user-is-able-to-select-a-valid-date-from-the-date-picker;;3"
    },
    {
      "cells": [
        "\"20-Aug-2010\"",
        "\"20/08/2010\""
      ],
      "line": 23,
      "id": "datepicker-validation-feature;verify-that-the-user-is-able-to-select-a-valid-date-from-the-date-picker;;4"
    },
    {
      "cells": [
        "\"09-Dec-2006\"",
        "\"09/12/2006\""
      ],
      "line": 24,
      "id": "datepicker-validation-feature;verify-that-the-user-is-able-to-select-a-valid-date-from-the-date-picker;;5"
    },
    {
      "cells": [
        "\"23-Jun-2003\"",
        "\"23/06/2003\""
      ],
      "line": 25,
      "id": "datepicker-validation-feature;verify-that-the-user-is-able-to-select-a-valid-date-from-the-date-picker;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8865765688,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify that the user is able to select a valid date from the Date Picker",
  "description": "",
  "id": "datepicker-validation-feature;verify-that-the-user-is-able-to-select-a-valid-date-from-the-date-picker;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@1"
    },
    {
      "line": 2,
      "name": "@UI"
    },
    {
      "line": 8,
      "name": "@Smoke"
    },
    {
      "line": 8,
      "name": "@Sanity"
    },
    {
      "line": 2,
      "name": "@Regression"
    },
    {
      "line": 2,
      "name": "@DatePicker"
    },
    {
      "line": 8,
      "name": "@validation"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on the home page of this website",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I wait till I see \"Selenium Easy\" logo text on home page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I scrolldown until I see \"Menu List\" table",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on the menu item \"Date Pickers\" node",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on the menu item \"Bootstrap Date Picker\" node",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on the Date picker button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select the date \"03-Jun-2019\" from the date picker",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I should see the date as \"03/06/2019\" in the date field",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefn.i_am_on_the_home_page_of_this_website()"
});
formatter.result({
  "duration": 325242498,
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
  "duration": 122959635,
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
  "duration": 534481973,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Date Pickers",
      "offset": 26
    }
  ],
  "location": "HomePageStepDefn.i_click_on_the_menu_item_node(String)"
});
formatter.result({
  "duration": 116032597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bootstrap Date Picker",
      "offset": 26
    }
  ],
  "location": "HomePageStepDefn.i_click_on_the_menu_item_node(String)"
});
formatter.result({
  "duration": 956051351,
  "status": "passed"
});
formatter.match({
  "location": "DatePickerStepDefn.i_click_on_the_Date_picker_button()"
});
formatter.result({
  "duration": 1203070258,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "03-Jun-2019",
      "offset": 19
    }
  ],
  "location": "DatePickerStepDefn.i_select_the_date_from_the_date_picker(String)"
});
formatter.result({
  "duration": 7009792979,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "03/06/2019",
      "offset": 26
    }
  ],
  "location": "DatePickerStepDefn.i_should_see_the_date_as_in_the_date_field(String)"
});
formatter.result({
  "duration": 1050902838,
  "status": "passed"
});
formatter.after({
  "duration": 954734501,
  "status": "passed"
});
formatter.before({
  "duration": 14352374160,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify that the user is able to select a valid date from the Date Picker",
  "description": "",
  "id": "datepicker-validation-feature;verify-that-the-user-is-able-to-select-a-valid-date-from-the-date-picker;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@1"
    },
    {
      "line": 2,
      "name": "@UI"
    },
    {
      "line": 8,
      "name": "@Smoke"
    },
    {
      "line": 8,
      "name": "@Sanity"
    },
    {
      "line": 2,
      "name": "@Regression"
    },
    {
      "line": 2,
      "name": "@DatePicker"
    },
    {
      "line": 8,
      "name": "@validation"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on the home page of this website",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I wait till I see \"Selenium Easy\" logo text on home page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I scrolldown until I see \"Menu List\" table",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on the menu item \"Date Pickers\" node",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on the menu item \"Bootstrap Date Picker\" node",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on the Date picker button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select the date \"30-Jan-2018\" from the date picker",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I should see the date as \"30/01/2018\" in the date field",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefn.i_am_on_the_home_page_of_this_website()"
});
formatter.result({
  "duration": 10425222,
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
  "duration": 44942104,
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
  "duration": 524571661,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Date Pickers",
      "offset": 26
    }
  ],
  "location": "HomePageStepDefn.i_click_on_the_menu_item_node(String)"
});
formatter.result({
  "duration": 98604217,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bootstrap Date Picker",
      "offset": 26
    }
  ],
  "location": "HomePageStepDefn.i_click_on_the_menu_item_node(String)"
});
formatter.result({
  "duration": 898428507,
  "status": "passed"
});
formatter.match({
  "location": "DatePickerStepDefn.i_click_on_the_Date_picker_button()"
});
formatter.result({
  "duration": 1131475037,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30-Jan-2018",
      "offset": 19
    }
  ],
  "location": "DatePickerStepDefn.i_select_the_date_from_the_date_picker(String)"
});
formatter.result({
  "duration": 7476989069,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30/01/2018",
      "offset": 26
    }
  ],
  "location": "DatePickerStepDefn.i_should_see_the_date_as_in_the_date_field(String)"
});
formatter.result({
  "duration": 1043438588,
  "status": "passed"
});
formatter.after({
  "duration": 932157025,
  "status": "passed"
});
formatter.before({
  "duration": 7635340252,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify that the user is able to select a valid date from the Date Picker",
  "description": "",
  "id": "datepicker-validation-feature;verify-that-the-user-is-able-to-select-a-valid-date-from-the-date-picker;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@1"
    },
    {
      "line": 2,
      "name": "@UI"
    },
    {
      "line": 8,
      "name": "@Smoke"
    },
    {
      "line": 8,
      "name": "@Sanity"
    },
    {
      "line": 2,
      "name": "@Regression"
    },
    {
      "line": 2,
      "name": "@DatePicker"
    },
    {
      "line": 8,
      "name": "@validation"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on the home page of this website",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I wait till I see \"Selenium Easy\" logo text on home page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I scrolldown until I see \"Menu List\" table",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on the menu item \"Date Pickers\" node",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on the menu item \"Bootstrap Date Picker\" node",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on the Date picker button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select the date \"20-Aug-2010\" from the date picker",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I should see the date as \"20/08/2010\" in the date field",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefn.i_am_on_the_home_page_of_this_website()"
});
formatter.result({
  "duration": 7471522,
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
  "duration": 59412906,
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
  "duration": 525853116,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Date Pickers",
      "offset": 26
    }
  ],
  "location": "HomePageStepDefn.i_click_on_the_menu_item_node(String)"
});
formatter.result({
  "duration": 128944125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bootstrap Date Picker",
      "offset": 26
    }
  ],
  "location": "HomePageStepDefn.i_click_on_the_menu_item_node(String)"
});
formatter.result({
  "duration": 1222649913,
  "status": "passed"
});
formatter.match({
  "location": "DatePickerStepDefn.i_click_on_the_Date_picker_button()"
});
formatter.result({
  "duration": 1198193162,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20-Aug-2010",
      "offset": 19
    }
  ],
  "location": "DatePickerStepDefn.i_select_the_date_from_the_date_picker(String)"
});
formatter.result({
  "duration": 8418611799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20/08/2010",
      "offset": 26
    }
  ],
  "location": "DatePickerStepDefn.i_should_see_the_date_as_in_the_date_field(String)"
});
formatter.result({
  "duration": 1061201030,
  "status": "passed"
});
formatter.after({
  "duration": 943131096,
  "status": "passed"
});
formatter.before({
  "duration": 12567234490,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify that the user is able to select a valid date from the Date Picker",
  "description": "",
  "id": "datepicker-validation-feature;verify-that-the-user-is-able-to-select-a-valid-date-from-the-date-picker;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@1"
    },
    {
      "line": 2,
      "name": "@UI"
    },
    {
      "line": 8,
      "name": "@Smoke"
    },
    {
      "line": 8,
      "name": "@Sanity"
    },
    {
      "line": 2,
      "name": "@Regression"
    },
    {
      "line": 2,
      "name": "@DatePicker"
    },
    {
      "line": 8,
      "name": "@validation"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on the home page of this website",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I wait till I see \"Selenium Easy\" logo text on home page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I scrolldown until I see \"Menu List\" table",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on the menu item \"Date Pickers\" node",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on the menu item \"Bootstrap Date Picker\" node",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on the Date picker button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select the date \"09-Dec-2006\" from the date picker",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I should see the date as \"09/12/2006\" in the date field",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefn.i_am_on_the_home_page_of_this_website()"
});
formatter.result({
  "duration": 6621097,
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
  "duration": 45180165,
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
  "duration": 526466450,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Date Pickers",
      "offset": 26
    }
  ],
  "location": "HomePageStepDefn.i_click_on_the_menu_item_node(String)"
});
formatter.result({
  "duration": 106176588,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bootstrap Date Picker",
      "offset": 26
    }
  ],
  "location": "HomePageStepDefn.i_click_on_the_menu_item_node(String)"
});
formatter.result({
  "duration": 734665924,
  "status": "passed"
});
formatter.match({
  "location": "DatePickerStepDefn.i_click_on_the_Date_picker_button()"
});
formatter.result({
  "duration": 1109378046,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "09-Dec-2006",
      "offset": 19
    }
  ],
  "location": "DatePickerStepDefn.i_select_the_date_from_the_date_picker(String)"
});
formatter.result({
  "duration": 8071004190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "09/12/2006",
      "offset": 26
    }
  ],
  "location": "DatePickerStepDefn.i_should_see_the_date_as_in_the_date_field(String)"
});
formatter.result({
  "duration": 1046051438,
  "status": "passed"
});
formatter.after({
  "duration": 1018857230,
  "status": "passed"
});
formatter.before({
  "duration": 12749816000,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify that the user is able to select a valid date from the Date Picker",
  "description": "",
  "id": "datepicker-validation-feature;verify-that-the-user-is-able-to-select-a-valid-date-from-the-date-picker;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@1"
    },
    {
      "line": 2,
      "name": "@UI"
    },
    {
      "line": 8,
      "name": "@Smoke"
    },
    {
      "line": 8,
      "name": "@Sanity"
    },
    {
      "line": 2,
      "name": "@Regression"
    },
    {
      "line": 2,
      "name": "@DatePicker"
    },
    {
      "line": 8,
      "name": "@validation"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on the home page of this website",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I wait till I see \"Selenium Easy\" logo text on home page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I scrolldown until I see \"Menu List\" table",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on the menu item \"Date Pickers\" node",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on the menu item \"Bootstrap Date Picker\" node",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on the Date picker button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select the date \"23-Jun-2003\" from the date picker",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I should see the date as \"23/06/2003\" in the date field",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefn.i_am_on_the_home_page_of_this_website()"
});
formatter.result({
  "duration": 8371402,
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
  "duration": 51480778,
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
  "duration": 530772393,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Date Pickers",
      "offset": 26
    }
  ],
  "location": "HomePageStepDefn.i_click_on_the_menu_item_node(String)"
});
formatter.result({
  "duration": 100238642,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bootstrap Date Picker",
      "offset": 26
    }
  ],
  "location": "HomePageStepDefn.i_click_on_the_menu_item_node(String)"
});
formatter.result({
  "duration": 698594617,
  "status": "passed"
});
formatter.match({
  "location": "DatePickerStepDefn.i_click_on_the_Date_picker_button()"
});
formatter.result({
  "duration": 1120142177,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23-Jun-2003",
      "offset": 19
    }
  ],
  "location": "DatePickerStepDefn.i_select_the_date_from_the_date_picker(String)"
});
formatter.result({
  "duration": 8695940068,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23/06/2003",
      "offset": 26
    }
  ],
  "location": "DatePickerStepDefn.i_should_see_the_date_as_in_the_date_field(String)"
});
formatter.result({
  "duration": 1047937985,
  "status": "passed"
});
formatter.after({
  "duration": 963896693,
  "status": "passed"
});
});