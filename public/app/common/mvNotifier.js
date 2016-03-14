var myApp = angular.module('app');

myApp.value('mvToastr',toastr);

myApp.factory('mvNotifier', function(mvToastr){
    return {
        notify: function(msg, type) {
            mvToastr.options.positionClass = 'toast-bottom-center';
            mvToastr.options.closeButton = true;
            if(type === 'success') {
                mvToastr.success(msg);
            } else if(type === 'error') {
                mvToastr.error(msg);
            } else if(type === 'warning') {
                mvToastr.warning(msg);
            } else if(type === 'info') {
                mvToastr.info(msg);
            }
        },

        success: function(msg) {
            mvToastr.success(msg);
        },
        warning: function(msg) {
            mvToastr.warning(msg);
        },
        error: function(msg) {
            mvToastr.error(msg);
        },
        info: function(msg) {
            mvToastr.info(msg);
        }
    }
});