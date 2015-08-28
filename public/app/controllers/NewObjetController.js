angular.module('collectionite')

.controller('NewObjetController', function (CollectService, $location){

	var newObjCtrl = this;

	getCategories = function (){
		CollectService.getCategories().then(function (result){
			newObjCtrl.listCategories = result.data;
		});
	};

	getCategories();

	newObjCtrl.createObjet = function (nom, description, photo100, photo300, type){
		CollectService.createObjet(nom, description, photo100, photo300, type).then(function (result){
			$location.path('/home');
		});
	};

});