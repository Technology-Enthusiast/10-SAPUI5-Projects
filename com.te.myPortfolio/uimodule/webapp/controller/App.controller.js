sap.ui.define([
  "com/te/myPortfolio/controller/BaseController",
  "sap/ui/model/json/JSONModel"
], function(Controller,JSONModel) {
  "use strict";

  return Controller.extend("com.te.myPortfolio.controller.App", {
    onInit:function(){
      let oModel = new JSONModel("../model/data.json");
      this.getView().setModel(oModel,"portfolio")
    }

  });
});
