/**
 * Created by hannekot on 09.02.2015.
 */
myApp.service('drugList', function(){
    var drugList = [
        "legemiddel1",
        "legemiddel2",
        "legemiddel3",
        "legemiddel4",
        "legemiddel5"
    ];
    this.drugList = function () {
            return drugList;
        };
    this.deleteDrug = function(drug){
            var oldDrug = drugList;
            drugList = [];
            angular.forEach(oldDrug, function (drugInList) {
                if(drugInList !== drug ) drugList.push(drugInList);
            });
        }
});