angular.module("collectionite")

.config(function ($routeProvider){
				
	$routeProvider
	.when("/", {
		templateUrl: "views/user.html",
		controller: "UserController",
		controllerAs: "userCtrl"
	})
	.when("/home", {
		templateUrl: "views/home.html",
		controller: "HomeController",
		controllerAs: "homeCtrl"
	})
	.when("/objet", {
		templateUrl: "views/possession.html",
		controller: "ObjetController",
		controllerAs: "objetCtrl"
	})
	.when("/objet/:id", {
		templateUrl: "views/objet.html",
		controller: "ObjetController",
		controllerAs: "objetCtrl"
	})
	.when("/souhait", {
		templateUrl: "views/souhait.html",
		controller: "SouhaitController",
		controllerAs: "souhaitCtrl"
	})
	.when("/newObjet", {
		templateUrl: "views/newObjet.html",
		controller: "NewObjetController",
		controllerAs: "newObjCtrl"
	})
	.otherwise({
		redirectTo: "/"
	})
})