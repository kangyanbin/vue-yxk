<template>
    <div class="footer">
        <!-- <a href="" @click = "gotoAddress({path: '/home'})">
            <img src="@/assets/img/img1.png" class="img1" :class="{ active: $route.path.indexOf('home') == -1 && $route.path !== '/' }" alt="">
            <img src="@/assets/img/img11.png" class="img11" :class="{ active: $route.path == '/' || $route.path.indexOf('home') !== -1 }" alt="">
            <span>首页</span>
        </a>
        <a href="" @click = "gotoAddress({path: '/order'})">
            <img src="@/assets/img/img2.png" class="img2" :class="{ active: $route.path.indexOf('order') == -1 }" alt="">
            <img src="@/assets/img/img22.png" class="img22" :class="{ active: $route.path.indexOf('order') !== -1 }" alt="">
            <span>订单</span>
        </a>
        <a href="" @click = "gotoAddress({path: '/user'})">
            <img src="@/assets/img/img3.png" class="img3" :class="{ active: $route.path.indexOf('user') == -1 }" alt="">
            <img src="@/assets/img/img33.png" class="img33" :class="{ active: $route.path.indexOf('user') !== -1 }" alt="">
            <span>个人中心</span>
        </a> -->
        <router-link to="/home">
            <img src="@/assets/img/img1.png" class="img1" :class="{ active: $route.path.indexOf('home') == -1 && $route.path !== '/' }" alt="">
            <img src="@/assets/img/img11.png" class="img11" :class="{ active: $route.path == '/' || $route.path.indexOf('home') !== -1 }" alt="">
            <span>首页</span>
        </router-link>
        <router-link :to="order">
            <img src="@/assets/img/img2.png" class="img2" :class="{ active: $route.path.indexOf('order') == -1 }" alt="">
            <img src="@/assets/img/img22.png" class="img22" :class="{ active: $route.path.indexOf('order') !== -1 }" alt="">
            <span>订单</span>
        </router-link>
        <router-link to="/user">
            <img src="@/assets/img/img3.png" class="img3" :class="{ active: $route.path.indexOf('user') == -1 }" alt="">
            <img src="@/assets/img/img33.png" class="img33" :class="{ active: $route.path.indexOf('user') !== -1 }" alt="">
            <span>个人中心</span>
        </router-link>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    data() {
        return {
            isActive: false,
            order: "/order"
        }
    },
    created() {
        if(!this.userInfo){
            this.order = "/login";
        }
    },
    computed: {
        ...mapState(['userInfo'])
    },
    mounted(){
        console.log(this.$route.path)
    },
    methods: {
        // gotoAddress(path){
        //     if(this.userInfo){
        //         this.$router.push(path);
        //         console.log("登录了")
        //     }else if(path.path === "/order"){
        //         this.$router.push({path: '/login'});
        //         console.log("去登录吧")
        //     }else{
        //         this.$router.push(path);
        //     }
            
        // }
    },
}
</script>
<style lang="scss" scoped>
.footer{
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 99999;
    background: #fff;
    width: 100%;
    height: 3.4375rem;
    display: flex;
    justify-content: center;
    align-items: center;
    a{
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        img{
            display: none;
        }
        .img1{
            width: 1.53125rem;
            height: 1.46875rem;
        }
        .img2{
            width: 1.6rem;
            height: 1.6rem;
        }
        .img3{
            width: 1.625rem;
            height: 1.46875rem;
        }
        .img11{
            width: 1.6875rem;
            height: 1.6875rem;
        }
        .img22{
            width: 1.6rem;
            height: 1.6rem;
        }
        .img33{
            width: 1.625rem;
            height: 1.46875rem;
        }
        .active{
            display: block;
        }
        span{
            font-size: .6rem;
            margin-top: .2rem;
        }
    }
}
</style>