import {app} from "./../initialize.js";
app.controller('tableClients',function($scope,$http){

  let datos = {
    "task":"listClients"
  }

  $http.post("app/src/Controllers/clientes.php",datos).then(function(resp){
    $scope.clients = resp.data;    
  })

});
