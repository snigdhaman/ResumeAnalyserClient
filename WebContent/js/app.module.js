/*
Responsible:nitesh kumar
*/

var app=angular.module("ResumeAnalyserApp",['ui.router','ngResource','ng-fusioncharts'])


app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('ResumeUpload',{
		url:'/resumeupload',
		templateUrl:'templates/resumeupload.html',
		controller:'ResumeUploadCtrl'


	})
	.state('ResumeAnaylse',{
		url:'/resumeanalyse',
		templateUrl:'templates/resumeanalyse.html',
		controller:'ResumeAnaylseCtrl'

	})

	$urlRouterProvider.otherwise('/resumeupload');
});
