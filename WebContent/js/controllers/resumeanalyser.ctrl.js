var app=angular.module("ResumeAnalyserApp");

app.controller('ResumeAnaylseCtrl',['$scope','$http', function($scope, $http){
	$scope.myDataSource = {
		data:[]
	};
	$scope.myPieDataSource = {
		data:[]
	};
	$scope.submitSearchParameters = function (){
		$scope.myDataSource = {
			data:[]
		};
		$scope.myPieDataSource = {
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
  }).then(function mySuccess(response) {
      $scope.myWelcome = response.data;
			console.log($scope.myWelcome);
			for (var key in $scope.myWelcome) {
					$scope.myDataSource.data.push({
						"label" : key,
						"value" : $scope.myWelcome[key]
					});
			}
			var total = $scope.myWelcome["Total"];
			var selectedEmployee = $scope.myWelcome["SelectedEmployee"];
			var pieSelectedEmployee = (selectedEmployee/total)*100;
			$scope.myPieDataSource.data.push({
				"label" : "total",
				"value" : 100 - pieSelectedEmployee
			},
			{
				"label" : "selectedEmployee",
				"value" : pieSelectedEmployee
			});
    }, function myError(response) {
						console.log("failure");
      $scope.mytest = response.statusText;
  });
};
}]);
