<template>
    <div class='main'>
        <router-view :key='$route.fullPath'>
        </router-view>
        <footer>
            <div class='out'>Brought to you by the IoT platform team at <a href='https://droplit.io'>droplit.io</a></div>
            <div class='copyright'>
                {{`© Droplit, Inc. ${(new Date()).getFullYear()}`}}
            </div>
        </footer>
    </div>
</template>

<script lang="ts">
import { router } from "./index";
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss" scoped>
.main {
    position: relative;
    min-height: 100vh;
    width: 100%;
    padding-bottom: 150px;
}

footer {
    position: absolute;
    bottom: 0;
    background: #0f1212;
    width: 100%;
    padding: 50px;
    height: 150px;
    text-align: center;
    .out {
        margin-bottom: 20px;
        color: #666666;
        line-height: 1.25em;
    }
    .copyright {
        color: #444444;
    }
}
</style>
