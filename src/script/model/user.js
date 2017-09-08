export default {
    login (params, fn) {
        require('PROXY/user/login')(params, fn);
    }
};
