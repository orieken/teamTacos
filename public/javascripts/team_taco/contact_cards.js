var app = angular.module('contactCards', []);
app.controller('cardsCtrl', function($scope) {
    $scope.cards = [
        {firstName:'Oscar', lastName:'Rieken'},
        {firstName:'Umair', lastName:'Chagani'},
        {firstName:'Wallace', lastName:'Harwood'}
    ];

});