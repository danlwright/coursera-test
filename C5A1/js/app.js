(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.menuItems = "";
        $scope.response = "";
        $scope.sayMessage = function() {
            var menuItemsString = $scope.menuItems.split(',');
            var menuItemsLength = menuItemsString.length;
            if ($scope.menuItems == "") {
                $scope.response = "Please enter data first";
            } else if (menuItemsLength < 4) {
                $scope.response = "Enjoy!";
            } else {
                $scope.response = "Too Much!";
            }
        };
    }

})();
