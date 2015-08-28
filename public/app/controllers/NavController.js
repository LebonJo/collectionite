angular.module('collectionite')

.controller("NavController", function ($location, $localStorage){

	"use strict";

	var navCtrl = this;

	navCtrl.id_user = 0;
	navCtrl.username = "";

    navCtrl.load = function(){
        if($localStorage.collectionite_id_user != undefined){
        	navCtrl.id_user = $localStorage.collectionite_id_user;
			navCtrl.username = $localStorage.collectionite_username;
        }
    };

    navCtrl.load();

    navCtrl.disconnect = function(){
    	delete $localStorage.collectionite_id_user;
    	delete $localStorage.collectionite_username;
    	$location.path("/");
    }
});