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
</style>
<script src="./index.js">
</script>
