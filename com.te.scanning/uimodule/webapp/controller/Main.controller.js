sap.ui.define([
  "com/te/scanning/controller/BaseController",
  "sap/m/MessageBox",
], function(Controller,MessageBox) {
  "use strict";

  return Controller.extend("com.te.scanning.controller.Main", {
    onInit:function(){
      this.scanningStarted=false;
    },
    startScanning:function(){

      this.byId(this.getView().createId("scandit-barcode-picker")).setVisible(true);
      if(this.scanningStarted == false){
        this.scanningStarted = true;
      ScanditSDK.configure("key here", {
        engineLocation: "https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build/",
      })
        .then(() => {
          return ScanditSDK.BarcodePicker.create(document.getElementById(this.getView().createId("scandit-barcode-picker")), {
            // enable some common symbologies
            scanSettings: new ScanditSDK.ScanSettings({ enabledSymbologies: ["ean8", "ean13", "upca", "upce"] }),
          });
        })
        .then((barcodePicker) => {
          // barcodePicker is ready here, show a message every time a barcode is scanned
          barcodePicker.on("scan", (scanResult) => {
            MessageBox.alert(`Scanned Value ${scanResult.barcodes[0].data}`);
          });
        });
      }
    },
    stopScanning: function(){ 
this.byId(this.getView().createId("scandit-barcode-picker")).setVisible(false);
MessageBox.alert("Barcode Scanning stopped");
    }
  });
});
