angular.module("myapp",[]).controller('personCtrl',function($scope){
    	$scope.firstname="ff";
    	$scope.lastname="ff";
    	$scope.FullName=function(){
    		return $scope.firstname+" "+$scope.lastname;
    	}
    });