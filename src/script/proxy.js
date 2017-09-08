/**
 * Created by wangwei on 2016/11/19.
 */
var interfaceModule = '';
var submitUrl;
var handleUrl = function (url) {
    var interfaceUrl;
    if (url.indexOf('?') > 0) {
        var urlParamsQuery = url.split('?');
        submitUrl = urlParamsQuery.split('=')[1];
        interfaceUrl = 'action';
    } else {
        interfaceUrl = url.split('/')[2].split('.')[0];
    }
    return interfaceUrl;
};
var req = function (url, params, fn) {
    var jsonName = handleUrl(url), proxy;
    proxy = require('./data/proxy/' + jsonName);
    proxy(url, params, fn);
};
module.exports = req;
