angular.module("collectionite")

.controller('HomeController', function (CollectService, $localStorage, $location){

	var homeCtrl = this;

	function getSouhaits(){
		CollectService.getSouhaits($localStorage.collectionite_id_user, 0, 6, "desc").then(function (result){
	    	homeCtrl.listSouhaits = result.data;
	    });
	}

	function getPossessions(){
		CollectService.getObjets($localStorage.collectionite_id_user, 0, 6, "desc").then(function (result){
	    	homeCtrl.listPossessions = result.data;
	    });
	}

	getSouhaits();
	getPossessions();

	homeCtrl.showDetail = function(id_objet){
		$location.path("/objet/" + id_objet);
	}

});