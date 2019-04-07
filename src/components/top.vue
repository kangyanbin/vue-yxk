<template>
    <div class="totop" @click="toTop()">
        <img src="@/assets/img/top.png" alt="">
    </div>
</template>
<script>
export default {
    methods: {
        toTop() {
            // console.log(document.documentElement.scrollTop)
            document.documentElement.scrollTop = 0;
        }
    }
}
</script>

<style lang="scss" scoped>
.totop{
    position: fixed;
    z-index: 998;
    right: 1rem;
    bottom: 5rem;
    width: 2.5rem;
    height: 2.5rem;
    img{
        width: 100%;
        height: 100%;
        display: block;
    }
}
</style>

