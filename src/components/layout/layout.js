import userModel from 'MODEL/user';

require("../../lib/ui.js");
var indexHeader = window.uiApp.constructor;
//var $$statusModel = require('../../script/data/model/app-status.js');
export default {
    components: {
        indexHeader,
        'left-slider': require('../left-slider/left-slider')
    },
    data: function () {
        return {
            fullscreenLoading: false,
            mheight: document.documentElement.clientHeight - 60
        }
    },
    beforeMount: function () {
        var _this = this;
        window.addEventListener('resize', function () {
            _this.mheight = document.documentElement.clientHeight - 60;
        });
        //$$statusModel.on('setValue', function (data) {
        //    if (data.key === 'loading') {
        //        _this.fullscreenLoading = data.value;
        //    }
        //});
        //userModel.on('getUserData', function (data) {
        var userName = this.$store.state.user.userName;
        var mainUrl = "http://house.focus.cn/";
        var siteUrl = "http://shengtai-admin.focus.cn/ecology-mp-admin/#/";
        var siteName = "看房团管理系统";
        var platformUrl = "http://common-ldap.focus.cn/";
        var logoutUrl = '';
        uiApp.getModule('module-admin-header').set('mainUrl', mainUrl);
        uiApp.getModule('module-admin-header').set('siteUrl', siteUrl);
        uiApp.getModule('module-admin-header').set('siteName', siteName);
        uiApp.getModule('module-admin-header').set('platformUrl', platformUrl);
        uiApp.getModule('module-admin-header').set('userName', userName);
        uiApp.getModule('module-admin-header').set('logoutUrl', logoutUrl);
        //});
        //userModel.getUserData();
    }
};
