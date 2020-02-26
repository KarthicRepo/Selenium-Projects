# Selenium sample programs

In this project I have automated couple of scenarios on the test website "https://www.seleniumeasy.com/test/"
Below are the scenarios automated.

1) Home Page validation:
   Will land on the home page of this website, and verify all different Tree-node elements.
   Will expand each Tree-node and verify all its subtree nodes.
   Will verify basic image/texts on the home page.
   
2) Simple input forms:
   Will navigate to this page via multiple tree-node options.
   Validate simple input text and test display text scenarios.
   Validate a simplet online calculator function adding two digit numbers.
   
3) Bootstrap Date-picker:
   Will navigate to this page via multiple tree-node options.
   Will select the give date in text format.
   Will validate the selected date against a different date format.
   
   
Test Design:
I've implemented the Page Object Model desing for automating these scenarios.
Used Cucumber and TestNG frameworks for this implementation.
Have implemented thread safety of webDriver.


