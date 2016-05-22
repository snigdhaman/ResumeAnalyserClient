var app=angular.module("ResumeAnalyserApp");

app.controller('ResumeAnaylseCtrl',['$scope','$http', function($scope, $http){
	$scope.myDataSource = {
		data:[]
	};
	$scope.submitSearchParameters = function (){
		$scope.myDataSource = {
			data:[]
		};
var skills={"skills" : $scope.search.skills};
var yearsOfExpLowerBound={"yearsOfExpLowerBound" : $scope.search.yearsOfExpLowerBound};
var yearsOfExpUpperBound={"yearsOfExpUpperBound" : $scope.search.yearsOfExpUpperBound};
var finaljson=angular.merge(skills,yearsOfExpLowerBound,yearsOfExpUpperBound);

	$http({
    method : "POST",
    url : "http://192.168.43.90:9000/ResumeAnalyser/queryGeneralData",
		data : finaljson
  }).then(function mySucces(response) {
		 console.log("success");
      $scope.myWelcome = response.data;
			for (var key in $scope.myWelcome) {
					$scope.myDataSource.data.push({
						"label" : key,
						"value" : $scope.myWelcome[key]
					});
			}
    }, function myError(response) {
						console.log("failure");
      $scope.mytest = response.statusText;
  });
};
}]);
