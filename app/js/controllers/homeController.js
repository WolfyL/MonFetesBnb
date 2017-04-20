angular.module('app')
    .controller('HomeController', function($scope, CurrentUser, UserService) {

      $scope.section = {
        color : '#edc34e',
        backColor : '#3e2b2b'
      };
      $scope.color = '#edc34e';
      $scope.backColor = '#3e2b2b';

      UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;
            console.log($scope.user.isAdmin);
        });

    });
