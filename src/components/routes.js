import {app} from "./../initialize.js";
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "src/pages/principal.htm",
    controller:"purchaseView"
  })
  .when("/clientes", {
    templateUrl : "src/pages/newClient.htm"
  })
  .when("/lista_clientes", {
    templateUrl : "src/pages/listClient.htm",
    controller:"tableClients"
  })
});
