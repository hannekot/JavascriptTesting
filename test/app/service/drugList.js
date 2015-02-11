/**
 * Created by hannekot on 09.02.2015.
 */
myApp.service('drugList', function(){
    var drugList = [
        "legemiddel1",
        "legemiddel2",
        "legemiddel3",
        "legemiddel4",
        "legemiddel5",
        "Albyl-E 75 mg",
        "Simvastatin 40 mg",
        "Triatec 5 mg",
        "Ibux 200 mg",
        "Dispril 300 mg"
    ];
    var myDrugList = [];

    this.getMyDrugList = function(){
      return myDrugList;
    };
    this.getDrugList = function () {
            return drugList;
    };
    this.updateMyDrugList = function(drug){
        return myDrugList.push(drug);
    };
    this.deleteDrug = function(drug){
            var oldDrug = drugList;
            drugList = [];
            angular.forEach(oldDrug, function (drugInList) {
                if(drugInList !== drug ) drugList.push(drugInList);
            });
        }
});