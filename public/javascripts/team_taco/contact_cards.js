var app = angular.module('contactCards', []);
app.controller('cardsCtrl', function($scope, $http) {
    $http.get("./allCards")
        .success(function(response){$scope.cards = response['contacts'];});
});