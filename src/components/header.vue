<template>
  <div class="head">
    <div class="back" @click="go()">
        <i class="iconfont">&#xe6bc;</i>
    </div>
    <div class="title">{{ title }}</div>
    <router-link to="/user" v-if="isShow">
        <div class="user">
            <i class="iconfont">&#xe680;</i>
        </div>
    </router-link>
  </div>
</template>
<script>
export default {
    data() {
        return {
            isShow: this.show != false
        }
    },
    props: [
        'title',
        'show'
    ],
    created() {
        console.log(this.isShow)
    },
    methods: {
        go() {
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss" scoped>
.head{
    position: relative;
    width: 100%;
    height: 2.8125rem;
    text-align: center;
    background: #f7f7f7;
    .back{
        position: absolute;
        left: .6rem;
        top: 0;
        line-height: 2.8125rem;
        .iconfont{
            font-size: 1.4rem;
        }
    }
    .title{
        display: inline-block;
        // max-width: 5rem;
        height: 2.8125rem;
        line-height: 2.8125rem;
        font-size: 1rem;
        color: #333;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .user{
        position: absolute;
        right: .6rem;
        top: .1rem;
        height: 2.8125rem;
        line-height: 2.8125rem;
        .iconfont{
            font-size: 1.7rem;
        }
    }
}
</style>