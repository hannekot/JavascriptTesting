myApp.directive('sidebar', function(){
       return {
           restrict: 'E',
           scope: {
               searchInput: '='
           },
           link: function(scope, element, attrs){
                scope.list =[
                    {title: "legemiddel1"},
                    {title: "legemiddel2"},
                    {title: "legemiddel3"},
                ];
           },
           templateUrl: 'directive/sidebar.html'
       }
    });