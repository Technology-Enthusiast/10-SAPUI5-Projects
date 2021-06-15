sap.ui.define([
  "com/te/captcha/controller/BaseController"
], function(Controller) {
  "use strict";

  return Controller.extend("com.te.captcha.controller.Main", {

    onValid:function(oEvent){
      alert(`Valid Captcha ${oEvent.getParameter("value")}`)
    }
  });
});
