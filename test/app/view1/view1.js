'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {
    var view1Attributes = this;
        view1Attributes.title = "AngularJS Tutorial Example";
        view1Attributes.searchInput = '';
        view1Attributes.shows = [
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
        view1Attributes.orders = [
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
                title: 'Title Ascending',
                key: 'title',
                reverse: true,
            }
        ];
        view1Attributes.order =view1Attributes.orders[0];
        view1Attributes.new = {};
        view1Attributes.addShow = function () {
            view1Attributes.shows.push(view1Attributes.new);
            view1Attributes.new = {};
        };
}]);