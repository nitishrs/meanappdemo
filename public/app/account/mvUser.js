angular.module('app').factory('mvUser', function($resource) {
    var UserResource = $resource('/api/users/:_id', {_id: "@id"}, {
        update: {method: 'PUT', isArray: false},
        updateById: {method: 'PUT', isArray: false, parameters: {_id: '0'}},
        deleteById: {method: 'DELETE', isArray: false, parameters: {_id: '0'}}
    });

    UserResource.prototype.isAdmin = function() {
        return this.roles && this.roles.indexOf('admin') > -1;
    };

    UserResource.prototype.isTeacher = function() {
        return this.roles && this.roles.indexOf('teacher') > -1;
    };

    return UserResource;
});