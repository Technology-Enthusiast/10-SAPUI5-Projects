sap.ui.define(["com/te/maps/controller/BaseController",
"sap/m/MessageBox",'sap/ui/model/json/JSONModel'], function (Controller,MessageBox,JSONModel) {
    "use strict";

    return Controller.extend("com.te.maps.controller.MainView", {
        onInit: function (){
        this.lattitude;
        this.longitude;
        this.map;
        this.marker;
        var oTerrains = {
            "Terrains": [
                {
                    "TerrainID": "roadmap",
                    "Name": "Normal"
                },
                {
                    "TerrainID": "satellite",
                    "Name": "Sattelite "
                },
                {
                    "TerrainID": "hybrid",
                    "Name": "Cities and Sattelite"
                },
                {
                    "TerrainID": "terrain",
                    "Name": "Mountain and Rivers"
                }
            ]
        };

        // set explored app's demo model on this sample
        var oModel = new JSONModel(oTerrains);
        this.getView().setModel(oModel);
           },
        startMap:function(){
            this.map = new google.maps.Map(this.byId(this.getView().createId("map")).getDomRef(), {
                center: { lat:  this.lattitude, lng: this.longitude },
                zoom: 8,
              });
        },
        getLocation:function(){
            if (navigator.geolocation) {                
                var options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
              };    
        
              navigator.geolocation.getCurrentPosition(this.onfindingLocation.bind(this), this.error, options)
          } else { 
            x.innerHTML = "Geolocation is not supported by this browser.";
          }
  
        },
        addMarker:function(){
            const myLatLng = { lat: this.lattitude, lng: this.longitude };
            this.marker=new google.maps.Marker({
                position: myLatLng,
                map:this.map,
                title: "Here is Me",
              });
        },
        enableZoom:function(){
            
            google.maps.event.addListener(this.marker,'click',function() {
                var pos = this.map.getZoom();
                this.map.setZoom(9);
                this.map.setCenter(this.marker.getPosition());
                window.setTimeout(function() {this.map.setZoom(pos);}.bind(this),3000);
              }.bind(this));
        },
        onfindingLocation:function(pos){
            var coordinate = pos.coords;
            this.lattitude=coordinate.latitude;
            this.longitude=coordinate.longitude;
            MessageBox.show(`Lattitude ${this.lattitude} & Longitude: ${this.longitude}`)
        },
        error:function(oError){
            console.log(oError)
        },   
        onChange:function(oEvent){
            this.map.setMapTypeId(oEvent.getParameters().selectedItem.getKey());
        }
    });
});
