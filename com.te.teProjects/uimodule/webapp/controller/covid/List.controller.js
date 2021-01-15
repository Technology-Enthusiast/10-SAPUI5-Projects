sap.ui.define(
  [
    "com/te/teProjects/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    'sap/viz/ui5/api/env/Format',
    'sap/viz/ui5/format/ChartFormatter',
  ],
  function (Controller, JSONModel,Format,ChartFormatter) {
    "use strict";

    return Controller.extend("com.te.teProjects.controller.covid.List", {
      dataPath : "https://api.rootnet.in/covid19-in/stats/latest",
      onInit: function () {
       
        var dataModel = new JSONModel(this.dataPath);
        this.getView().setModel(dataModel, "Latest");
        
      }
    });
  }
);
