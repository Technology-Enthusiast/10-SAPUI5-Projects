sap.ui.define([
    "com/te/pollutionTracker/controller/BaseController",
	'sap/ui/model/json/JSONModel',
	'sap/f/library'
  ], function(Controller,JSONModel,fioriLibrary) {
    "use strict";
  
    return Controller.extend("com.te.pollutionTracker.controller.Detail", {

        onInit: function () {
			var oOwnerComponent = this.getOwnerComponent();

			this.oRouter = oOwnerComponent.getRouter();
			this.oModel = oOwnerComponent.getModel();

			this.oRouter.getRoute("master").attachPatternMatched(this._onSelectingCountry, this);
			this.oRouter.getRoute("detail").attachPatternMatched(this._onSelectingCountry, this);
		},

		_onSelectingCountry: function (oEvent) {
			this._country = oEvent.getParameter("arguments").country || this._country || "0";
            var stateModel = new JSONModel('https://a0dc4c75-d198-4d23-81d3-897a0481be69.mock.pstmn.io/state?country='+this._country);
			stateModel.setSizeLimit(1000);
             this.getView().setModel(stateModel, 'states');  
		},
		onStatePress:function(oEvent){
			var state = oEvent.getSource().getBindingContext("states").getObject().state;

			this.oRouter.navTo("city", {layout: fioriLibrary.LayoutType.ThreeColumnsMidExpanded, state: state, country: this._country});
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