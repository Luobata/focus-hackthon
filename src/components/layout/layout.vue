<template>
    <div class="doc">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
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
