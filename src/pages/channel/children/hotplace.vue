<template>
    <div class="hot-place">
        <div class="place-top">
            热门目的地
        </div>
        <div class="place-bottom">
            <swiper v-if="des_lines" :options="swiperOption">
                <swiper-slide v-for="(slide,index) in des_lines.lines" :key="index">
                    <div class="item-box">
                        <div class="item" v-for="(item,index) in slide" :key="index">
                            <!-- <img :src="item.pic" alt=""> -->
                            <img src="@/assets/img/place.png" alt="">
                            <span>{{ item.title }}</span>
                        </div>
                        <!-- <div class="item">
                            <img src="@/assets/img/place.png" alt="">
                            <span>东北</span>
                        </div>
                        <div class="item">
                            <img src="@/assets/img/place.png" alt="">
                            <span>东北</span>
                        </div>
                        <div class="item">
                            <img src="@/assets/img/place.png" alt="">
                            <span>东北</span>
                        </div>
                        <div class="item">
                            <img src="@/assets/img/place.png" alt="">
                            <span>东北</span>
                        </div>
                        <div class="item">
                            <img src="@/assets/img/place.png" alt="">
                            <span>东北</span>
                        </div> -->
                    </div>
                </swiper-slide>
                <!-- <swiper-slide>
                    <div class="item-box">
                        <div class="item">
                            <img src="@/assets/img/place.png" alt="">
                            <span>东北</span>
                        </div>
                        <div class="item">
                            <img src="@/assets/img/place.png" alt="">
                            <span>东北</span>
                        </div>
                        <div class="item">
                            <img src="@/assets/img/place.png" alt="">
                            <span>东北</span>
                        </div>
                        <div class="item">
                            <img src="@/assets/img/place.png" alt="">
                            <span>东北</span>
                        </div>
                        <div class="item">
                            <img src="@/assets/img/place.png" alt="">
                            <span>东北</span>
                        </div>
                        <div class="item">
                            <img src="@/assets/img/place.png" alt="">
                            <span>东北</span>
                        </div>
                    </div>
                </swiper-slide> -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
export default {
    props:[
        'des_lines'
    ],
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: ".swiper-pagination"
                }
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.hot-place{
    width: 100%;
    background-color: #fff;
    margin-bottom: .6rem;
    .place-top{
        position: relative;
        width: 100%;
        height: 3.59375rem;
        font-weight: bolder;
        color: #353535;
        font-size: 1.2rem;
        box-sizing: border-box;
        padding-left: .8rem;
        line-height: 3.59375rem;
    }
    .place-top::before{
        content: "";
        position: absolute;
        left: 0;
        top: 1.25rem;
        width: .25rem;
        height: 1.1rem;
        background-color: #ffd800;
    }
    .place-bottom{
        .item-box{
            width: 100%;
            overflow: hidden;
            display: flex;
            flex-wrap: wrap;
            padding-bottom: 1.2rem;
            .item{
                margin-left: .625rem;
                margin-bottom: .625rem;
                position: relative;
                width: 7rem;
                height: 7rem;
                img{
                    display: block;
                    width: 7rem;
                    height: 7rem;
                }
                span{
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 1.5625rem;
                    line-height: 1.5625rem;
                    text-align: center;
                    font-size: .95rem;
                    font-weight: 700;
                    color: #fff;
                    background-color: rgba(0,0,0,.6);
                }
            }
        }
    }
}
</style>

