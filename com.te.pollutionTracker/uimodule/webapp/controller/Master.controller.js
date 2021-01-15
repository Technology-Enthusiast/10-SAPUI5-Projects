sap.ui.define([
    "com/te/pollutionTracker/controller/BaseController",
    'sap/ui/model/json/JSONModel',
    'sap/f/library'
  ], function(Controller,JSONModel,fioriLibrary) {
    "use strict";
  
    return Controller.extend("com.te.pollutionTracker.controller.Master", {

        onInit:function(){
            var countriesModel = new JSONModel('https://a0dc4c75-d198-4d23-81d3-897a0481be69.mock.pstmn.io/countries');
			countriesModel.setSizeLimit(1000);
             this.getView().setModel(countriesModel, 'countries');  
             this.oRouter = this.getOwnerComponent().getRouter();
        },
        onCountryPress:function(oEvent){
            var country = oEvent.getSource().getBindingContext("countries").getObject().country;
            this.oRouter.navTo("detail", {layout: fioriLibrary.LayoutType.TwoColumnsMidExpanded, country: country});
        }
    });
  });
