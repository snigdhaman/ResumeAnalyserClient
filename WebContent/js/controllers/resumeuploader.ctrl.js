var app=angular.module("ResumeAnalyserApp");

app.controller('ResumeUploadCtrl',function($scope){
	$scope.getFileDetails = function (e) {
		$scope.files = [];
		$scope.$apply(function () {
			for (var i = 0; i < e.files.length; i++) {
				$scope.files.push(e.files[i]);
			}
		});
	};

	$scope.uploadFile = function () {
		var data = new FormData();
		for (var i in $scope.files) {
			data.append("uploadedFile", $scope.files[i]);
		}

		//Using XMLHttpRequest to create POST create --we can use resource or http service also
		var objXhr = new XMLHttpRequest();
		objXhr.addEventListener("progress", updateProgress, false);
		objXhr.addEventListener("load", transferComplete, false);

		// Calling REST API for uploading resumes
		objXhr.open("POST", "http://192.168.43.90:9000/ResumeAnalyser/uploadMultipleFiles");
		console.log("data is:"+data);
		objXhr.send(data);
	}

	// updating progress bar
	function updateProgress(e) {
		if (e.lengthComputable) {
			console.log("Files uploaded successfully");
			document.getElementById('probarentity').setAttribute('value', e.loaded);
			document.getElementById('probarentity').setAttribute('max', e.total);
		}
	}

	//confirmation on success of uploading files
	function transferComplete(e) {
		console.log(e);
		console.log("Files uploaded successfully");
	}




});


