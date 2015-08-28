angular.module("collectionite")

.factory('CollectService', ['$http', function ($http, $localStorage){

	"use strict";

	return {

		connect: function (pseudo, mdp){
			return $http.get("app/phps/connect.php?pseudo=\"" + pseudo + "\"&mdp=\"" + mdp + "\"")
			.then(function (result){
				return result;
			});
		},

		createUser: function (pseudo, mdp, nom, prenom, email){
			var request = $http({
			    method: "post",
			    url: 'app/phps/createUser.php',
			    data: {
					pseudo : pseudo,
					mdp : mdp,
					nom : nom,
					prenom : prenom,
					email : email
			    },
			    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' }
			});
			return request.then(function (result){
				return result;
			});
		},

		findUserOrEmail: function (type, userOrEmail){
			return $http.get("app/phps/findUserOrEmail.php?type=\"" + type + "\"&userOrEmail=\"" + userOrEmail + "\"")
			.then(function (result){
				return result;
			});
		},

		getSouhaits : function (id_user, bottomLimit, topLimit, orderBy){
			return $http.get("app/phps/souhaits.php?id_user=" + id_user + "&bottomLimit=" + bottomLimit + "&topLimit=" + topLimit + "&orderBy=" + orderBy)
			.then(function (result){
				return result;
			});
		}, 

		getObjet : function (id_objet){
			return $http.get("app/phps/objet.php?id_objet=" + id_objet)
			.then(function (result){
				return result;
			});
		},

		getObjets : function (id_user, bottomLimit, topLimit, orderBy){
			return $http.get("app/phps/possessions.php?id_user=" + id_user + "&bottomLimit=" + bottomLimit + "&topLimit=" + topLimit + "&orderBy=" + orderBy)
			.then(function (result){
				return result;
			});
		},

		getCategories : function (){
			return $http.get("app/phps/categories.php")
			.then(function (result){
				return result;
			});
		},

		createObjet : function (nom, description, photo100, photo300, type){
			var request = $http({
				method: 'post',
				url: 'app/phps/createObjet.php',
				data: {
					nom : nom,
					description : description,
					photo100 : photo100,
					photo300 : photo300,
					type : type
				},
			    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' }
			});
			return request.then(function (result){
				return result;
			});
		}

	}
}]);