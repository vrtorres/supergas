import {app} from "./../initialize.js";
import {modal1} from "./../initialize.js";
import {msgText} from "./../initialize.js";

app.controller('purchaseView',function($scope,$http){
  //
  let datos = {
    "task":"listClients"
  }

  $http.post("app/src/Controllers/clientes.php",datos).then(function(resp){
    $scope.clients = resp.data;
  })
  //---------------------------------------
  $scope.selectClient = function(cn){
    let nm = document.getElementById('c'+cn);
    //console.log(nm.textContent);
    $scope.client = nm.textContent;
  }
 //---------------------------------------
 $scope.newPurchase = function(){
   let vsblity = document.getElementById('nvPedidoForm').style.display;
   if(vsblity == "none"){
    document.getElementById('nvPedidoForm').style.display = "block";
   }else{
     document.getElementById('nvPedidoForm').style.display = "none";
   }

 }

});
