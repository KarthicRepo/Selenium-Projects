$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/HomePageValidator.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: karthic.kaliappa@gmail.com"
    }
  ],
  "line": 3,
  "name": "Homepage validation feature",
  "description": "As a test user of this website \nI would like to verify that homepage contains all the WebElements\nSo that I can use every functionality provided for learning test automation.",
  "id": "homepage-validation-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@Regression"
    },
    {
      "line": 2,
      "name": "@All"
    },
    {
      "line": 2,
      "name": "@UI"
    }
  ]
});
formatter.before({
  "duration": 81623023150,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify that Menu list is available on home page",
  "description": "",
  "id": "homepage-validation-feature;verify-that-menu-list-is-available-on-home-page",
  "type": "scenario",
  "keyword": "Scenario",
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
  "name": "I should see below menu list under \"All Examples\" root",
  "rows": [
    {
      "cells": [
        "Input Forms"
      ],
      "line": 14
    },
    {
      "cells": [
        "Date Pickers"
      ],
      "line": 15
    },
    {
      "cells": [
        "Table"
      ],
      "line": 16
    },
    {
      "cells": [
        "Progress Bars \u0026 Sliders"
      ],
      "line": 17
    },
    {
      "cells": [
        "Alerts \u0026 Modals"
      ],
      "line": 18
    },
    {
      "cells": [
        "List Box"
      ],
      "line": 19
    },
    {
      "cells": [
        "Others"
      ],
      "line": 20
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I should see the text \"WELCOME TO SELENIUM EASY DEMO\"",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefn.i_am_on_the_home_page_of_this_website()"
});
formatter.result({
  "duration": 204762380,
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
  "duration": 141936622,
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
  "duration": 528283663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All Examples",
      "offset": 36
    }
  ],
  "location": "HomePageStepDefn.i_should_see_below_menu_list_under_root(String,DataTable)"
});
formatter.result({
  "duration": 254632489,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WELCOME TO SELENIUM EASY DEMO",
      "offset": 23
    }
  ],
  "location": "HomePageStepDefn.i_should_see_the_text(String)"
});
formatter.result({
  "duration": 34206094,
  "status": "passed"
});
formatter.after({
  "duration": 12071763949,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Verify all the child elements of Menu list",
  "description": "",
  "id": "homepage-validation-feature;verify-all-the-child-elements-of-menu-list",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@2"
    },
    {
      "line": 23,
      "name": "@Integration"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on the home page of this website",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I wait till I see \"Selenium Easy\" logo text on home page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I scrolldown until I see \"Menu List\" table",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click on the menu item \u003cMenuItem\u003e node",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see the child-elements \u003cchildElements\u003e under that",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "homepage-validation-feature;verify-all-the-child-elements-of-menu-list;",
  "rows": [
    {
      "cells": [
        "MenuItem",
        "childElements"
      ],
      "line": 32,
      "id": "homepage-validation-feature;verify-all-the-child-elements-of-menu-list;;1"
    },
    {
      "cells": [
        "\"Input Forms\"",
        "\"Simple Form Demo,Checkbox Demo,Radio Buttons Demo,Select Dropdown List,Input Form Submit,Ajax Form Submit,JQuery Select dropdown\""
      ],
      "line": 33,
      "id": "homepage-validation-feature;verify-all-the-child-elements-of-menu-list;;2"
    },
    {
      "cells": [
        "\"Date Pickers\"",
        "\"Bootstrap Date Picker,JQuery Date Picker\""
      ],
      "line": 34,
      "id": "homepage-validation-feature;verify-all-the-child-elements-of-menu-list;;3"
    },
    {
      "cells": [
        "\"Table\"",
        "\"Table Pagination,Table Data Search,Table Filter,Table Sort \u0026 Search,Table Data Download\""
      ],
      "line": 35,
      "id": "homepage-validation-feature;verify-all-the-child-elements-of-menu-list;;4"
    },
    {
      "cells": [
        "\"Progress Bars \u0026 Sliders\"",
        "\"JQuery Download Progress bars,Bootstrap Progress bar,Drag \u0026 Drop Sliders\""
      ],
      "line": 36,
      "id": "homepage-validation-feature;verify-all-the-child-elements-of-menu-list;;5"
    },
    {
      "cells": [
        "\"Alerts \u0026 Modals\"",
        "\"Bootstrap Alerts,Bootstrap Modals,Window Popup Modal,Progress Bar Modal,Javascript Alerts,File Download\""
      ],
      "line": 37,
      "id": "homepage-validation-feature;verify-all-the-child-elements-of-menu-list;;6"
    },
    {
      "cells": [
        "\"List Box\"",
        "\"Bootstrap List Box,JQuery List Box,Data List Filter\""
      ],
      "line": 38,
      "id": "homepage-validation-feature;verify-all-the-child-elements-of-menu-list;;7"
    },
    {
      "cells": [
        "\"Others\"",
        "\"Drag and Drop,Dynamic Data Loading,Charts Demo\""
      ],
      "line": 39,
      "id": "homepage-validation-feature;verify-all-the-child-elements-of-menu-list;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 47363623625,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Verify all the child elements of Menu list",
  "description": "",
  "id": "homepage-validation-feature;verify-all-the-child-elements-of-menu-list;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
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
      "line": 23,
      "name": "@Integration"
    },
    {
      "line": 2,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on the home page of this website",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I wait till I see \"Selenium Easy\" logo text on home page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I scrolldown until I see \"Menu List\" table",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click on the menu item \"Input Forms\" node",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see the child-elements \"Simple Form Demo,Checkbox Demo,Radio Buttons Demo,Select Dropdown List,Input Form Submit,Ajax Form Submit,JQuery Select dropdown\" under that",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefn.i_am_on_the_home_page_of_this_website()"
});
formatter.result({
  "duration": 6287036,
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
  "duration": 42029132,
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
  "duration": 533414821,
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
  "duration": 85981174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Simple Form Demo,Checkbox Demo,Radio Buttons Demo,Select Dropdown List,Input Form Submit,Ajax Form Submit,JQuery Select dropdown",
      "offset": 33
    }
  ],
  "location": "HomePageStepDefn.i_should_see_the_child_elements_under_that(String)"
});
formatter.result({
  "duration": 1249325332,
  "status": "passed"
});
formatter.after({
  "duration": 834315476,
  "status": "passed"
});
formatter.before({
  "duration": 14634993585,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify all the child elements of Menu list",
  "description": "",
  "id": "homepage-validation-feature;verify-all-the-child-elements-of-menu-list;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
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
      "line": 23,
      "name": "@Integration"
    },
    {
      "line": 2,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on the home page of this website",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I wait till I see \"Selenium Easy\" logo text on home page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I scrolldown until I see \"Menu List\" table",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click on the menu item \"Date Pickers\" node",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see the child-elements \"Bootstrap Date Picker,JQuery Date Picker\" under that",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefn.i_am_on_the_home_page_of_this_website()"
});
formatter.result({
  "duration": 7898189,
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
  "duration": 37934098,
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
  "duration": 532497971,
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
  "duration": 62936789,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bootstrap Date Picker,JQuery Date Picker",
      "offset": 33
    }
  ],
  "location": "HomePageStepDefn.i_should_see_the_child_elements_under_that(String)"
});
formatter.result({
  "duration": 1086736084,
  "status": "passed"
});
formatter.after({
  "duration": 909076276,
  "status": "passed"
});
formatter.before({
  "duration": 7670506832,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Verify all the child elements of Menu list",
  "description": "",
  "id": "homepage-validation-feature;verify-all-the-child-elements-of-menu-list;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
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
      "line": 23,
      "name": "@Integration"
    },
    {
      "line": 2,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on the home page of this website",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I wait till I see \"Selenium Easy\" logo text on home page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I scrolldown until I see \"Menu List\" table",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click on the menu item \"Table\" node",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see the child-elements \"Table Pagination,Table Data Search,Table Filter,Table Sort \u0026 Search,Table Data Download\" under that",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefn.i_am_on_the_home_page_of_this_website()"
});
formatter.result({
  "duration": 6886310,
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
  "duration": 49105018,
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
  "duration": 529992756,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Table",
      "offset": 26
    }
  ],
  "location": "HomePageStepDefn.i_click_on_the_menu_item_node(String)"
});
formatter.result({
  "duration": 69562249,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Table Pagination,Table Data Search,Table Filter,Table Sort \u0026 Search,Table Data Download",
      "offset": 33
    }
  ],
  "location": "HomePageStepDefn.i_should_see_the_child_elements_under_that(String)"
});
formatter.result({
  "duration": 1211118751,
  "status": "passed"
});
formatter.after({
  "duration": 876476001,
  "status": "passed"
});
formatter.before({
  "duration": 7295778711,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Verify all the child elements of Menu list",
  "description": "",
  "id": "homepage-validation-feature;verify-all-the-child-elements-of-menu-list;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
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
      "line": 23,
      "name": "@Integration"
    },
    {
      "line": 2,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on the home page of this website",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I wait till I see \"Selenium Easy\" logo text on home page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I scrolldown until I see \"Menu List\" table",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click on the menu item \"Progress Bars \u0026 Sliders\" node",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see the child-elements \"JQuery Download Progress bars,Bootstrap Progress bar,Drag \u0026 Drop Sliders\" under that",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefn.i_am_on_the_home_page_of_this_website()"
});
formatter.result({
  "duration": 9696009,
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
  "duration": 66908671,
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
  "duration": 532489729,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Progress Bars \u0026 Sliders",
      "offset": 26
    }
  ],
  "location": "HomePageStepDefn.i_click_on_the_menu_item_node(String)"
});
formatter.result({
  "duration": 74904800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JQuery Download Progress bars,Bootstrap Progress bar,Drag \u0026 Drop Sliders",
      "offset": 33
    }
  ],
  "location": "HomePageStepDefn.i_should_see_the_child_elements_under_that(String)"
});
formatter.result({
  "duration": 1147155537,
  "status": "passed"
});
formatter.after({
  "duration": 788613128,
  "status": "passed"
});
formatter.before({
  "duration": 9469378394,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Verify all the child elements of Menu list",
  "description": "",
  "id": "homepage-validation-feature;verify-all-the-child-elements-of-menu-list;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
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
      "line": 23,
      "name": "@Integration"
    },
    {
      "line": 2,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on the home page of this website",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I wait till I see \"Selenium Easy\" logo text on home page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I scrolldown until I see \"Menu List\" table",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click on the menu item \"Alerts \u0026 Modals\" node",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see the child-elements \"Bootstrap Alerts,Bootstrap Modals,Window Popup Modal,Progress Bar Modal,Javascript Alerts,File Download\" under that",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefn.i_am_on_the_home_page_of_this_website()"
});
formatter.result({
  "duration": 11109829,
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
  "duration": 65698003,
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
  "duration": 537362945,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alerts \u0026 Modals",
      "offset": 26
    }
  ],
  "location": "HomePageStepDefn.i_click_on_the_menu_item_node(String)"
});
formatter.result({
  "duration": 90366633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bootstrap Alerts,Bootstrap Modals,Window Popup Modal,Progress Bar Modal,Javascript Alerts,File Download",
      "offset": 33
    }
  ],
  "location": "HomePageStepDefn.i_should_see_the_child_elements_under_that(String)"
});
formatter.result({
  "duration": 1448979344,
  "status": "passed"
});
formatter.after({
  "duration": 905417120,
  "status": "passed"
});
formatter.before({
  "duration": 7919096649,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Verify all the child elements of Menu list",
  "description": "",
  "id": "homepage-validation-feature;verify-all-the-child-elements-of-menu-list;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
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
      "line": 23,
      "name": "@Integration"
    },
    {
      "line": 2,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on the home page of this website",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I wait till I see \"Selenium Easy\" logo text on home page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I scrolldown until I see \"Menu List\" table",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click on the menu item \"List Box\" node",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see the child-elements \"Bootstrap List Box,JQuery List Box,Data List Filter\" under that",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefn.i_am_on_the_home_page_of_this_website()"
});
formatter.result({
  "duration": 9797342,
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
  "duration": 43988407,
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
  "duration": 529630574,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "List Box",
      "offset": 26
    }
  ],
  "location": "HomePageStepDefn.i_click_on_the_menu_item_node(String)"
});
formatter.result({
  "duration": 75426982,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bootstrap List Box,JQuery List Box,Data List Filter",
      "offset": 33
    }
  ],
  "location": "HomePageStepDefn.i_should_see_the_child_elements_under_that(String)"
});
formatter.result({
  "duration": 1131732007,
  "status": "passed"
});
formatter.after({
  "duration": 873023392,
  "status": "passed"
});
formatter.before({
  "duration": 14921227075,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Verify all the child elements of Menu list",
  "description": "",
  "id": "homepage-validation-feature;verify-all-the-child-elements-of-menu-list;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
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
      "line": 23,
      "name": "@Integration"
    },
    {
      "line": 2,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on the home page of this website",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I wait till I see \"Selenium Easy\" logo text on home page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I scrolldown until I see \"Menu List\" table",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click on the menu item \"Others\" node",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see the child-elements \"Drag and Drop,Dynamic Data Loading,Charts Demo\" under that",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefn.i_am_on_the_home_page_of_this_website()"
});
formatter.result({
  "duration": 7674189,
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
  "duration": 40423312,
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
  "duration": 528143058,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Others",
      "offset": 26
    }
  ],
  "location": "HomePageStepDefn.i_click_on_the_menu_item_node(String)"
});
formatter.result({
  "duration": 65252912,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Drag and Drop,Dynamic Data Loading,Charts Demo",
      "offset": 33
    }
  ],
  "location": "HomePageStepDefn.i_should_see_the_child_elements_under_that(String)"
});
formatter.result({
  "duration": 1117533205,
  "status": "passed"
});
formatter.after({
  "duration": 868534176,
  "status": "passed"
});
});