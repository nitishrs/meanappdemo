var myApp = angular.module('app');

myApp.controller('mvUserListCtrl', function($scope, mvUser, ngDialog) {
    mvUser.query().$promise.then(function(data){
        $scope.users = data;
    }); // The function query() issues a GET request to /api/users

    var refresh = function() {
        mvUser.query().$promise.then(function(data){
            console.log('inside refresh function');
            $scope.users = data;
        }); // The function query() issues a GET request to /api/users
    };
    $scope.deleteUser = function(id) {
        ngDialog.open({
                template: '/partials/dialogs/confirm-user-delete',
                controller: ['$scope', function($scope) {
                    $scope.confirmDeleteUser = function() {
                        console.log('deleting and closing');
                        var userToDelete = mvUser.get({_id: id}, function() {
                            userToDelete.$deleteById({_id: id}, function() {
                                console.log('deleted successfully');
                                refresh();
                            })
                        });
                        ngDialog.close();
                    };
                }]
            }
        );
    };
});