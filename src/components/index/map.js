export const addInfoWindow = (map, marker, data) => {
    //实例化信息窗体
    const title = '方恒假日酒店<span style="font-size:11px;color:#F00;">价格:318</span>';
    const imgSrc = '//t1.focus-img.cn/sh640x300sh';
    let content = [];
    let back = '';

    data.subway = data.subway ? data.subway + '分钟' : '--';
    data.bus = data.bus ? data.bus + '分钟' : '--';
    data.walking = data.walking ? data.walking + '分钟' : '--';
    data.bicycling = data.bicycling ? data.bicycling + '分钟' : '--';

    content.push(
        '<div class="content-wrap">' +
        '<div class="content-img-wrap">' +
        '   <a href="./#/detail/1"><img class="content-img" src="' + imgSrc + data.projPhotoPath + '"></a>' +
        '</div>' +
        '<div class="content-text">' +
        '   <div class="line-one">' +
        '       <span class="house-name">' +
        '           ' + data.projName  +
        '       </span>' +
        '       <span class="house-prize">' +
        '           ￥579元㎡' +
        '       </span>' +
        '   </div>' +
        '   <ul class="line-two">' +
        '       <li class="time subway"><span class= "icon"></span>' + data.subway + '</li>' +
        '       <li class="time bus"><span class= "icon"></span>' + data.bus + '</li>' +
        '       <li class="time bike"><span class= "icon"></span>' + data.bicycling + '</li>' +
        '       <li class="time walk"><span class= "icon"></span>' + data.walking + '</li>' +
        '   </ul>' +
        '</div>' +
        '</div>'
    );

    back = 
        '<div class="wrap-back">' +
        '   <div class="logo"></div>' +
        '   <div class="wrap-text"></div>' +
        '</div>';
    var infoWindow = new AMap.InfoWindow({
        isCustom: true,  //使用自定义窗体
        content: createInfoWindow(title, content.join(''), back),
        offset: new AMap.Pixel(16, -45)
    });

    AMap.event.addListener(marker, 'click', function() {
        infoWindow.open(map, marker.getPosition());
    });

    //构建自定义信息窗体
    function createInfoWindow(title, content, backs) {
        var info = document.createElement("div");
        var back;
        var middle;
        info.className = "info";

        info.onclick = (e) => {
            let src = $(e.target);
            let txt = $(info).find('.wrap-text');

            if (!src.parents('.info-middle').length) {
                $(info).removeClass('rotate-card');
                return;
            }

            if (!src.hasClass('time')) {
                src = src.parents('.time');
            }


            back.className = 'info-back';

            if (src.hasClass('subway')) {
                if (data.subway === '--') return;
                $(back).addClass('subway');
                txt.html(data.subwaySteps.join('</br>'));
                $(info).addClass('rotate-card');
            }

            if (src.hasClass('bus')) {
                if (data.bus === '--') return;
                $(back).addClass('bus');
                txt.html(data.busSteps.join('</br>'));
                $(info).addClass('rotate-card');
            }

            if (src.hasClass('bike')) {
                if (data.bicycling === '--') return;
                $(back).addClass('bike');
                txt.html(data.bicyclingSteps.join('</br>'));
                $(info).addClass('rotate-card');
            }

            if (src.hasClass('walk')) {
                if (data.walking === '--') return;
                $(back).addClass('walk');
                txt.html(data.walkingSteps.join('</br>'));
                $(info).addClass('rotate-card');
            }


        };
        //可以通过下面的方式修改自定义窗体的宽高
        //info.style.width = "400px";
        // 定义顶部标题
        var top = document.createElement("div");
        var titleD = document.createElement("div");
        var closeX = document.createElement("img");
        top.className = "info-top";
        titleD.innerHTML = title;
        closeX.src = "http://webapi.amap.com/images/close2.gif";
        closeX.className = 'closeX';
        closeX.onclick = closeInfoWindow;

        top.appendChild(titleD);
        top.appendChild(closeX);
        // info.appendChild(top);

        var mask = document.createElement("div");
        mask.className = "info-mask";
        info.appendChild(mask);

        // 定义中部内容
        middle = document.createElement("div");
        middle.className = "info-middle";
        middle.style.backgroundColor = 'white';
        middle.innerHTML = content;
        middle.appendChild(closeX);
        info.appendChild(middle);

        // 定义底部内容
        back = document.createElement("div");
        back.className = "info-back";
        back.innerHTML = backs;
        info.appendChild(back);
        return info;
    }
    //关闭信息窗体
    function closeInfoWindow() {
        map.clearInfoWindow();
    }
};

export const addMarker = (map, data) => {
    let num = data.pid % 10;
    if (num === 0) num++;
    const marker = new AMap.Marker({ //添加自定义点标记
        map: map,
        position: [data.lon, data.lat], //基点位置
        animation: 'AMAP_ANIMATION_DROP',
        offset: new AMap.Pixel(-17, -42), //相对于基点的偏移位置
        extData: '1',
        content: '<div class="assign-pointer"><p class="assign-pointer-text">' + data.projName + '</p><p class="assign-pointer-text">' + num + '套</p></div>'
    });

    //AMap.event.addListener(marker, 'touchstart', function () {
    //    console.log(this.getExtData());
    //    console.log(this);
    //});

    return marker;
};
