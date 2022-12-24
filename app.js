var app = angular.module("myFirstApp",[]);


app.service('ShoppingListCheckOffService', function($rootScope) {
    $rootScope.sumit=[{ name: "Cookies", quantity: 10 },
    { name: "Coffee", quantity: 6 },
    { name: "Choclate", quantity: 15},
    { name: "Books", quantity: 2},
    { name: "Pens", quantity:6}
]
    $rootScope.AlreadyBought=[]
    this.myFunc = function (x,y) {
        if(y=="dec"){
            var a = $rootScope.sumit.findIndex(record => record.name === x)
            $rootScope.AlreadyBought.push($rootScope.sumit[a])
            $rootScope.sumit.splice(a, 1)
            return $rootScope.sumit
        }
        if(y=="inc"){
            var a = $rootScope.AlreadyBought.findIndex(record => record.name === x)
            $rootScope.sumit.push($rootScope.AlreadyBought[a])
            $rootScope.AlreadyBought.splice(x,1)
            return $rootScope.AlreadyBought
        }
    }
  });

app.controller('ToBuyController',function($rootScope,$scope,ShoppingListCheckOffService){

    $scope.ani = function(x){
        $scope.you_selected= x
        $rootScope.sumit=ShoppingListCheckOffService.myFunc(x,"dec")

    }
})

app.controller('AlreadyBoughtController',function($scope,ShoppingListCheckOffService,$rootScope){
    $scope.anihg = function(x){
        $scope.you_selected= x
        $rootScope.AlreadyBought=ShoppingListCheckOffService.myFunc(x,"inc")
    }
})