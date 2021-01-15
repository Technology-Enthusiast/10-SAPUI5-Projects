sap.ui.define([
    "com/te/pollutionTracker/controller/BaseController",
    'sap/ui/model/json/JSONModel'
  ], function(Controller,JSONModel) {
    "use strict";
  
    return Controller.extend("com.te.pollutionTracker.controller.City", {

        onInit: function () {
			var oOwnerComponent = this.getOwnerComponent();

			this.oRouter = oOwnerComponent.getRouter();
			this.oModel = oOwnerComponent.getModel();
            this.oRouter.getRoute("master").attachPatternMatched(this._onSelectingState, this);
			this.oRouter.getRoute("detail").attachPatternMatched(this._onSelectingState, this);
			this.oRouter.getRoute("city").attachPatternMatched(this._onSelectingState, this);
		},

		_onSelectingState: function (oEvent) {
            this._country = oEvent.getParameter("arguments").country || this._country || "0";
            this._state = oEvent.getParameter("arguments").state || this._state || "0";
            var stateModel = new JSONModel('https://a0dc4c75-d198-4d23-81d3-897a0481be69.mock.pstmn.io/district?country='+this._country+
            '&state='+this._state);
			stateModel.setSizeLimit(1000);
             this.getView().setModel(stateModel, 'cities');  
		},

		onEditToggleButtonPress: function() {
			var oObjectPage = this.getView().byId("ObjectPageLayout"),
				bCurrentShowFooterState = oObjectPage.getShowFooter();

			oObjectPage.setShowFooter(!bCurrentShowFooterState);
		},

		onExit: function () {
			this.oRouter.getRoute("master").detachPatternMatched(this._onSelectingCountry, this);
			this.oRouter.getRoute("detail").detachPatternMatched(this._onSelectingCountry, this);
		}
    });

});