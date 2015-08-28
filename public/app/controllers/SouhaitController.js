angular.module('collectionite')

.controller('SouhaitController', function (CollectService, $localStorage, $location){

	var souhaitCtrl = this;

	souhaitCtrl.currentPage = 1;
	souhaitCtrl.itemsPerPage = 30;
	souhaitCtrl.maxSize = 5;

	function getSouhaits(){
		var bottomLimit = (souhaitCtrl.currentPage-1) * 30;
		var topLimit = souhaitCtrl.currentPage * 30;
		CollectService.getSouhaits($localStorage.collectionite_id_user, bottomLimit, topLimit).then(function (result){
	    	souhaitCtrl.listSouhaits = result.data;
			souhaitCtrl.totalItems = souhaitCtrl.listSouhaits.length;
	    });
	}

	getSouhaits();

	souhaitCtrl.showDetail = function(id_objet){
		$location.path("/objet/" + id_objet);
	}

});