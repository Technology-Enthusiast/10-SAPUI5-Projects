sap.ui.define([
  "sap/ui/test/opaQunit",
  // "./pages/Main",
  "./pages/Main"
], function (opaTest) {
  "use strict";

  opaTest("Should see the page", function (Given, When, Then) {

    // Arrangements
    Given.iStartMyApp();

    // Actions
    // When.onTheMainPage.iPressTheButton();

    // Assertions
    Then.onTheMainPage.iShouldSeeTheTitle();

    // Cleanup
    Then.iTeardownMyApp();
  });

});
