var myApp = angular.module('app');

myApp.value('mvToastr',toastr);

myApp.factory('mvNotifier', function(mvToastr){
    return {
        notify: function(msg, type) {
            if(type === 'success') {
                mvToastr.success(msg);
            } else if(type === 'error') {
                mvToastr.error(msg);
            } else if(type === 'warning') {
                mvToastr.warning(msg);
            } else if(type === 'info') {
                mvToastr.info(msg);
            }
            console.log(msg);
        }
    }
});