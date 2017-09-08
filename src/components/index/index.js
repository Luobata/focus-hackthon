import data from 'ASSETS/demo.json';
let map;
let marker;
let geocoder;

export default {
    data () {
        return {
            keyword: '搜狐媒体大厦',
            sohu: {
                lat: 39.983335,
                lng: 116.325403
            }
        }
    },
    methods: {
        search (e) {
            if (e.keyCode === 13) {
                geocoder.getLocation(this.keyword, (status, result) => {
                    if (status === 'complete' && result.info === 'OK') {
                        const location = result.geocodes[0].location;
                        map.setZoomAndCenter(12, [location.lng, location.lat]);
                        marker.setPosition(
                            new AMap.LngLat(
                                location.lng,
                                location.lat
                            )
                        );
                        const circle = new AMap.Circle({
                            center: new AMap.LngLat(location.lng, location.lat),// 圆心位置
                            radius: 4 * 1000, //半径
                            strokeColor: "#FF6600", //线颜色
                            strokeOpacity: 0, //线透明度
                            strokeWeight: 1, //线粗细度
                            fillColor: '#FF6700', //填充颜色
                            fillOpacity: 0.15//填充透明度
                        });
                        circle.setMap(map);
                        const url = '//localhost:9000/assets/circle.png';
                        const image = new AMap.GroundImage(url, circle.getBounds(), {
                        });
                        image.setMap(map);
                        setTimeout(() => {
                            let dom = document.querySelectorAll('.amap-container img');
                            let arr = data.data.content;
                            dom.forEach((item) => {
                                if (item.src.indexOf(url) !== -1) {
                                    item.className += 'rotate';
                                }
                            });
                            setTimeout(() => {
                                var marker = new AMap.Marker({ //添加自定义点标记
                                    map: map,
                                    position: [arr[9].lon, arr[9].lat], //基点位置
                                    animation: 'AMAP_ANIMATION_DROP',
                                    offset: new AMap.Pixel(-17, -42), //相对于基点的偏移位置
                                    extData: '1',
                                    content: '<div class="assign-pointer"><p class="assign-pointer-text">华清嘉园</p><p class="assign-pointer-text">5套</p></div>'
                                });
                                AMap.event.addListener(marker, 'touchstart', function () {
                                    console.log(this.getExtData());
                                    console.log(this);
                                });
                            }, 1000);
                        }, 100);
                    }
                });
            }
        }
    },
    mounted: function () {
        var that = this;
        //地图
        map = new AMap.Map('box-map', {
            scrollWheel: true,
            resizeEnable: true,
            zoom: 10,
            center: [116.397428, 39.90923]
        });
        AMap.plugin('AMap.Geocoder', function () {
            geocoder = new AMap.Geocoder({
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
        AMap.plugin('AMap.Autocomplete', function () {//回调函数
            //实例化Autocomplete
            var autoOptions = {
                city: "010", //城市，默认全国
                input:"suggest"//使用联想输入的input的id
            };
            autocomplete= new AMap.Autocomplete(autoOptions);
        });
    }
};
