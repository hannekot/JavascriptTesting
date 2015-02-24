'use strict';

angular.module('myApp.minlegemiddelliste', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/minlegemiddelliste', {
    templateUrl: 'minlegemiddelliste/minlegemiddelliste.html',
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
