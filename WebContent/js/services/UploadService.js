/*
Responsible:nitesh kumar
*/

//service for uploading single file at a time

var app=angular.module("ResumeAnalyserApp");

app.service('uploadFile', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl){
        var data = new FormData();
   
        data.append('file', file);
        console.log(data);
        $http.post(uploadUrl, data, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(){
        	console.log("success");
        })
        .error(function(){
        	console.log("failure");
        });
    }
}]);