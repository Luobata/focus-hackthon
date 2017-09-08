const request = require('lib-request');
const ajax = request.ajax;

request.ajax = function() {
    var args = [].slice.call(arguments);
    var complete = args[0].complete;
    var url = args[0].url;
    if (url.indexOf('house-sv-base') === -1) {
        args[0].withCredentials = true;
    }
    args[0].complete = function(data) {
        //if (data && data.code && data.code === '1' && url.indexOf(
        //        'house-sv-base') === -1) {
        //    var origin = '//' + window.location.host;
        //    window.location.href = origin + '/front/index.html';
        //} else {
            complete.apply(this, arguments);
        //}
    }
    ajax.apply(this, arguments);
};

export default request;
