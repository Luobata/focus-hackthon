<template lang="pug">
    div.index-wrap
        div#box-map.box-map
        div.search-wrap
            div.back
            input#suggest.search(type="text" @keydown="search" v-model="keyword")
            div.time-select
                el-dropdown
                    span.el-dropwodn-link 30
                        i.select-icon
                    el-dropdown-menu(slot="dropdown")
                        .el-dropdown-item xx
</template>
<style scoped>
    .index-wrap {
        height: 100%;
        position: relative;
    }
    #box-map {
        height: 100%;
    }
    .search-wrap {
        width: 94%;
        height: 6.7%;
        line-height: 47px;
        position: fixed;
        top: 4%;
        left: 0;
        right: 0;
        margin: auto;
        background: #FFFFFF;
        border: 1px solid #FFFFFF;
        box-shadow: 2px 2px 4px 2px #DDDDDD;
        border-radius: 2.5px;
        font-size: 0;
    }
    .back {
        display: inline-block;
        height: 100%;
        width: 12.5%;
        text-align: center;
        background: url('../../assets/backicon.png') no-repeat center center;
        background-size: 50%;
    }
    .search {
        width: 61.5%;
        height: 23.5px;
        line-height: 23.5px;
        vertical-align: 17px;
        padding-left: 6px;
        font-family: PingFangSC-Light;
        font-size: 14px;
        color: #4A4A4A;
        border: 1px solid #DDDDDD;
        border-width: 0 1px;
        outline: none;
    }
    .time-select {
        width: 23%;
        height: 100%;
        margin: 0;
        padding-left: 20px;
        box-sizing: border-box;
        vertical-align: top;
        display: inline-block;
    }
    .time-select .select-icon {
        width: 25px;
        height: 10px;
        display: inline-block;
        background: url('../../assets/dropdown.png') no-repeat center center;
        background-size: 50%;
        padding-left: 10px;
    }
</style>
<style>
    .time-select .el-dropdown {
        font-family: PingFangSC-Light;
        font-size: 14px;
        color: #4A4A4A;
    }
    .index-wrap .info-middle,
    .index-wrap .info-back {
        width: 269.5px;
        height: 200px;
        background: #fff;
        font-size: 0;
        backface-visibility: hidden;
    }
    .index-wrap .info-middle {
        z-index: 2;
        position: relative;
    }
    .index-wrap .content-img {
        width: 100%;
        height: 120px;
    }
    .index-wrap .content-text {
        width: 100%;
        height: 80px;
        padding: 11.5px 6.5px 11.5px;
        box-sizing: border-box;
    }
    .index-wrap .content-text .line-one,
    .index-wrap .content-text .line-two {
        width: 100%;
        overflow: hidden;
    }
    .index-wrap .content-text .line-one .house-name {
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #000000;
        float: left;
    }
    .index-wrap .content-text .line-one .house-prize {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #FF6A00;
        float: right;
    }
    .index-wrap .content-text .line-two {
        margin-top: 10px;
    }
    .index-wrap .content-text .line-two .time {
        display: inline-block;
        width: 25%;
        font-family: PingFangSC-Regular;
        font-size: 12px;
    }
    .index-wrap .content-text .line-two .time.subway {
        color: #00B0F5;
    }
    .index-wrap .content-text .line-two .time.bus {
        color: #FDAB53;
    }
    .index-wrap .content-text .line-two .time.bike {
        color: #00BA88;
    }
    .index-wrap .content-text .line-two .time.walk {
        color: #C9449B;
    }
    .index-wrap .content-text .line-two .time .icon {
        width: 19px;
        height: 19px;
        display: inline-block;
        vertical-align: -5px;
        margin-right: 2.5px;
    }
    .index-wrap .content-text .line-two .time.subway .icon {
        background: url('../../assets/subway.png') no-repeat center center;
        background-size: 100%;
    }
    .index-wrap .content-text .line-two .time.bus .icon {
        background: url('../../assets/bus.png') no-repeat center center;
        background-size: 100%;
    }
    .index-wrap .content-text .line-two .time.bike .icon {
        background: url('../../assets/bike.png') no-repeat center center;
        background-size: 100%;
    }
    .index-wrap .content-text .line-two .time.walk .icon {
        background: url('../../assets/walk.png') no-repeat center center;
        background-size: 100%;
    }
    .index-wrap .info {
        position: relative;
        transition: 0.6s;
	    transform-style: preserve-3d;
    }
    .index-wrap .info:after {
        content: "";
        position: absolute;
        top: 200px;
        left: 124px;
        width: 0;
        height: 0;
        border: 8px solid transparent;
        border-top-color: #fff;
    }
    .index-wrap .info .closeX {
        position: absolute;
        right: 10px;
        top: 10px;
    }

    .content-wrap {
        position: relative;
    }
    .index-wrap .info-back {
        backface-visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;
        transform: rotateY(-180deg);
    }
    .index-wrap .info-back .wrap-back {
        padding: 20px;
        box-sizing: border-box;
    }
    .index-wrap .info-back .wrap-back .wrap-text {
        font-family: PingFangSC-Light;
        font-size: 14px;
        color: #4A4A4A;
        margin-top: 15px;
        line-height: 25px;
        max-height: 100px;
        overflow-y: auto;
    }
    .index-wrap .info-back .logo {
        width: 38px;
        height: 38px;
        display: inline-block;
    }
    .index-wrap .info-back.subway .logo {
        background: url('../../assets/subway.png') no-repeat center center;
        background-size: 100%;
    }
    .index-wrap .info-back.bus .logo {
        background: url('../../assets/bus.png') no-repeat center center;
        background-size: 100%;
    }
    .index-wrap .info-back.bike .logo {
        background: url('../../assets/bike.png') no-repeat center center;
        background-size: 100%;
    }
    .index-wrap .info-back.walk .logo {
        background: url('../../assets/walk.png') no-repeat center center;
        background-size: 100%;
    }
    .index-wrap .info.rotate-card {
        transform: rotateY(180deg);
    }
</style>
<script src="./index.js">
</script>
