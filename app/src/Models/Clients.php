<?php
namespace App\Models;

class Clients{

public function __construct(){
   $conn = BaseDatos::getInstance();
   $this->db = $conn::$db;
 }
 public function newClient($datos){
    $result = $this->db->insert(array(
                'name' => $datos->name,
                'code' => $datos->code,
                'phone' => $datos->phone,
                'zone' => $datos->zone
            ))
            ->into('Clients');
    return $result;
  }
  //------------------------------------------
  public function listAllClients(){
    $result = $this->db->from('Clients')
              ->orderBy('code')
              ->select()
              ->fetchAssoc()
              ->all();
    return $result;
  }

}



 ?>
