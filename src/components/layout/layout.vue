<template>
    <div class="doc">
        <index-header></index-header>
        <div class="content" :style="{ height: mheight + 'px' }">
            <div class="left-slider">
                <left-slider></left-slider>
            </div>
            <div class="main-content" :style="{ height: mheight - 20 + 'px', width: mwidth + 'px' }" id="mainContent">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div>
        <el-button v-loading.fullscreen.lock="fullscreenLoading" style="display: none;"></el-button>
    </div>
</template>
<style scoped>
    .doc {
    }
    .content {
        background: #eff2f7;
        overflow: hidden;
    }
    .content .left-slider {
        width: 200px;
        float: left;
    }
    .content .main-content {
        height: 100%;
        overflow-y: auto;
        margin-left: 200px;
        background: #FFF;
        padding: 20px 20px 20px 20px;
    }
</style>
<script src="./layout.js">
</script>
