sap.ui.define([
  "com/te/pollutionTracker/controller/BaseController"
], function(Controller) {
  "use strict";

  return Controller.extend("com.te.pollutionTracker.controller.Main", {
    onInit: function () {
            this.oOwnerComponent = this.getOwnerComponent();
            this.oRouter = this.oOwnerComponent.getRouter();
            this.oRouter.attachRouteMatched(this.onRouteMatched, this);
        },

        onRouteMatched: function (oEvent) {
            var sRouteName = oEvent.getParameter("name"),
                oArguments = oEvent.getParameter("arguments");


            this.chosenRouteName = sRouteName;
            this.chosenCountry = oArguments.product;
            this.chosenState = oArguments.state;
        },

        onStateChanged: function (oEvent) {
            var bIsNavigationArrow = oEvent.getParameter("isNavigationArrow"),
                sLayout = oEvent.getParameter("layout");

            // Replace the URL with the new layout if a navigation arrow was used
            if (bIsNavigationArrow) {
                this.oRouter.navTo(this.chosenRouteName, {layout: sLayout, country: this.chosenCountry,state:this.chosenState}, true);
            }
        },

        onExit: function () {
            this.oRouter.detachRouteMatched(this.onRouteMatched, this);
        }

  });
});