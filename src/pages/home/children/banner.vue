<template>
    <div class="banner">
        <transition enter-active-class="fadeInLeft" leave-active-class="fadeOutLeft">
            <div class="banner-left animated" v-show="show">
                <div class="user">
                    <div class="avatar">
                        <img src="@/assets/img/header_img.png" alt="">
                    </div>
                    <div class="name">用户名</div>
                </div>
            </div>
        </transition>
        <div class="banner-header">
            <div class="banner-top">
                <router-link to="/city" class="top-left">
                    <div>
                        {{ cityName }}
                        <i class="iconfont">&#xe668;</i>
                    </div>
                </router-link>
                <router-link to="/search" class="top-search">
                    <div>
                        <i class="iconfont">&#xe617;</i>
                        泰国
                    </div>
                </router-link>
                <div class="top-right">
                    <img src="@/assets/img/show.png" alt="" @click="toShow">
                </div>
            </div>
            <!-- <div class="banner-swiper">
                <swiper :options="swiperOption">
                    <swiper-slide>
                        <img src="@/assets/img/swiper1.png" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="@/assets/img/swiper2.jpg" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="@/assets/img/swiper3.png" alt="">
                    </swiper-slide>
                    <div class="swiper-pagination"  slot="pagination"></div>
                </swiper>
            </div> -->
            <div class="banner-swiper">
                <swiper v-if="flash.length" :options="swiperOption">
                    <swiper-slide v-for="(item,index) in flash" :key="index">
                        <img src="@/assets/img/swiper1.png" alt="">
                    </swiper-slide>
                    <div class="swiper-pagination"  slot="pagination"></div>
                </swiper>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    props: [
        'flash'
    ],
    data() {
        return {
            show:false,
            swiperOption: {
                loop:true,
                autoplay:true,
                pagination: {
                    el: ".swiper-pagination"
                }
        }
        }
    },
    mounted() {
        
    },
    computed: {
        ...mapState(['cityName'])
    },
    methods:{
        toShow() {
            this.show = !this.show;
        }
    }
}
</script>
<style lang="scss" scoped>
.banner-left{
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100000;
    background: #2d2d2d;
    width: 15rem;
    height: 100%;
    .user{
        margin-top: 2rem;
        padding-bottom: 1rem;
        text-align: center;
        border-bottom: 1px solid #1c1c1c;
        .avatar{
            img{
                width: 4rem;
                height: 4rem;
            }
        }
        .name{
            margin-top: .3rem;
            color: #ffffff;
            font-size: 1rem;
        }
    }
}
.banner-header{
    // background-color: red;
    position: relative;
    width: 100%;
    // height: 5.6rem;
    .banner-top{
        position: absolute;
        left: 0;
        top: 1rem;
        z-index: 1000;
        width: 100%;
        height: 1.8rem;
        display: flex;
        justify-content:center;
        align-items: center;
        // background: red; 
        .top-left{
            padding: .1rem .6rem;
            font-size: 1rem;
            color: #ffffff;
        }
        .top-search{
            flex: 1;
            color: #333;
            background: #ffffff;
            border-radius: .2rem;
            font-size: .373333rem;
            padding: .3rem .4rem;
            div i{
                padding: 0 .2rem;
            }
        }
        .top-right{
            width: 1.5rem;
            height: 1.5rem;
            padding:.1rem .8rem;
            img{
                width: 1.5rem;
                height: 1.5rem;
            }
        }
    }
    .banner-swiper{
        width: 100%;
        // height: 5.6rem;
        img{
            width: 100%;
            height: 100%;
        }
        .swiper-pagination >>> .swiper-pagination-bullet-active{
            opacity: 1;
            background: orange !important;
        }
    }
}

</style>