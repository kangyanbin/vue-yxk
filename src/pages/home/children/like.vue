<template>
    <div class="like">
        <div class="like-list" v-for="(item,index) in classified" :key="index">
            <div class="like-top">
                <div class="title-left">
                    <span>{{ item.content }}</span>
                </div>
                <p class="title-right">更多></p>
            </div>
            <div class="like-bottom">
                <div class="content-banner" @click="toDetails(item.banner.id)">
                    <div class="banner-tag">{{ item.banner.place_label }}</div>
                    <div class="banner-info">
                        <div class="banner-title">{{ item.banner.title }}</div>
                        <div class="banner-price">
                            <span>&yen;</span>
                            <span>{{ item.banner.price_label }}</span> 
                            <span>起</span>
                        </div>
                    </div>
                </div>
                <div class="content-route">
                    <ul class="content-list">
                        <li class="route" v-for="(key,index) in item.data" :key="index" @click="toDetails(key.id)">
                            <div class="route-img">
                                <img src="http://localhost:8080/img/like2.jpg" alt="">
                                <span>{{ key.place_label }}</span>
                            </div>
                            <div class="route-desc">
                                <div class="desc-title">
                                    <span>{{ key.title }}</span>
                                </div> 
                                <div class="desc-price">
                                    <span class="price-fh">&yen;</span>
                                    <span class="price-jg">{{ key.price_label }}</span>
                                    <span class="price-dw">起</span>
                                </div>
                            </div>
                        </li>
                        <!-- <li class="route">
                            <div class="route-img">
                                <img src="http://localhost:8080/img/like3.png" alt="">
                                <span>杭州出发</span>
                            </div>
                            <div class="route-desc">
                                <div class="desc-title">
                                    <span>二十四节气之·春生</span>
                                </div> 
                                <div class="desc-price">
                                    <span class="price-fh">￥</span>
                                    <span class="price-jg">78</span>
                                    <span class="price-dw">起</span>
                                </div>
                            </div>
                        </li>
                        <li class="route">
                            <div class="route-img">
                                <img src="http://localhost:8080/img/like2.jpg" alt="">
                                <span>杭州出发</span>
                            </div>
                            <div class="route-desc">
                                <div class="desc-title">
                                    <span>二十四节气</span>
                                </div> 
                                <div class="desc-price">
                                    <span class="price-fh">￥</span>
                                    <span class="price-jg">78</span>
                                    <span class="price-dw">起</span>
                                </div>
                            </div>
                        </li> -->
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    props: [
        'classified'
    ],
    data() {
        return {
            
        }
    },
    methods: {
        toDetails(id) {
            this.$router.push({
                path: '/details',
                query: {
                    id: id
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.like-top{
    display: flex;
    height: 2.8125rem;
    line-height: 2.8125rem;
    justify-content: space-between;
    .title-left{
        position: relative;
        span{
            padding-left: 1rem;
            font-size: 1.1rem;
            font-weight: 700;
        }
    }
    .title-left::before{
        content: "";
        display: inline-block;
        width: .25rem;
        height: 1rem;
        background: #fed101;
        position: absolute;
        top: 0.8rem;
        
    }
    .title-right{
        padding-right: .5rem;
        color: #999;
        font-size: .9375rem;
        font-weight: 700;
    }
}
.like-bottom{
    padding: 0 1rem;
    // height: 9rem;
    .content-banner{
        background-image: url('http://localhost:8080/img/like1.jpg');
        height: 10.46875rem;
        background-color: #fff9db;
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
        .banner-tag{
            position: absolute;
            top: 0;
            left: 0;
            padding: .2rem;
            color: #fff;
            display: inline-block;
            background: rgba(0,0,0,.5);
        }
        .banner-info{
            position: absolute;
            left: 0;
            bottom: .5rem;
            color: #fff;
            display: flex;
            justify-content: space-between;
            .banner-title{
                padding-left: .9rem;
                padding-right: 2rem;
                font-size: 1rem;
                font-weight: 700;
                width: 13.34rem;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            .banner-price{
                span{
                    font-size: .6rem;
                    font-weight: 700;
                    color: #ff6000;
                }
                span:nth-child(2){
                    font-size: 1rem;
                }
            }
        }
    }
    .content-list{
        display: flex;
        flex-wrap: nowrap;
        padding-top: .5rem;
        li{
            margin-left: .4rem;
        }
        li:first-child {
            margin-left: 0;
        }
        .route{
            width: 6.9375rem;
            height: 9.15625rem;
            border-radius: .3rem;
            overflow: hidden;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            flex-direction: column;
            background-color: #f9f9f9;
            .route-img{
                // background-image: url('http://localhost:8080/img/like2.jpg');
                position: relative;
                // background-color: #fff9db;
                // background-size: cover;
                // background-repeat: no-repeat;
                width: 6.9375rem;
                height: 4.59rem;
                img{
                    width: 100%;
                    height: 100%;
                }
                span{
                    position: absolute;
                    top: 0;
                    left: 0;
                    padding: .2rem;
                    color: #fff;
                    display: inline-block;
                    background: rgba(0,0,0,.5);
                }
            }
            .route-desc{
                display: flex;
                padding: .5rem;
                flex-direction: column;
                justify-content: space-between;
                height: 3.8rem;
                .desc-title{
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    color: #333;
                    font-size: .9rem;
                    font-weight: 600;
                }
                .desc-price{
                    font-size: .9rem;
                    font-weight: 600;
                    color: #ff6000;
                }
            }
        }
    }
}
</style>