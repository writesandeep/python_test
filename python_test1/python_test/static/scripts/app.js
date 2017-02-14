'use strict';

angular.module('Authentication', []);
angular.module('Home', []);


var app = angular.module('BasicHttpAuthExample', ['Authentication', 'Home', 'ngRoute', 'ngCookies']);

app.config(['$httpProvider', function ($httpProvider){
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
}]) 

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'static/uitemplates/login.html',
            // hideMenus: true
        })
 
        .when('/home', {
            controller: 'HomeController',
            templateUrl: 'static/uitemplates/home.html'
        })
        .when('/register', {
            controller: 'SignupController',
            templateUrl: 'static/uitemplates/registeration.html'
        })
        .when('/contact', {
            controller: 'ContactController',
            templateUrl: 'static/uitemplates/contact.html'
        })
        .otherwise({ redirectTo: '/login' });
}])

app.controller('LoginController',function($scope, $http){

    $scope.user = {};

    $scope.message = 'I am logged in';

    var post_data = {};
    post_data['username'] = $scope.user.username;
    post_data['password'] = $scope.user.password;

    post_data = JSON.stringify(post_data);

    $scope.login = function(){   
        $http({
            method  : 'POST',
            url     : 'loginuser/authenticateuser/',
            data    :  post_data,

        }).success(function (data) {
            console.log('this is data',data);
        })
    }
    
});

app.controller('HomeController',function($scope){
    $scope.homemessage = 'i am at home page';
});


app.controller('ContactController',function($scope){
    $scope.contactmessage = 'This is Contact Page';
});
