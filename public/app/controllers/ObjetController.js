angular.module('collectionite')

.controller('ObjetController', function (CollectService, $routeParams, $localStorage){

	var objetCtrl = this;

	objetCtrl.currentPage = 1;
	objetCtrl.itemsPerPage = 30;
	objetCtrl.maxSize = 5;

	function getObjets(){
		if($routeParams['id']){
			CollectService.getObjet($routeParams['id']).then(function (result){
				objetCtrl.objet = result.data[0];
			});
		} else {
			var bottomLimit = (objetCtrl.currentPage-1) * 30;
			var topLimit = objetCtrl.currentPage * 30;
			CollectService.getObjets($localStorage.collectionite_id_user, bottomLimit, topLimit, 'asc').then(function (result){
		    	objetCtrl.listPossessions = result.data;
				objetCtrl.totalItems = objetCtrl.listPossessions.length;
		    });
		}
	};

	getObjets();

});