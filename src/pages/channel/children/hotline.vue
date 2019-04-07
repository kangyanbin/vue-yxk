<template>
    <div class="hot-line">
        <ul v-if="hot_lines" class="line-list">
            <li v-for="(item,index) in hot_lines.lines" :key="index">
                <div class="item">
                    <span class="gather">{{ item.class_theme_name }}</span>
                    <div class="item-top">
                        <!-- <img :src="item.img" alt=""> -->
                        <img src="@/assets/img/hotline.jpg" alt="">
                    </div>
                    <div class="item-bottom">
                        <p>{{ item.title }}</p>
                        <span class="site">{{ item.jihe }}</span>
                        <div class="item-price">
                            <span class="price-fh">&yen;</span>
                            <span class="price-jg">{{ item.price }}</span>
                            <span class="price-dw">起</span>
                        </div>
                    </div>
                </div>
            </li>
            <!-- <li>
                <div class="item">
                    <span class="gather">深度游</span>
                    <div class="item-top">
                        <img src="@/assets/img/hotline.jpg" alt="">
                    </div>
                    <div class="item-bottom">
                        <p>【坝上草原休闲6日】6-8月 游皇家猎场乌兰布统，金山岭长城/承德避暑山庄、经典/升级套餐搭配 历年内蒙草原线路销量第一（2019升级坝上牧歌营地：500亩私家草场，草原冷餐会，7-8月每日发团无需二次确认）</p>
                        <span class="site">北京出发</span>
                        <div class="item-price">
                            <span class="price-fh">&yen;</span>
                            <span class="price-jg">1580</span>
                            <span class="price-dw">起</span>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="item">
                    <span class="gather">深度游</span>
                    <div class="item-top">
                        <img src="@/assets/img/hotline.jpg" alt="">
                    </div>
                    <div class="item-bottom">
                        <p>【坝上草原休闲6日】6-8月 游皇家猎场乌兰布统，金山岭长城/承德避暑山庄、经典/升级套餐搭配 历年内蒙草原线路销量第一（2019升级坝上牧歌营地：500亩私家草场，草原冷餐会，7-8月每日发团无需二次确认）</p>
                        <span class="site">北京出发</span>
                        <div class="item-price">
                            <span class="price-fh">&yen;</span>
                            <span class="price-jg">1580</span>
                            <span class="price-dw">起</span>
                        </div>
                    </div>
                </div>
            </li> -->
        </ul>
    </div>
</template>
<script>
export default {
    props: [
        'hot_lines'
    ],
    created(){
        
    },
    mounted(){
        
    },
    methods: {
        
    },
    activated() {
        
    }
}
</script>
<style lang="scss" scoped>
.hot-line{
    width: 100%;
    // height: 16.25rem;
    height: 14.8125rem;
    background-color: #fff;
    margin-bottom: .4rem;
    .line-list{
        position: relative;
        width: 100%;
        height: 16.25rem;
        overflow: hidden;
        top: -1.5rem;
        z-index: 1000;
        background: url(../../../assets/img/hot.png) no-repeat;
        background-size: cover;
        li:first-of-type {
            margin-left: .9375rem;
        }
        li{
            width: 6.96875rem;
            float: left;
            z-index: 1000000;
            margin: 4.6875rem .3125rem 0 0;
            border-radius: .3rem;
            overflow: hidden;
            .item{
                position: relative;
                .gather{
                    position: absolute;
                    left: 0;
                    top: .3rem;
                    padding: .3rem;
                    color: #fff;
                    background-color: rgba(0,0,0,.68);
                    border-top-right-radius: .65rem;
                    border-bottom-right-radius: .65rem;
                }
                .item-top{
                    img{
                        display: block;
                        width: 100%;
                        height: 4.75rem;
                    }
                }
                .item-bottom{
                    height: 5.78125rem;
                    background-color: #fff;
                    p{
                        height: 2.0625rem;
                        line-height: 1.2rem;
                        padding: .3rem .2rem;
                        font-size: .9rem;
                        color: #353535;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        overflow: hidden;
                    }
                    .site{
                        display: inline-block;
                        border-radius: .2rem;
                        margin-left: .3rem;
                        margin-bottom: .3rem;
                        padding: .3rem;
                        color: #888;
                        background-color: #eaeaea;
                    }
                    .item-price{
                        color: #ff7100;
                        margin-left: .2rem;
                        .price-jg{
                            font-size: .9rem;
                            font-weight: bolder;
                            margin: 0 .2rem;
                        }
                        .price-dw{
                            font-size: .9rem;
                            color: #888;
                        }
                    }
                }
            }
        }
    }
}
</style>