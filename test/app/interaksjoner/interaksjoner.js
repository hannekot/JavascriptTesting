'use strict';

angular.module('myApp.interaksjoner', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/interaksjoner', {
    templateUrl: 'interaksjoner/interaksjoner.html',
    controller: 'View2Ctrl'
  });
}])
    .controller('View2Ctrl', function($scope, drugList){
        $scope.drugList = drugList.getDrugList();
        $scope.myDrugList = drugList.getMyDrugList();
        $scope.selected = "";
        $scope.onSelect = function ($item) {
            drugList.updateMyDrugList($item);
            $scope.selected = "";
        };




});
