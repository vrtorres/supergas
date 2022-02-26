import {app} from "./../initialize.js";
import {modal1} from "./../initialize.js";
import {msgText} from "./../initialize.js";

app.component('newClients',{
  templateUrl:"src/pages/formaClientes.htm",
  controller : function ctEmployer($scope,$http){
    //inicializando variables
    $scope.saveClient = function(){
      let datos = {
        "name":$scope.name,
        "code":$scope.code,
        "phone":$scope.phone,
        "zone":$scope.zone,
        "task":"newclient"
      }
      msgText.innerHTML = "<strong>Espere un momento ...</strong>";
      modal1.show();

      $http.post("app/src/Controllers/clientes.php",datos).then(function(resp){
        let r1 = resp.data;
        modal1.hide();
        msgText.innerHTML = r1.msg;
        modal1.show();
        $scope.name="";
        $scope.code="";
        $scope.phone="";
        $scope.zone="";
      })


    }
  }
});
