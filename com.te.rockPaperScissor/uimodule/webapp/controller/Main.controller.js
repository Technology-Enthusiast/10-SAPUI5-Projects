sap.ui.define([
  "com/te/rockPaperScissor/controller/BaseController",
  'sap/ui/model/json/JSONModel',
  "sap/m/MessageBox",
	"sap/m/MessageToast"
], function(Controller,JSONModel,MessageBox, MessageToast) {
  "use strict";

  return Controller.extend("com.te.rockPaperScissor.controller.Main", {
    
    onInit: function(){
    this._images =["../resources/img/rock.png","../resources/img/paper.png","../resources/img/scissor.png"];
    var chosenImage = {
      "imagePath":"../resources/img/paper.png",
      "yourscore":0,
      "compscore":0,
      "imageCompPath":"../resources/img/paper.png"
    }
    var oModel = new JSONModel(chosenImage);
    this.getView().setModel(oModel,"chosenImage");
    },
    onChoose:function(oEvent){
      sap.ui.core.BusyIndicator.show();
      var that=this;
      var audio = new Audio("../resources/img/play.mp4");
      audio.play();
      
      var oModel = that.getView().getModel("chosenImage");
      var data = oModel.getData();
     
      audio.onended = function(){

     
      data.imagePath = that._images[oEvent];

      var num = Math.floor(Math.random() * 3);
       data.imageCompPath = that._images[num];
  
        
        switch(that.checkWhoWon(oEvent,num)){
      
          case 'Tie':
            MessageBox.success('Draw it is')
            break;
            case 'Computer':
              data.compscore+=1;
              MessageBox.success('Computer Won!')
              break;
              case 'Player':
                data.yourscore+=1;
            MessageBox.success('You Won!')
            break;
          default:
            break;
        }
        oModel.setData(data);
        oModel.refresh();  
      sap.ui.core.BusyIndicator.hide(); 
      
    }
     

    },
    checkWhoWon:function(myChoice,compChoice){
     // var test = ['Rock','Paper','Scissor'];
     var decidingMatrix = [['Tie','Computer','Player'], 
      ['Player','Tie','Computer'],
      ['Computer','Player','Tie']]
      return decidingMatrix[myChoice][compChoice];
    }

  });
});
