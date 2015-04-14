angular.module('myapp',[]).controller('noteCtrl',function($scope,$http){
	$scope.messages='fsdf,dsfsd';
	$scope.save=function(){
		alert('saved');
	};
	$scope.clear=function(){
		$scope.messages='';
	};
	$scope.left=function(){
		return 100-$scope.messages.length;
	};		
	$http.get("http://www.w3schools.com/angular/customers.php")
	.success(function(response){
		$scope.names = response.records;
	});


})