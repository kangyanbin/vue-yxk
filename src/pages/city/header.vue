<template>
    <div class="header">
        选择城市
        <i class="iconfont" @click="toHome">&#xe625;</i>
    </div>
</template>
<script>
export default {
    methods:{
        toHome() {
            this.$router.push({
                path: '/home'
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.header{
    width: 100%;
    height: 2.75rem;
    line-height: 2.75rem;
    color: #333;
    background: #fed101;
    text-align: center;
    position: relative;
    font-size: 1rem;
    i{
        position: absolute;
        top: .3rem;
        right: .5rem;
        // width: 1rem;
        // height: 1rem;
        font-size: 2.5rem;
        line-height: 2.75rem;
    }
}
</style>