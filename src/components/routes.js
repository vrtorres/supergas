import {app} from "./../initialize.js";
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "src/pages/principal.htm"
  })
  .when("/clientes", {
    templateUrl : "src/pages/nuevosClientes.htm"
  })
});
