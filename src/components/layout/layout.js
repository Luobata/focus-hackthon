export default {
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
    }
};
