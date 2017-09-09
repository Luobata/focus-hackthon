export const addInfoWindow = (map, marker) => {
    //实例化信息窗体
    const title = '方恒假日酒店<span style="font-size:11px;color:#F00;">价格:318</span>';
    let content = [];
    content.push(
        '<div class="content-img-wrap">' +
        '   <a href="./#/detail/1"><img class="content-img" src="http://tpc.googlesyndication.com/simgad/5843493769827749134"></a>' +
        '</div>'
    );
    content.push(
        '<div class="content-text">' +
        '   <div class="line-one">' +
        '       <span class="house-name">' +
        '           华清嘉园' +
        '       </span>' +
        '       <span class="house-prize">' +
        '           ￥579元㎡' +
        '       </span>' +
        '   </div>' +
        '   <ul class="line-two">' +
        '       <li class="time subway"><span class= "icon"></span>10分钟</li>' +
        '       <li class="time bus"><span class= "icon"></span>10分钟</li>' +
        '       <li class="time bike"><span class= "icon"></span>10分钟</li>' +
        '       <li class="time walk"><span class= "icon"></span>10分钟</li>' +
        '   </ul>' +
        '</div>'
    );
    var infoWindow = new AMap.InfoWindow({
        isCustom: true,  //使用自定义窗体
        content: createInfoWindow(title, content.join('')),
        offset: new AMap.Pixel(16, -45)
    });

    AMap.event.addListener(marker, 'click', function() {
        infoWindow.open(map, marker.getPosition());
    });

    //构建自定义信息窗体
    function createInfoWindow(title, content) {
        var info = document.createElement("div");
        info.className = "info";

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

        // 定义中部内容
        var middle = document.createElement("div");
        middle.className = "info-middle";
        middle.style.backgroundColor = 'white';
        middle.innerHTML = content;
        middle.appendChild(closeX);
        info.appendChild(middle);

        // 定义底部内容
        var bottom = document.createElement("div");
        bottom.className = "info-bottom";
        bottom.style.position = 'relative';
        bottom.style.top = '0px';
        bottom.style.margin = '0 auto';
        var sharp = document.createElement("img");
        sharp.src = "http://webapi.amap.com/images/sharp.png";
        bottom.appendChild(sharp);
        //info.appendChild(bottom);
        return info;
    }
    //关闭信息窗体
    function closeInfoWindow() {
        map.clearInfoWindow();
    }
};
