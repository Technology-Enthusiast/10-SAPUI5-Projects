sap.ui.define(
  [
    "com/te/teProjects/controller/BaseController",
    "sap/ui/model/json/JSONModel"
  ],
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("com.te.teProjects.controller.Tiles", {
      onInit: function () {
        let myTilesModel = new JSONModel("../model/tiles.json");
        this.getView().setModel(myTilesModel,"tiles")

      },
      press:function(oRoute){
         if(oRoute.substring(0,4) == 'EXT-'){
          let selItem = JSON.parse(this.getView().getModel("tiles").getJSON()).find(item => {if (item.route == oRoute){ return item;}} );

         sap.m.URLHelper.redirect(selItem.url);
         }{
           this.getOwnerComponent().getRouter().navTo(oRoute);
         }
      }
    });
  }
);
