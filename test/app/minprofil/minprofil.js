'use strict';

angular.module('myApp.minprofil', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/minprofil', {
    templateUrl: 'minprofil/minprofil.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope) {
        $scope.title = "AngularJS Tutorial Example";
        $scope.DrugSearchInput = '';
        $scope.searchInput = '';
        $scope.shows = [
            {
                title: 'Game of Thrones',
                year: 2011,
                favorite: true
            },
            {
                title: 'Walking Dead',
                year: 2010,
                favorite: true
            },
            {
                title: 'Firefly',
                year: 2002,
                favorite: false
            },
            {
                title: 'Banshee',
                year: 2013,
                favorite: false
            },
            {
                title: 'Grays Anatomy',
                year: 2005,
                favorite: false
            }
        ];
        $scope.orders = [
            {
                id:1,
                title: 'Year Ascending',
                key: 'year',
                reverse: false
            },
            {
                id:2,
                title: 'Year Descending',
                key: 'year',
                reverse: true
            },
            {
                id:3,
                title: 'Title Ascending',
                key: 'title',
                reverse: false
            },
            {
                id:4,
                title: 'Title Descending',
                key: 'title',
                reverse: true
            }
        ];
        $scope.order =$scope.orders[0];
        $scope.new = {};
        $scope.addShow = function () {
            $scope.shows.push($scope.new);
            $scope.new = {};
        }
});