import data from 'ASSETS/demo.json';
import { addInfoWindow, addMarker } from './map';
import getData from './data';
let map;
let marker;
let image;
let geocoder;
let markers = [];

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
            if (e.keyCode === 13 || !e) {
                this.clearMap();
                geocoder.getLocation(this.keyword, (status, result) => {
                    if (status === 'complete' && result.info === 'OK') {
                        const location = result.geocodes[0].location;
                        map.setZoomAndCenter(13, [location.lng, location.lat]);
                        marker = new AMap.Marker({
                            map: map,
                            bubble: true
                        });
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
                        const url = '//localhost:6600/assets/circle.png';
                        image = new AMap.GroundImage(url, circle.getBounds(), {
                        });
                        image.setMap(map);
                        setTimeout(() => {
                            let dom = document.querySelectorAll('.amap-container img');
                            let arr = data.data.content;
                            let circle;
                            dom.forEach((item) => {
                                if (item.src.indexOf(url) !== -1) {
                                    item.className += 'rotate';
                                    circle = item;
                                }
                            });
                            let spend = 5000;
                            let start = new Date().getTime();
                            getData(location, 30, (data) => {
                                let end = new Date().getTime();
                                let time = (end - start) <= spend ? (spend - end + start) : 0;
                                let marker;
                                console.log(time);
                                setTimeout(() => {
                                    data.forEach((item) => {
                                        marker = addMarker(map, item);
                                        markers.push(marker);
                                        addInfoWindow(map, marker, item);
                                    });
                                    circle.className = '';
                                    circle.remove();
                                }, time);
                            });
                        }, 100);
                    }
                });
            }
        },
        clearMap () {
            map.clearMap();
            return;
            map.remove(markers);
            if (image) {
                map.remove([image]);
            }
            markers = [];
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
        AMap.plugin(['AMap.Autocomplete', 'AMap.PlaceSearch'], function () {//回调函数
            //实例化Autocomplete
            var autoOptions = {
                city: "010", //城市，默认全国
                input: "suggest"//使用联想输入的input的id
            };
            var placeSearch = new AMap.PlaceSearch({
                city: '北京',
                map: map
            });
            autocomplete = new AMap.Autocomplete(autoOptions);
            AMap.event.addListener(autocomplete, "select", function (e) {
                that.search();
                placeSearch.search(e.poi.name);
            }); 
        });
    }
};
