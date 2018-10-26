// Création d'une variable qui sert à appeler le ng-app (html) avec myApp
var app = angular.module("myApp", []);
// Lié à ng-controller (html) afin de ciblé où l'on veut lancer la fonction
app.controller("myCtrl", function($scope, $http) {
// Ligne qui sert à aller chercher le code json
   $http.get("voiture.json")
// Si on récupère le json on le stock dans la variable cars
   .then(function(response) {
// la variable $scope nommé cars affiche les données de la réponse
       $scope.cars = response.data;
   });
});
