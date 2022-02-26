import "./libraries/angular.min.js";
import "./libraries/angular-route.min.js";

let angularModule = angular.module("supergas",["ngRoute"]);
let aviso = new bootstrap.Modal(document.getElementById('aviso_1'));

let modal_a = document.getElementById('aviso_1');
let messages = modal_a.querySelector('.modal-body');

export var app = angularModule;
export var modal1 = aviso;
export var msgText = messages;
