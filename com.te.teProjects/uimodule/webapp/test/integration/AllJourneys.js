sap.ui.define([
  "sap/ui/test/Opa5",
  "com/te/teProjects/test/integration/arrangements/Startup",
  "com/te/teProjects/test/integration/BasicJourney"
], function(Opa5, Startup) {
  "use strict";

  Opa5.extendConfig({
    arrangements: new Startup(),
    pollingInterval: 1
  });

});
