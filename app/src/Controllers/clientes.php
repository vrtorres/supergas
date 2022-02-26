<?php
require_once __DIR__."/../../vendor/autoload.php";
use App\Models\Clients;

$json = file_get_contents('php://input');
$requirement = json_decode($json);

$clients = new Clients();

switch ($requirement->task) {

  case 'newclient':
    $rp = $clients->newclient($requirement);
    if($rp==true){
      $rt = array("msg"=>"Cliente creado");
    }else{
      $rt = array("msg"=>"No se creo el cliente. Error o cliente existente");
    }
    echo json_encode($rt);
  break;
  //************************************************
  case 'listClients':
    $rp = $clients->listAllClients($requirement);
    echo json_encode($rp);
  break;


}

 ?>
