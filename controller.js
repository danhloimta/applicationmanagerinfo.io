# applicationmanagerinfo.io
var app=angular.module("myapp",[]);
app.controller("mycontroller", function ($scope) {
    console.log("In mycontroller");

    $scope.newuser={};
    $scope.clickuser={};

    $scope.users=[
        {username: 'John', email: "John@gmail.com"},
        {username: 'Marry', email: "marry@gmail.com"},
        {username: 'Nguyen Danh Loi', email: "danhloi@yahoo.com"},
        {username: 'Tran Linh Linh', email: "linglinh@edu.com"}
    ];

    $scope.saveuser =function () {
        $scope.users.push($scope.newuser);
        $scope.newuser={};
    };
    $scope.selectuser= function (user) {
        console.log(user);
        $scope.clickeduser = user;
    };

    $scope.updateuser = function () {

    };
    $scope.deleteuser= function () {
        $scope.users.splice($scope.users.indexOf($scope.clickeduser),1);
    };
});
