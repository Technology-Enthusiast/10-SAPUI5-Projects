sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/Device",
  "com/te/pollutionTracker/model/models",
  'sap/ui/model/json/JSONModel',
  'sap/f/library'
], function(UIComponent, Device, models,JSONModel,fioriLibrary) {
  "use strict";

  return UIComponent.extend("com.te.pollutionTracker.Component", {

    metadata: {
      manifest: "json"
    },

    /**
     * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
     * @public
     * @override
     */
    init: function() {
      // call the base component's init function
      UIComponent.prototype.init.apply(this, arguments);
      var oModel = new JSONModel();
            this.setModel(oModel);
      // // enable routing
      var oRouter = this.getRouter();
            oRouter.attachBeforeRouteMatched(this._onBeforeRouteMatched, this);
            oRouter.initialize();

      // // set the device model
      // this.setModel(models.createDeviceModel(), "device");
    },
    _onBeforeRouteMatched: function(oEvent) {
            var oModel = this.getModel(),
                sLayout = oEvent.getParameters().arguments.layout;

            // If there is no layout parameter, set a default layout (normally OneColumn)
            if (!sLayout) {
                sLayout = fioriLibrary.LayoutType.OneColumn;
            }

            oModel.setProperty("/layout", sLayout);
        }
  });
});