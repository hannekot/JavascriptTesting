myApp.directive('sidebar', function(){
       return {
           restrict: 'E',
           scope: {
               druglist: '='
           },
           templateUrl: 'directive/sidebar.html'
           }
       });