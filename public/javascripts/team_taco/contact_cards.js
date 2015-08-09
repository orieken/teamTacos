var app = angular.module('contactCards', []);
app.controller('cardsCtrl', function($scope, $http) {
    $http.get("./allCards")
        .success(function(response){
            for(contact in response['contacts']) {
                var email = response['contacts'][contact]['email'];
                if(email){
                     var hash = md5(email);
                    response['contacts'][contact]['image'] = "http://www.gravatar.com/avatar/" + hash;
                } else {
                    response['contacts'][contact]['image'] = "images/no-image.png";
                }
            }


            $scope.cards = response['contacts'];
        });
});