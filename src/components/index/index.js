let map;
let marker;

export default {
    data () {
        return {
        }
    },
    methods: {
        search (e) {
            if (e.keyCode === 13) {
                console.log('search');
            }
        }
    },
    mounted: function () {
        var that = this;
        //地图
        map = new AMap.Map('box-map', {
            resizeEnable: true,
            zoom: 10,
            center: [116.397428, 39.90923]
        });
        AMap.plugin('AMap.Geocoder', function () {
            var geocoder = new AMap.Geocoder({
                city: "010"//城市，默认：“全国”
            });
            marker = new AMap.Marker({
                map: map,
                bubble: true
            })
            map.on('click', function (e) {
                marker.setPosition(e.lnglat);
                geocoder.getAddress(e.lnglat, function (status, result) {
                });
            });
        });
        return;
        map.setZoomAndCenter(10, [116.397428, 39.90923]);
        marker.setPosition(
                new AMap.LngLat(
                    116.397428,
                    39.90923
                    )
                );
    }
};
