<template>
    <div class="left-slider-wrap">
        <el-menu v-bind:default-active="current"  class="el-menu-vertical-demo">
            <el-submenu index="1">
                <template slot="title">入驻账号管理</template>
                <router-link to="/account/list"><el-menu-item index="/account/list" >入驻账号审核</el-menu-item></router-link>
            </el-submenu>          
            <el-submenu index="2">
                <template slot="title">资讯管理</template>
                <router-link to="/article/list/1"><el-menu-item index="/article/list/1" >MP平台资讯审核</el-menu-item></router-link>
                <router-link to="/article/list/2"><el-menu-item index="/article/list/2" >spider资讯审核</el-menu-item></router-link>
                <router-link to="/article/list/3"><el-menu-item index="/article/list/3" >导入数据</el-menu-item></router-link>
                <router-link to="/article/whiteList"><el-menu-item index="/article/whiteList" >白名单</el-menu-item></router-link>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">用户反馈管理</template>
                <router-link to="/correction"><el-menu-item index="/correction" >内容纠错</el-menu-item></router-link>
                <router-link to="/feedback"><el-menu-item index="/feedback" >意见建议</el-menu-item></router-link>
            </el-submenu>
        </el-menu>
    </div>
</template>
<style scoped>
    .left-slider-wrap {
        height: 100%;
    }

    .left-slider-wrap .el-menu-item {
        border-bottom: 1px solid #e1e1e1;
        background: #eff2f7;
    }

    .left-slider-wrap .el-menu-item:hover, .left-slider-wrap .el-menu-item.is-active {
        background-color: #d3dce6;
    }

    .left-slider-wrap .el-menu-item a {
        display: block;
        color: #475669;
    }

    .left-slider-wrap .el-menu-item:hover a, .left-slider-wrap .el-menu-item.is-active a {
        color: #20a0ff;
    }

    .left-slider-wrap .el-submenu {
        border-bottom: 1px solid #e1e1e1;
    }
</style>

<script>
    module.exports = {
        data: function () {
            return {
                self_name:'left-slider',
                current: '/account/list'
            }
        },
        watch: {
            '$route' : function(curVal, oldVal) {
                this.urlPath(this.$route.path);
            }
        },
        beforeMount : function () {
            this.urlPath(this.$route.path);
        },
        methods: {
            urlPath : function (path) {
                if(path.indexOf('account') > -1){
                    this.current = '/account/list';
                }else if(path.indexOf('relation') > -1) {
                     this.current = '/relation/list';
                }else if(path.indexOf('dynamic/1') > -1) {
                    this.current = '/dynamic/1';
                }else if(path.indexOf('dynamic/2') > -1) {
                    this.current = '/dynamic/2';
                }else if(path.indexOf('/article/list/1') > -1) {
                    this.current = '/article/list/1';
                }else if(path.indexOf('/article/list/2') > -1) {
                    this.current = '/article/list/2';
                }else if(path.indexOf('/article/list/3') > -1) {
                    this.current = '/article/list/3';
                }else if(path.indexOf('/article/whiteList') > -1) {
                    this.current = '/article/whiteList';
                }else if(path.indexOf('article') > -1) {
                    this.current = '/article/list/2';
                }else if(path.indexOf('correction') > -1) {
                    this.current = '/correction';
                }else if(path.indexOf('feedback') > -1) {
                    this.current = '/feedback';
                }else{
                    this.current = '/account/list';
                }
            }
        }
    }
</script>
